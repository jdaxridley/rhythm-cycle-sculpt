"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

/* -------------------- Types & data -------------------- */

type ClassKey = "Cycle" | "Barre" | "Fit Body" | "Mat Pilates" | "Yoga";

type ClassSlot = {
  time: string;
  end: string;
  name: ClassKey;
  instructor: InstructorKey;
  duration: string;
  capacity: number;
  taken: number;
};

type InstructorKey =
  | "Tommy"
  | "Bekah"
  | "Carly"
  | "Josie"
  | "Maggie"
  | "Mya"
  | "Daniel";

type Instructor = {
  fullName: string;
  image?: string;
  initials: string;
};

const instructors: Record<InstructorKey, Instructor> = {
  Tommy: { fullName: "Tommy Gray", image: "/instructor-tommy.png", initials: "TG" },
  Bekah: { fullName: "Bekah Berardi", image: "/instructor-bekah.png", initials: "BB" },
  Carly: { fullName: "Carly Martin", image: "/instructor-carly.png", initials: "CM" },
  Josie: { fullName: "Josie Williams", image: "/instructor-josie.png", initials: "JW" },
  Maggie: { fullName: "Maggie Bourk", image: "/instructor-maggie.png", initials: "MB" },
  Mya: { fullName: "Mya Fillingham", initials: "MF" },
  Daniel: { fullName: "Daniel Lindsay", image: "/instructor-daniel.png", initials: "DL" },
};

const classMeta: Record<
  ClassKey,
  { color: string; image: string; imagePosition?: string; tagline: string }
> = {
  Cycle: {
    color: "var(--class-cycle)",
    image: "/cycle-action.jpg",
    imagePosition: "center 18%",
    tagline: "45 minutes. One ride. Full reset.",
  },
  Barre: {
    color: "var(--class-barre)",
    image: "/barre-class.jpg",
    tagline: "Long lines. Steady burn. No mirrors required.",
  },
  "Fit Body": {
    color: "var(--class-fitbody)",
    image: "/fit-body-class.jpg",
    tagline: "Strength built rep by deliberate rep.",
  },
  "Mat Pilates": {
    color: "var(--class-matpilates)",
    image: "/mat-pilates.jpg",
    tagline: "Core, control, and quiet power.",
  },
  Yoga: {
    color: "var(--class-yoga)",
    image: "/yoga.jpg",
    tagline: "Breath first. Everything follows.",
  },
};

const days = [
  { key: "mon", label: "Mon", date: "Apr 27" },
  { key: "tue", label: "Tue", date: "Apr 28" },
  { key: "wed", label: "Wed", date: "Apr 29" },
  { key: "thu", label: "Thu", date: "Apr 30" },
  { key: "fri", label: "Fri", date: "May 1" },
  { key: "sat", label: "Sat", date: "May 2" },
  { key: "sun", label: "Sun", date: "May 3" },
] as const;

type DayKey = (typeof days)[number]["key"];

