"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    label: "Cycle",
    title: "Move to the beat.",
    body: "45 minutes of rhythm, climbs, and sprints on premium bikes. Lights down, music up — every ride is a release.",
    color: "var(--brand-blue)",
  },
  {
    label: "Sculpt",
    title: "Build long, lean strength.",
    body: "Barre, Fit Body, and Mat Pilates designed to lengthen, tone, and steady you — in equal measure.",
    color: "var(--brand-cyan)",
  },
  {
    label: "Community",
    title: "Find your people.",
    body: "We know your name, your goals, your favorite bike. Shawnee&rsquo;s warmest studio is built around that.",
    color: "var(--brand-purple)",
  },
];

export default function Pillars() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-5">
            Three pillars
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-[0.95]">
            One studio.
            <br />
            <span className="text-gradient-brand">Every body.</span>
          </h2>
        </motion.div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-background p-10 lg:p-14 hover:bg-background-secondary transition-colors duration-500"
            >
              {/* Top accent line that fills on hover */}
              <span
                className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-[width] duration-700"
                style={{ background: p.color }}
              />

              {/* Number */}
              <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-8">
                0{i + 1}
              </p>

              {/* Massive label */}
              <h3
                className="font-display text-6xl lg:text-7xl uppercase tracking-wide mb-6 leading-none transition-colors duration-500"
                style={{ color: p.color }}
              >
                {p.label}
              </h3>

              {/* Body */}
              <p className="text-foreground text-xl lg:text-2xl font-medium leading-snug mb-4">
                {p.title}
              </p>
              <p
                className="text-text-secondary text-sm leading-relaxed max-w-xs"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
