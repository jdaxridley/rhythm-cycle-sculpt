"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
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

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                About Us
              </p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-wide uppercase mb-6">
                Our <span className="text-accent">Story</span>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                Rhythm Cycle & Sculpt was built on a simple belief: every body
                deserves the right to move, to feel strong, and to belong.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Story section */}
        <section className="py-20 lg:py-28 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <ScrollReveal direction="left">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/hero-cycling.jpg"
                    alt="Inside Rhythm Cycle & Sculpt studio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>
                    We started Rhythm because we believed fitness should feel
                    good&mdash;not like punishment. Our studio was designed from the
                    ground up to be a place where you can push yourself, decompress,
                    and leave feeling better than when you walked in.
                  </p>
                  <p>
                    Our five class formats are carefully designed to complement each
                    other. The high-energy burn of Cycle. The precision sculpt of
                    Barre. The full-body challenge of Fit Body. The controlled
                    strength of Mat Pilates. The mindful flow of Yoga.
                  </p>
                  <p>
                    Every detail of our studio was chosen with you in mind. From the
                    eucalyptus-infused towels waiting for you after class, to the
                    Dyson hair dryers in our private showers, to the specialty coffee
                    bar where you can refuel&mdash;we believe the experience extends
                    far beyond the workout itself.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-5xl sm:text-6xl tracking-wide uppercase">
                  What We <span className="text-accent">Believe</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Community",
                  text: "We're more than a studio. We're a community of people who show up for themselves and each other.",
                },
                {
                  title: "Inclusivity",
                  text: "Every body, every fitness level, every background. You belong here. Period.",
                },
                {
                  title: "Excellence",
                  text: "From our instructors to our amenities, we sweat the details because you deserve nothing less.",
                },
              ].map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-12 h-px bg-accent mx-auto mb-6" />
                    <h3 className="font-display text-2xl tracking-wide uppercase mb-4">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-background-secondary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-display text-5xl sm:text-6xl tracking-wide uppercase mb-6">
                Come Find Your <span className="text-accent">Rhythm</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                Your first class is on us. No commitment required.
              </p>
              <Link
                href="/reserve"
                className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-background text-sm tracking-[0.2em] uppercase font-semibold hover:bg-accent-hover transition-all duration-300 hover:gap-4"
              >
                Take Your First Class Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