const schedule: Record<DayKey, ClassSlot[]> = {
  mon: [
    { time: "5:30 AM", end: "6:15 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 14 },
    { time: "9:30 AM", end: "10:20 AM", name: "Barre", instructor: "Tommy", duration: "50 min", capacity: 14, taken: 9 },
    { time: "12:00 PM", end: "12:45 PM", name: "Cycle", instructor: "Maggie", duration: "45 min", capacity: 18, taken: 18 },
    { time: "5:30 PM", end: "6:20 PM", name: "Fit Body", instructor: "Carly", duration: "50 min", capacity: 16, taken: 11 },
    { time: "6:30 PM", end: "7:30 PM", name: "Yoga", instructor: "Mya", duration: "60 min", capacity: 14, taken: 6 },
  ],
  tue: [
    { time: "6:00 AM", end: "6:50 AM", name: "Mat Pilates", instructor: "Mya", duration: "50 min", capacity: 14, taken: 8 },
    { time: "9:30 AM", end: "10:15 AM", name: "Cycle", instructor: "Bekah", duration: "45 min", capacity: 18, taken: 15 },
    { time: "4:30 PM", end: "5:20 PM", name: "Barre", instructor: "Tommy", duration: "50 min", capacity: 14, taken: 7 },
    { time: "5:30 PM", end: "6:15 PM", name: "Cycle", instructor: "Josie", duration: "45 min", capacity: 18, taken: 16 },
  ],
  wed: [
    { time: "5:30 AM", end: "6:15 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 12 },
    { time: "9:30 AM", end: "10:20 AM", name: "Fit Body", instructor: "Tommy", duration: "50 min", capacity: 16, taken: 10 },
    { time: "12:00 PM", end: "12:50 PM", name: "Mat Pilates", instructor: "Mya", duration: "50 min", capacity: 14, taken: 5 },
    { time: "5:30 PM", end: "6:15 PM", name: "Cycle", instructor: "Carly", duration: "45 min", capacity: 18, taken: 17 },
    { time: "6:30 PM", end: "7:30 PM", name: "Yoga", instructor: "Mya", duration: "60 min", capacity: 14, taken: 4 },
  ],
  thu: [
    { time: "6:00 AM", end: "6:45 AM", name: "Cycle", instructor: "Bekah", duration: "45 min", capacity: 18, taken: 13 },
    { time: "9:30 AM", end: "10:20 AM", name: "Barre", instructor: "Tommy", duration: "50 min", capacity: 14, taken: 11 },
    { time: "4:30 PM", end: "5:20 PM", name: "Fit Body", instructor: "Josie", duration: "50 min", capacity: 16, taken: 8 },
    { time: "5:30 PM", end: "6:15 PM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 18 },
  ],
  fri: [
    { time: "5:30 AM", end: "6:15 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 14 },
    { time: "9:30 AM", end: "10:20 AM", name: "Mat Pilates", instructor: "Mya", duration: "50 min", capacity: 14, taken: 9 },
    { time: "12:00 PM", end: "12:45 PM", name: "Cycle", instructor: "Maggie", duration: "45 min", capacity: 18, taken: 12 },
    { time: "5:30 PM", end: "6:30 PM", name: "Yoga", instructor: "Mya", duration: "60 min", capacity: 14, taken: 7 },
  ],
  sat: [
    { time: "8:00 AM", end: "8:45 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 18 },
    { time: "9:00 AM", end: "9:50 AM", name: "Fit Body", instructor: "Carly", duration: "50 min", capacity: 16, taken: 14 },
    { time: "10:00 AM", end: "10:50 AM", name: "Barre", instructor: "Tommy", duration: "50 min", capacity: 14, taken: 12 },
    { time: "11:00 AM", end: "12:00 PM", name: "Yoga", instructor: "Mya", duration: "60 min", capacity: 14, taken: 9 },
  ],
  sun: [
    { time: "9:00 AM", end: "9:45 AM", name: "Cycle", instructor: "Josie", duration: "45 min", capacity: 18, taken: 11 },
    { time: "10:00 AM", end: "10:50 AM", name: "Mat Pilates", instructor: "Mya", duration: "50 min", capacity: 14, taken: 6 },
    { time: "11:00 AM", end: "12:00 PM", name: "Yoga", instructor: "Mya", duration: "60 min", capacity: 14, taken: 8 },
  ],
};

const filterOptions: Array<"All" | ClassKey> = [
  "All",
  "Cycle",
  "Barre",
  "Mat Pilates",
  "Fit Body",
  "Yoga",
];

/* -------------------- Helpers -------------------- */

function spotsLabel(taken: number, capacity: number) {
  const left = capacity - taken;
  if (left === 0) return "Waitlist";
  if (left <= 3) return `${left} spot${left === 1 ? "" : "s"} left`;
  return `${left} open`;
}

function pickSpotlight(slots: ClassSlot[]): ClassSlot {
  // Prefer first slot that isn't fully booked; else first slot of day.
  return slots.find((s) => s.taken < s.capacity) ?? slots[0];
}

/* -------------------- Avatar -------------------- */

function InstructorAvatar({
  who,
  size = 40,
  ring,
}: {
  who: InstructorKey;
  size?: number;
  ring?: string;
}) {
  const inst = instructors[who];
  const ringStyle = ring ? { boxShadow: `0 0 0 2px ${ring}` } : undefined;
  return (
    <div
      className="relative flex-shrink-0 rounded-full overflow-hidden bg-background-tertiary"
      style={{ width: size, height: size, ...ringStyle }}
    >
      {inst.image ? (
        <Image
          src={inst.image}
          alt={inst.fullName}
          fill
          sizes={`${size}px`}
          className="object-cover object-top"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center font-display tracking-wide"
          style={{
            background: ring ? `${ring}22` : "var(--background-tertiary)",
            color: ring ?? "var(--foreground)",
            fontSize: size * 0.42,
          }}
        >
          {inst.initials}
        </div>
      )}
    </div>
  );
}

/* -------------------- Spotlight hero -------------------- */

function SpotlightHero({
  slot,
  onReserve,
}: {
  slot: ClassSlot;
  onReserve: (s: ClassSlot) => void;
}) {
  const meta = classMeta[slot.name];
  const inst = instructors[slot.instructor];
  const left = slot.capacity - slot.taken;
  const full = left === 0;

  return (
    <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 bg-background overflow-hidden">
      {/* atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: `radial-gradient(60% 60% at 80% 20%, ${meta.color}26 0%, transparent 60%), radial-gradient(50% 50% at 10% 80%, ${meta.color}1a 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-5 font-medium flex items-center gap-3"
        >
          <span className="w-8 h-px bg-divider" />
          Next class &middot; Today
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-[8rem] tracking-wide uppercase leading-[0.9] mb-10"
        >
          Find your{" "}
          <span className="text-gradient-brand-animated">spot.</span>
        </motion.h1>

        {/* Spotlight card — asymmetric image left, content right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.9fr)] gap-6 lg:gap-8"
        >
          {/* Image panel */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] rounded-3xl overflow-hidden border border-divider">
            <Image
              src={meta.image}
              alt={`${slot.name} class`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              style={{ objectPosition: meta.imagePosition ?? "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            {/* Class badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-background/40 border border-divider">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: meta.color }}
              />
              <span
                className="text-[11px] tracking-[0.3em] uppercase font-semibold"
                style={{ color: meta.color }}
              >
                {slot.name}
              </span>
            </div>
            {/* Instructor + tagline overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
              <InstructorAvatar who={slot.instructor} size={56} ring={meta.color} />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">
                  With
                </p>
                <p className="font-display text-2xl tracking-wide uppercase leading-none">
                  {inst.fullName}
                </p>
              </div>
            </div>
          </div>

          {/* Content panel */}
          <div className="flex flex-col justify-between gap-8 p-2 lg:p-4">
            <div>
              <p
                className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3"
                style={{ color: meta.color }}
              >
                {meta.tagline}
              </p>

              {/* Time block */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-6xl lg:text-7xl tracking-wide leading-none">
                  {slot.time}
                </span>
                <span className="text-text-muted text-sm tracking-[0.2em] uppercase">
                  → {slot.end}
                </span>
              </div>

              {/* Detail rows */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 max-w-md">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">
                    Duration
                  </p>
                  <p className="text-foreground text-base">{slot.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">
                    Studio
                  </p>
                  <p className="text-foreground text-base">Shawnee, KS</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-2">
                    Capacity
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative h-1.5 flex-1 max-w-[260px] bg-background-tertiary rounded-full overflow-hidden">
                      <span
                        className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
                        style={{
                          width: `${(slot.taken / slot.capacity) * 100}%`,
                          background: full ? "var(--text-muted)" : meta.color,
                        }}
                      />
                    </div>
                    <span className="text-sm text-text-secondary tabular-nums">
                      {slot.taken}<span className="text-text-muted">/{slot.capacity}</span>
                    </span>
                    <span
                      className={`text-[10px] tracking-[0.25em] uppercase font-semibold ${
                        full ? "text-text-muted" : ""
                      }`}
                      style={{ color: full ? undefined : meta.color }}
                    >
                      {spotsLabel(slot.taken, slot.capacity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onReserve(slot)}
                disabled={full}
                className={`group flex-1 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 ${
                  full
                    ? "bg-background-tertiary text-text-muted cursor-not-allowed"
                    : "bg-gradient-brand text-background hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(30,122,238,0.35)]"
                }`}
              >
                {full ? "Join Waitlist" : "Reserve This Spot"}
                {!full && (
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.4}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs tracking-[0.25em] uppercase font-semibold border border-divider text-foreground hover:border-foreground transition-colors duration-300"
              >
                View full week
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- Reserve modal -------------------- */

function ReserveModal({
  slot,
  onClose,
}: {
  slot: ClassSlot;
  onClose: () => void;
}) {
  const [step, setStep] = useState<"confirm" | "done">("confirm");
  const meta = classMeta[slot.name];
  const inst = instructors[slot.instructor];
  // Stable demo confirmation code based on slot identity
  const code = useMemo(
    () =>
      `RCS-${slot.name[0]}${slot.time.replace(/[^0-9A-Z]/gi, "").slice(0, 4)}-${
        Math.floor(Math.random() * 9000) + 1000
      }`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-foreground/50 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg bg-background rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-divider"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Persistent demo banner */}
        <div className="bg-gradient-brand text-background text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold py-2.5 px-4">
          Preview · Booking integration coming soon
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-12 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-background/70 backdrop-blur-md border border-divider hover:bg-background transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <AnimatePresence mode="wait">
          {step === "confirm" ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              {/* Class image header */}
              <div className="relative h-44 sm:h-56">
                <Image
                  src={meta.image}
                  alt={slot.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 512px"
                  className="object-cover"
                  style={{ objectPosition: meta.imagePosition ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: meta.color }}
                    />
                    <span
                      className="text-[10px] tracking-[0.3em] uppercase font-semibold"
                      style={{ color: meta.color }}
                    >
                      {slot.name}
                    </span>
                  </div>
                  <h3
                    className="font-display text-4xl tracking-wide uppercase leading-none"
                    style={{ color: meta.color }}
                  >
                    {slot.time}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 sm:px-8 py-7">
                <div className="flex items-center gap-4 pb-5 border-b border-divider">
                  <InstructorAvatar who={slot.instructor} size={48} ring={meta.color} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">
                      Instructor
                    </p>
                    <p className="font-display text-xl tracking-wide uppercase leading-none">
                      {inst.fullName}
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-4 py-5 border-b border-divider">
                  <div>
                    <dt className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">When</dt>
                    <dd className="text-foreground text-sm">{slot.time} – {slot.end}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">Duration</dt>
                    <dd className="text-foreground text-sm">{slot.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">Spots left</dt>
                    <dd className="text-foreground text-sm">
                      {slot.capacity - slot.taken} of {slot.capacity}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">Studio</dt>
                    <dd className="text-foreground text-sm">Shawnee, KS</dd>
                  </div>
                </dl>

                <p className="text-text-secondary text-sm leading-relaxed py-5">
                  Bikes &amp; mats are first-come within the studio — your reservation
                  holds the spot, not the equipment number. Late cancels (within 12
                  hours) and no-shows forfeit the class.
                </p>

                <button
                  onClick={() => setStep("done")}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gradient-brand text-background text-xs tracking-[0.25em] uppercase font-semibold hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(155,45,229,0.35)] transition-all duration-300"
                >
                  Confirm Reservation
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 sm:px-8 py-10"
            >
              {/* Branded ticket */}
              <div className="mb-6 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center shadow-[0_12px_40px_rgba(26,194,184,0.4)]"
                >
                  <svg className="w-8 h-8 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              </div>

              <p className="text-center text-[11px] tracking-[0.4em] uppercase text-text-muted mb-2">
                You&rsquo;re in
              </p>
              <h3 className="font-display text-center text-4xl sm:text-5xl tracking-wide uppercase leading-none mb-1">
                See you at <span style={{ color: meta.color }}>{slot.time}</span>
              </h3>
              <p className="text-center text-text-secondary text-sm mb-7">
                {slot.name} with {inst.fullName} · {slot.duration}
              </p>

              {/* Confirmation card (ticket-style with notch edges) */}
              <div className="relative rounded-2xl bg-background-secondary border border-divider overflow-hidden">
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-background border border-divider -translate-y-1/2" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-background border border-divider -translate-y-1/2" />

                <div className="px-5 py-4 flex items-center gap-4">
                  <InstructorAvatar who={slot.instructor} size={44} ring={meta.color} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted">
                      {slot.name} · {slot.duration}
                    </p>
                    <p className="font-display text-lg tracking-wide uppercase leading-none mt-0.5">
                      {inst.fullName}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl tracking-wide leading-none">
                      {slot.time}
                    </p>
                  </div>
                </div>

                <div className="border-t border-dashed border-divider px-5 py-3 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase">
                  <span className="text-text-muted">Confirmation</span>
                  <span className="font-mono text-foreground tracking-wider">{code}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="mailto:hello@rhythmcyclesculpt.com?subject=Add%20to%20calendar"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-divider text-xs tracking-[0.2em] uppercase font-semibold text-foreground hover:border-foreground transition-colors duration-300"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to calendar
                </a>
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-foreground text-background text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gradient-brand transition-all duration-300"
                >
                  Done
                </button>
              </div>

              <p className="text-center text-[10px] tracking-[0.3em] uppercase text-text-muted mt-6">
                This is a preview — no real booking was made
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* -------------------- Page -------------------- */

function ReservePageInner() {
  const params = useSearchParams();
  const initialFilter: "All" | ClassKey = useMemo(() => {
    const raw = params.get("class");
    if (!raw) return "All";
    const match = filterOptions.find(
      (opt) => opt !== "All" && opt.toLowerCase() === raw.toLowerCase()
    );
    return match ?? "All";
  }, [params]);

  const [activeDay, setActiveDay] = useState<DayKey>("wed");
  const [activeFilter, setActiveFilter] = useState<"All" | ClassKey>(initialFilter);
  const [selected, setSelected] = useState<ClassSlot | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const slotsForDay = useMemo(() => schedule[activeDay], [activeDay]);
  const visibleSlots = useMemo(
    () =>
      activeFilter === "All"
        ? slotsForDay
        : slotsForDay.filter((s) => s.name === activeFilter),
    [slotsForDay, activeFilter]
  );
  const spotlight = useMemo(() => pickSpotlight(slotsForDay), [slotsForDay]);

  return (
    <>
      <Header />
      <main>
        {/* Spotlight hero */}
        <SpotlightHero slot={spotlight} onReserve={(s) => setSelected(s)} />

        {/* Day tabs */}
        <section
          id="schedule"
          className="sticky top-20 z-30 bg-background/85 backdrop-blur-md border-y border-divider"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex gap-2 sm:gap-3 overflow-x-auto py-4 -mx-2 px-2">
              {days.map((d) => {
                const active = d.key === activeDay;
                return (
                  <button
                    key={d.key}
                    onClick={() => setActiveDay(d.key)}
                    className={`relative flex-shrink-0 flex flex-col items-center justify-center min-w-[72px] sm:min-w-[88px] py-3 px-4 rounded-2xl transition-all duration-300 ${
                      active
                        ? "bg-foreground text-background shadow-lg"
                        : "bg-background-secondary text-text-secondary hover:bg-background-tertiary"
                    }`}
                  >
                    <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-medium opacity-80">
                      {d.label}
                    </span>
                    <span className="font-display text-2xl sm:text-3xl tracking-wide leading-none mt-1">
                      {d.date.split(" ")[1]}
                    </span>
                    {active && (
                      <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-brand rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filter pills */}
        <section className="bg-background border-b border-divider">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
            <div className="flex gap-2 sm:gap-2.5 overflow-x-auto -mx-2 px-2">
              {filterOptions.map((opt) => {
                const active = opt === activeFilter;
                const color = opt === "All" ? null : classMeta[opt].color;
                return (
                  <button
                    key={opt}
                    onClick={() => setActiveFilter(opt)}
                    className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] tracking-[0.25em] uppercase font-semibold border transition-all duration-300 ${
                      active
                        ? "border-transparent text-background"
                        : "border-divider text-text-secondary hover:border-foreground hover:text-foreground"
                    }`}
                    style={
                      active
                        ? {
                            background: color ?? "var(--foreground)",
                          }
                        : undefined
                    }
                  >
                    {color && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: active ? "var(--background)" : color,
                        }}
                      />
                    )}
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            {visibleSlots.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display text-4xl tracking-wide uppercase text-text-muted mb-3">
                  No {activeFilter} classes
                </p>
                <p className="text-text-secondary text-sm">
                  Try a different day or pick {" "}
                  <button
                    onClick={() => setActiveFilter("All")}
                    className="text-foreground underline underline-offset-4"
                  >
                    All classes
                  </button>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {visibleSlots.map((slot, i) => {
                  const full = slot.taken >= slot.capacity;
                  const pct = Math.min(100, (slot.taken / slot.capacity) * 100);
                  const meta = classMeta[slot.name];
                  const inst = instructors[slot.instructor];
                  return (
                    <ScrollReveal key={`${activeDay}-${activeFilter}-${i}`} delay={i * 0.04}>
                      <div
                        className="group relative grid grid-cols-12 gap-4 sm:gap-6 items-center bg-background-secondary rounded-3xl p-5 sm:p-6 lg:p-7 border border-divider hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden"
                      >
                        {/* hover sheen */}
                        <span
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: `linear-gradient(120deg, transparent 30%, ${meta.color}14 50%, transparent 70%)`,
                          }}
                        />

                        {/* Time */}
                        <div className="relative col-span-12 sm:col-span-3 lg:col-span-2 flex sm:flex-col items-baseline sm:items-start gap-2 sm:gap-1">
                          <span className="font-display text-3xl lg:text-4xl tracking-wide leading-none text-foreground">
                            {slot.time}
                          </span>
                          <span className="text-xs text-text-muted tracking-wider">
                            ends {slot.end}
                          </span>
                        </div>

                        {/* Class info */}
                        <div className="relative col-span-12 sm:col-span-6 lg:col-span-7 flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ background: meta.color }}
                            />
                            <h3
                              className="font-display text-2xl sm:text-3xl tracking-wide uppercase leading-none"
                              style={{ color: meta.color }}
                            >
                              {slot.name}
                            </h3>
                            <span className="hidden sm:inline text-xs text-text-muted tracking-[0.25em] uppercase ml-2">
                              {slot.duration}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 mt-1">
                            <InstructorAvatar who={slot.instructor} size={32} />
                            <p className="text-sm text-text-secondary">
                              With{" "}
                              <span className="text-foreground font-medium">
                                {inst.fullName}
                              </span>
                            </p>
                          </div>

                          {/* Capacity bar */}
                          <div className="flex items-center gap-3 mt-2">
                            <div className="relative h-1 flex-1 bg-background-tertiary rounded-full overflow-hidden max-w-[200px]">
                              <span
                                className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                                style={{
                                  width: `${pct}%`,
                                  background: full ? "var(--text-muted)" : meta.color,
                                }}
                              />
                            </div>
                            <span
                              className={`text-xs tracking-[0.2em] uppercase font-medium ${
                                full ? "text-text-muted" : "text-text-secondary"
                              }`}
                            >
                              {spotsLabel(slot.taken, slot.capacity)}
                            </span>
                          </div>
                        </div>

                        {/* Reserve button */}
                        <div className="relative col-span-12 sm:col-span-3 flex sm:justify-end">
                          <button
                            onClick={() => setSelected(slot)}
                            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 ${
                              full
                                ? "bg-background-tertiary text-text-secondary hover:bg-background-tertiary/70"
                                : "bg-foreground text-background hover:bg-gradient-brand hover:scale-[1.03]"
                            }`}
                          >
                            {full ? "Join Waitlist" : "Reserve"}
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            )}

            {/* Legend */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {(Object.keys(classMeta) as ClassKey[]).map((name) => (
                <div key={name} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: classMeta[name].color }}
                  />
                  <span className="text-xs text-text-secondary tracking-[0.25em] uppercase">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom note */}
        <section className="py-16 bg-background-secondary border-t border-divider">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">
              Studio Policy
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Late cancels (within 12 hours) and no-shows forfeit the class.
              Bikes and mats are first-come within the studio — your reservation
              holds the spot, not the equipment number. Need help?{" "}
              <a
                href="mailto:hello@rhythmcyclesculpt.com"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                hello@rhythmcyclesculpt.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {selected && (
          <ReserveModal slot={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function ReservePage() {
  return (
    <Suspense fallback={null}>
      <ReservePageInner />
    </Suspense>
  );
}
