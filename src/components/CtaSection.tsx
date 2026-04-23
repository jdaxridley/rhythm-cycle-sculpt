"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-background-secondary relative overflow-hidden">
      {/* Accent line decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Ready?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wide uppercase mb-6">
            Your First Class
            <br />
            Is <span className="text-accent">Free</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            No commitment. No pressure. Just show up, find your rhythm, and
            see if it&rsquo;s for you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-background text-sm tracking-[0.2em] uppercase font-semibold hover:bg-accent-hover transition-all duration-300 hover:gap-4"
            >
              Claim Your Free Class
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+19135551234"
              className="inline-flex items-center gap-2 px-10 py-5 border border-divider text-foreground text-sm tracking-[0.2em] uppercase font-medium hover:border-accent hover:text-accent transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
