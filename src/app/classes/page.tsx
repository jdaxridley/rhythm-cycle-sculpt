"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const classes = [
  {
    name: "Cycle",
    image: "/cycle.jpg",
    description:
      "In this invigorating cycling class, pedal your way to a healthier you as motivating instructors guide you through a high-energy, music-driven workout that combines endurance, strength, and exhilarating sprints.",
    details: [
      "45-minute high-energy ride",
      "Music-driven motivation",
      "All fitness levels welcome",
      "Calorie-torching cardio",
    ],
  },
  {
    name: "Barre",
    image: "/barre.jpg",
    description:
      "A dynamic, low-impact workout that blends elements of ballet, Pilates, and yoga, utilizing the support of a stationary barre to sculpt and tone muscles through small, precise movements, enhancing strength, flexibility, and overall body awareness.",
    details: [
      "Full-body toning",
      "Low-impact, joint-friendly",
      "Improves posture and balance",
      "Ballet-inspired precision",
    ],
  },
  {
    name: "Fit Body",
    image: "/fit-body.jpg",
    description:
      "A full body workout targeting your lower body, core, and upper body using your body weight and small equipment with short cardio bursts.",
    details: [
      "Total body conditioning",
      "Bodyweight + small equipment",
      "Cardio burst intervals",
      "Strength and endurance",
    ],
  },
  {
    name: "Mat Pilates",
    image: "/mat-pilates.jpg",
    description:
      "A core-focused, low-impact workout that emphasizes precise movements and controlled breathing to improve strength and flexibility.",
    details: [
      "Core-strengthening focus",
      "Controlled, precise movements",
      "Breath-centered practice",
      "Improved flexibility",
    ],
  },
  {
    name: "Yoga",
    image: "/yoga.jpg",
    description:
      "A mind-body practice that combines physical postures, breath control, and meditation to enhance flexibility, strength, and mental clarity.",
    details: [
      "Mind-body connection",
      "Flexibility and strength",
      "Stress relief and calm",
      "Breath work and meditation",
    ],
  },
];

export default function ClassesPage() {
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
                Our Classes
              </p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-wide uppercase mb-6">
                Five Ways to
                <br />
                <span className="text-accent">Move</span>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                From high-energy cycling to restorative yoga, every class is
                designed to challenge your body and calm your mind. All levels
                welcome.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Class listings */}
        {classes.map((cls, i) => (
          <section
            key={cls.name}
            className={`py-20 lg:py-28 ${
              i % 2 === 0 ? "bg-background" : "bg-background-secondary"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative aspect-[4/5] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={cls.image}
                      alt={`${cls.name} class at Rhythm Cycle & Sculpt`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} delay={0.2}>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                      Class {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-display text-5xl sm:text-6xl tracking-wide uppercase mb-6">
                      {cls.name}
                    </h2>
                    <p className="text-text-secondary text-base leading-relaxed mb-8">
                      {cls.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {cls.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-3 text-sm text-text-secondary"
                        >
                          <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/reserve"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background text-sm tracking-[0.2em] uppercase font-semibold hover:bg-accent-hover transition-all duration-300 hover:gap-4"
                    >
                      Book This Class
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-background-secondary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-display text-5xl sm:text-6xl tracking-wide uppercase mb-6">
                Your First Class Is <span className="text-accent">Free</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                Try any class on us. No commitment, no pressure.
              </p>
              <Link
                href="/reserve"
                className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-background text-sm tracking-[0.2em] uppercase font-semibold hover:bg-accent-hover transition-all duration-300 hover:gap-4"
              >
                Claim Your Free Class
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
