"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-class.jpg"
          alt="Cycle class at Rhythm Cycle & Sculpt"
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="100vw"
        />
        {/* Vignette overlays — heavier than before for centered hero readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,10,0.85)_100%)]" />
      </div>

      {/* Vertical hairline accents — letsryde-style */}
      <div className="hairline-v absolute left-8 top-12 bottom-12 hidden md:block" />
      <div className="hairline-v absolute right-8 top-12 bottom-12 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-[11px] sm:text-xs tracking-[0.5em] uppercase mb-8 font-medium"
        >
          <span className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-divider" />
            Shawnee, KS &middot; Since 2023
            <span className="w-8 h-px bg-divider" />
          </span>
        </motion.p>

        {/* Massive Wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.85] tracking-[0.02em] uppercase mb-2"
        >
          <span className="block text-[22vw] md:text-[18vw] lg:text-[15vw] xl:text-[13rem] text-gradient-brand-animated">
            Rhythm
          </span>
        </motion.h1>

        {/* Script tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-script text-3xl sm:text-4xl lg:text-5xl text-foreground/90 mb-10 -mt-2"
        >
          cycle <span className="text-text-muted">&bull;</span> sculpt
        </motion.p>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Find your rhythm at Kansas City&rsquo;s most welcoming
          boutique cycle &amp; sculpt studio.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-brand text-background text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">First Class Free</span>
            <svg
              className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#classes"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-foreground/20 text-foreground text-xs sm:text-sm tracking-[0.25em] uppercase font-medium hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-300"
          >
            View Classes
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-text-muted text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-12 bg-gradient-to-b from-foreground/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
