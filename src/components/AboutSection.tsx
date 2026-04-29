"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/instructor-tommy.png"
                alt="Tommy Gray, Founder of Rhythm Cycle & Sculpt"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Caption tag */}
            <div className="absolute -bottom-4 left-6 lg:-bottom-5 lg:left-8 bg-background border border-divider rounded-full px-5 py-2.5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gradient-brand" />
              <span className="text-foreground text-xs tracking-[0.3em] uppercase font-medium">
                Tommy &middot; Founder
              </span>
            </div>

            {/* Decorative gradient frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border border-foreground/10 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-brand opacity-10 blur-3xl -z-10" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-5">
              The Story
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-[0.95] mb-8">
              Built by Tommy.
              <br />
              <span className="text-gradient-brand-animated">Built for Shawnee.</span>
            </h2>

            <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed max-w-xl">
              <p>
                Tommy Gray grew up here. He left to teach history, then traded
                lesson plans for an international flight attendant uniform —
                Dubai based, 80+ countries, six years in the air.
              </p>
              <p>
                Along the way he taught cycle and sculpt classes everywhere he
                landed — Dubai, Miami, KC. Then he brought it home. Rhythm Cycle
                &amp; Sculpt is the studio Shawnee always deserved: five class
                formats, instructors who learn your name, and a room that feels
                like the warmest hour in your week.
              </p>
              <p className="text-foreground">
                Whether it&rsquo;s your first class or your fiftieth, we&rsquo;re
                here to help you find your rhythm.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-px bg-divider rounded-2xl overflow-hidden border border-divider max-w-xl">
              <div className="bg-background-secondary px-5 py-6 text-center">
                <p className="font-display text-4xl lg:text-5xl text-gradient-brand">5</p>
                <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase mt-2">
                  Class Formats
                </p>
              </div>
              <div className="bg-background-secondary px-5 py-6 text-center">
                <p className="font-display text-4xl lg:text-5xl text-gradient-brand">1st</p>
                <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase mt-2">
                  Class Free
                </p>
              </div>
              <div className="bg-background-secondary px-5 py-6 text-center">
                <p className="font-display text-4xl lg:text-5xl text-gradient-brand">7</p>
                <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase mt-2">
                  Days a Week
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
