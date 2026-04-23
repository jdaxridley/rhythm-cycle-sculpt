"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const classes = [
  {
    name: "Cycle",
    image: "/cycle.jpg",
    description:
      "High-energy, music-driven workouts combining endurance, strength, and exhilarating sprints. Motivating instructors guide every pedal stroke.",
  },
  {
    name: "Barre",
    image: "/barre.jpg",
    description:
      "A dynamic, low-impact workout blending ballet, Pilates, and yoga. Small, precise movements sculpt and tone with the support of a stationary barre.",
  },
  {
    name: "Fit Body",
    image: "/fit-body.jpg",
    description:
      "Full-body workout targeting lower body, core, and upper body using body weight and small equipment with short cardio bursts.",
  },
  {
    name: "Mat Pilates",
    image: "/mat-pilates.jpg",
    description:
      "Core-focused, low-impact work emphasizing precise movements and controlled breathing to improve strength, flexibility, and posture.",
  },
  {
    name: "Yoga",
    image: "/yoga.jpg",
    description:
      "A mind-body practice combining physical postures, breath control, and meditation to enhance flexibility, strength, and mental clarity.",
  },
];

export default function ClassesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16 lg:mb-20">
            <div>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Our Classes
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide uppercase">
                Five Ways to
                <br />
                <span className="text-accent">Move</span>
              </h2>
            </div>
            <Link
              href="/classes"
              className="hidden md:inline-flex items-center gap-2 text-sm tracking-widest uppercase text-text-secondary hover:text-accent transition-colors font-medium"
            >
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* Class grid — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* First two cards — larger */}
          {classes.slice(0, 2).map((cls, i) => (
            <ScrollReveal key={cls.name} delay={i * 0.1}>
              <Link href="/classes" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-background-secondary">
                  <Image
                    src={cls.image}
                    alt={`${cls.name} class at Rhythm Cycle & Sculpt`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="font-display text-3xl lg:text-4xl tracking-wide uppercase mb-2">
                      {cls.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                      {cls.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-accent text-xs tracking-[0.2em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}

          {/* Remaining three cards */}
          {classes.slice(2).map((cls, i) => (
            <ScrollReveal key={cls.name} delay={(i + 2) * 0.1}>
              <Link href="/classes" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-background-secondary">
                  <Image
                    src={cls.image}
                    alt={`${cls.name} class at Rhythm Cycle & Sculpt`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="font-display text-3xl lg:text-4xl tracking-wide uppercase mb-2">
                      {cls.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                      {cls.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-accent text-xs tracking-[0.2em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile "View All" link */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-text-secondary hover:text-accent transition-colors font-medium"
          >
            View All Classes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
