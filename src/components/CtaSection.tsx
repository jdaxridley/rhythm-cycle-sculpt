"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 overflow-hidden bg-background-secondary"
    >
      {/* Background photo */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/barre-class.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-secondary via-background-secondary/40 to-background-secondary" />
      </div>

      {/* Top + bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-8"
        >
          <span className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-divider" />
            Your move
            <span className="w-8 h-px bg-divider" />
          </span>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-wide uppercase leading-[0.9] mb-6"
        >
          Your first class
          <br />
          is <span className="text-gradient-brand-animated">free.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-secondary text-base lg:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
        >
          No commitment. No pressure. Show up, find your rhythm, see if
          it&rsquo;s for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://www.rhythmcyclesculpt.com/classes"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-brand text-background text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold transition-transform duration-300 hover:scale-[1.03]"
          >
            Claim Your Free Class
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="tel:+19136697396"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-foreground/20 text-foreground text-xs sm:text-sm tracking-[0.25em] uppercase font-medium hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (913) 669-7396
          </a>
        </motion.div>
      </div>
    </section>
  );
}
