"use client";

import { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

type ClassKey = "Cycle" | "Barre" | "Fit Body" | "Mat Pilates" | "Yoga";

type ClassSlot = {
  time: string;
  end: string;
  name: ClassKey;
  instructor: string;
  duration: string;
  capacity: number;
  taken: number;
};

const classColors: Record<ClassKey, string> = {
  Cycle: "var(--class-cycle)",
  Barre: "var(--class-barre)",
  "Fit Body": "var(--class-fitbody)",
  "Mat Pilates": "var(--class-matpilates)",
  Yoga: "var(--class-yoga)",
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
    { time: "9:30 AM", end: "10:20 AM", name: "Barre", instructor: "Lauren", duration: "50 min", capacity: 14, taken: 9 },
    { time: "12:00 PM", end: "12:45 PM", name: "Cycle", instructor: "Megan", duration: "45 min", capacity: 18, taken: 18 },
    { time: "5:30 PM", end: "6:20 PM", name: "Fit Body", instructor: "Tommy", duration: "50 min", capacity: 16, taken: 11 },
    { time: "6:30 PM", end: "7:30 PM", name: "Yoga", instructor: "Sara", duration: "60 min", capacity: 14, taken: 6 },
  ],
  tue: [
    { time: "6:00 AM", end: "6:50 AM", name: "Mat Pilates", instructor: "Lauren", duration: "50 min", capacity: 14, taken: 8 },
    { time: "9:30 AM", end: "10:15 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 15 },
    { time: "4:30 PM", end: "5:20 PM", name: "Barre", instructor: "Lauren", duration: "50 min", capacity: 14, taken: 7 },
    { time: "5:30 PM", end: "6:15 PM", name: "Cycle", instructor: "Megan", duration: "45 min", capacity: 18, taken: 16 },
  ],
  wed: [
    { time: "5:30 AM", end: "6:15 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 12 },
    { time: "9:30 AM", end: "10:20 AM", name: "Fit Body", instructor: "Tommy", duration: "50 min", capacity: 16, taken: 10 },
    { time: "12:00 PM", end: "12:50 PM", name: "Mat Pilates", instructor: "Lauren", duration: "50 min", capacity: 14, taken: 5 },
    { time: "5:30 PM", end: "6:15 PM", name: "Cycle", instructor: "Megan", duration: "45 min", capacity: 18, taken: 17 },
    { time: "6:30 PM", end: "7:30 PM", name: "Yoga", instructor: "Sara", duration: "60 min", capacity: 14, taken: 4 },
  ],
  thu: [
    { time: "6:00 AM", end: "6:45 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 13 },
    { time: "9:30 AM", end: "10:20 AM", name: "Barre", instructor: "Lauren", duration: "50 min", capacity: 14, taken: 11 },
    { time: "4:30 PM", end: "5:20 PM", name: "Fit Body", instructor: "Megan", duration: "50 min", capacity: 16, taken: 8 },
    { time: "5:30 PM", end: "6:15 PM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 18 },
  ],
  fri: [
    { time: "5:30 AM", end: "6:15 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 14 },
    { time: "9:30 AM", end: "10:20 AM", name: "Mat Pilates", instructor: "Lauren", duration: "50 min", capacity: 14, taken: 9 },
    { time: "12:00 PM", end: "12:45 PM", name: "Cycle", instructor: "Megan", duration: "45 min", capacity: 18, taken: 12 },
    { time: "5:30 PM", end: "6:30 PM", name: "Yoga", instructor: "Sara", duration: "60 min", capacity: 14, taken: 7 },
  ],
  sat: [
    { time: "8:00 AM", end: "8:45 AM", name: "Cycle", instructor: "Tommy", duration: "45 min", capacity: 18, taken: 18 },
    { time: "9:00 AM", end: "9:50 AM", name: "Fit Body", instructor: "Tommy", duration: "50 min", capacity: 16, taken: 14 },
    { time: "10:00 AM", end: "10:50 AM", name: "Barre", instructor: "Lauren", duration: "50 min", capacity: 14, taken: 12 },
    { time: "11:00 AM", end: "12:00 PM", name: "Yoga", instructor: "Sara", duration: "60 min", capacity: 14, taken: 9 },
  ],
  sun: [
    { time: "9:00 AM", end: "9:45 AM", name: "Cycle", instructor: "Megan", duration: "45 min", capacity: 18, taken: 11 },
    { time: "10:00 AM", end: "10:50 AM", name: "Mat Pilates", instructor: "Lauren", duration: "50 min", capacity: 14, taken: 6 },
    { time: "11:00 AM", end: "12:00 PM", name: "Yoga", instructor: "Sara", duration: "60 min", capacity: 14, taken: 8 },
  ],
};

function spotsLabel(taken: number, capacity: number) {
  const left = capacity - taken;
  if (left === 0) return "Waitlist";
  if (left <= 3) return `${left} spot${left === 1 ? "" : "s"} left`;
  return `${left} open`;
}

export default function ReservePage() {
  const [activeDay, setActiveDay] = useState<DayKey>("mon");
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

  const slots = useMemo(() => schedule[activeDay], [activeDay]);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Demo banner */}
        <div className="bg-gradient-brand text-background text-center text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold py-3 px-4">
          Preview · Live booking integration coming soon
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Reserve Your Spot
              </p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-wide uppercase mb-6 leading-[0.95]">
                This Week
                <br />
                <span className="text-gradient-brand">In The Studio</span>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                Pick a day, pick a class, claim your bike or your mat. Spots
                are released every Sunday at 8 PM for the week ahead.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Day tabs */}
        <section className="sticky top-20 z-30 bg-background/90 backdrop-blur-md border-y border-divider">
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

        {/* Schedule */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="space-y-4">
              {slots.map((slot, i) => {
                const full = slot.taken >= slot.capacity;
                const pct = Math.min(100, (slot.taken / slot.capacity) * 100);
                const color = classColors[slot.name];
                return (
                  <ScrollReveal key={`${activeDay}-${i}`} delay={i * 0.04}>
                    <div className="group relative grid grid-cols-12 gap-4 sm:gap-6 items-center bg-background-secondary rounded-3xl p-5 sm:p-6 lg:p-7 border border-divider hover:border-transparent transition-all duration-300 hover:shadow-xl">
                      {/* Time */}
                      <div className="col-span-12 sm:col-span-3 lg:col-span-2 flex sm:flex-col items-baseline sm:items-start gap-2 sm:gap-1">
                        <span className="font-display text-3xl lg:text-4xl tracking-wide leading-none text-foreground">
                          {slot.time}
                        </span>
                        <span className="text-xs text-text-muted tracking-wider">
                          ends {slot.end}
                        </span>
                      </div>

                      {/* Class info */}
                      <div className="col-span-12 sm:col-span-6 lg:col-span-7 flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: color }}
                          />
                          <h3
                            className="font-display text-2xl sm:text-3xl tracking-wide uppercase leading-none"
                            style={{ color }}
                          >
                            {slot.name}
                          </h3>
                          <span className="hidden sm:inline text-xs text-text-muted tracking-[0.25em] uppercase ml-2">
                            {slot.duration}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary mt-1">
                          With{" "}
                          <span className="text-foreground font-medium">
                            {slot.instructor}
                          </span>
                        </p>
                        {/* Capacity bar */}
                        <div className="flex items-center gap-3 mt-2">
                          <div className="relative h-1 flex-1 bg-background-tertiary rounded-full overflow-hidden max-w-[200px]">
                            <span
                              className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                              style={{
                                width: `${pct}%`,
                                background: full
                                  ? "var(--text-muted)"
                                  : color,
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
                      <div className="col-span-12 sm:col-span-3 flex sm:justify-end">
                        <button
                          onClick={() => setSelected(slot)}
                          disabled={full}
                          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 ${
                            full
                              ? "bg-background-tertiary text-text-muted cursor-not-allowed"
                              : "bg-foreground text-background hover:bg-gradient-brand hover:scale-[1.03]"
                          }`}
                        >
                          {full ? "Join Waitlist" : "Reserve"}
                          {!full && (
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
                          )}
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {(Object.keys(classColors) as ClassKey[]).map((name) => (
                <div key={name} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: classColors[name] }}
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

      {/* Reserve modal (demo stub) */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-md bg-background rounded-3xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">
              Reserving
            </p>
            <h3
              className="font-display text-4xl tracking-wide uppercase leading-none mb-2"
              style={{ color: classColors[selected.name] }}
            >
              {selected.name}
            </h3>
            <p className="text-text-secondary text-sm mb-6">
              {selected.time} · with {selected.instructor} · {selected.duration}
            </p>
            <div className="rounded-2xl bg-background-tertiary p-4 mb-6">
              <p className="text-sm text-text-secondary leading-relaxed">
                This is a preview of the booking experience. Live reservations
                will be available once the studio&apos;s scheduling system is
                connected. To hold a spot today, call or text the studio.
              </p>
            </div>
            <a
              href="tel:+19132589693"
              className="block w-full text-center px-6 py-4 rounded-full bg-gradient-brand text-background text-xs tracking-[0.25em] uppercase font-semibold hover:scale-[1.02] transition-transform"
            >
              Call Studio To Reserve
            </a>
          </div>
        </div>
      )}
    </>
  );
}
