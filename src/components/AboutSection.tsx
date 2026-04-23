"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/hero-bg.jpg"
                alt="The Rhythm Cycle & Sculpt studio experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              {/* Accent border detail */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 -z-10" />
            </div>
          </ScrollReveal>

          {/* Text content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Our Studio
              </p>
              <h2 className="font-display text-5xl sm:text-6xl tracking-wide uppercase mb-6">
                Every Body
                <br />
                <span className="text-accent">Deserves</span> Rhythm
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Rhythm Cycle & Sculpt is Shawnee&rsquo;s premier boutique fitness
                  studio. We believe that movement should feel good, look good, and
                  leave you better than when you walked in.
                </p>
                <p>
                  Our five class formats&mdash;Cycle, Barre, Fit Body, Mat Pilates,
                  and Yoga&mdash;are designed to challenge your body and calm your mind.
                  Every class is led by motivating instructors who meet you where you are.
                </p>
                <p>
                  From the moment you walk through our doors, the details matter. Cold
                  eucalyptus towels, complimentary protein shakes, private showers with
                  Dyson hair care, and a specialty coffee bar&mdash;because you deserve
                  more than just a workout.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <p className="font-display text-4xl text-accent">5</p>
                  <p className="text-text-muted text-xs tracking-widest uppercase mt-1">
                    Class Types
                  </p>
                </div>
                <div className="w-px h-12 bg-divider" />
                <div className="text-center">
                  <p className="font-display text-4xl text-accent">1st</p>
                  <p className="text-text-muted text-xs tracking-widest uppercase mt-1">
                    Class Free
                  </p>
                </div>
                <div className="w-px h-12 bg-divider" />
                <div className="text-center">
                  <p className="font-display text-4xl text-accent">6</p>
                  <p className="text-text-muted text-xs tracking-widest uppercase mt-1">
                    Premium Amenities
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
