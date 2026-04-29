"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const classes = [
  {
    name: "Barre",
    image: "/yoga.jpg",
    color: "var(--class-barre)",
    duration: "50 min",
    intensity: "Low impact",
    description:
      "Ballet-inspired sculpting. Small, precise movements at the barre lengthen and tone every line.",
  },
  {
    name: "Cycle",
    image: "/cycle-action.jpg",
    color: "var(--class-cycle)",
    duration: "45 min",
    intensity: "High energy",
    description:
      "Lights down. Music up. 45 minutes of climbs, sprints, and rhythm on premium bikes.",
  },
  {
    name: "Fit Body",
    image: "/fit-body.jpg",
    color: "var(--class-fitbody)",
    duration: "50 min",
    intensity: "Full body",
    description:
      "Strength + cardio bursts targeting lower body, core, and upper body with weights and bands.",
  },
  {
    name: "Mat Pilates",
    image: "/mat-pilates.jpg",
    color: "var(--class-matpilates)",
    duration: "50 min",
    intensity: "Core focus",
    description:
      "Controlled, breath-led work that builds deep core strength, flexibility, and posture.",
  },
  {
    name: "Yoga",
    image: "/studio-weights.jpg",
    color: "var(--class-yoga)",
    duration: "60 min",
    intensity: "Mind & body",
    description:
      "Postures, breath, and stillness — flexibility and clarity in equal measure.",
  },
];

export default function ClassesSection() {
  return (
    <section id="classes" className="relative py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-5">
            The Classes
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-[0.95] mb-6">
            Five ways to <span className="text-gradient-brand">move</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Every class is taught by certified instructors who know your name
            and meet you where you are.
          </p>
        </motion.div>

        {/* Stacked rows — letsryde-inspired horizontal cards */}
        <div className="space-y-5">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="#contact"
                className="group relative block overflow-hidden rounded-3xl bg-background-secondary"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[280px]">
                  {/* Image */}
                  <div className="relative md:col-span-5 lg:col-span-4 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <Image
                      src={cls.image}
                      alt={`${cls.name} class at Rhythm Cycle & Sculpt`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div
                      className="absolute inset-0 mix-blend-multiply opacity-30 transition-opacity duration-500 group-hover:opacity-15"
                      style={{ background: cls.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative md:col-span-7 lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Number + meta */}
                    <div className="flex items-center gap-4 mb-5 text-text-muted text-xs tracking-[0.4em] uppercase">
                      <span>0{i + 1}</span>
                      <span className="w-8 h-px bg-divider" />
                      <span>{cls.duration}</span>
                      <span className="w-1 h-1 rounded-full bg-divider" />
                      <span>{cls.intensity}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-none mb-4 transition-colors duration-300"
                      style={{ color: cls.color }}
                    >
                      {cls.name}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
                      {cls.description}
                    </p>

                    {/* CTA arrow */}
                    <div className="flex items-center gap-3 text-foreground text-xs tracking-[0.3em] uppercase font-medium">
                      <span
                        className="transition-colors duration-300"
                        style={{ color: cls.color }}
                      >
                        Try It Free
                      </span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                        style={{ color: cls.color }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>

                    {/* Hover accent bar */}
                    <span
                      className="absolute left-8 lg:left-12 bottom-0 h-px w-0 group-hover:w-24 transition-[width] duration-500"
                      style={{ background: cls.color }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
