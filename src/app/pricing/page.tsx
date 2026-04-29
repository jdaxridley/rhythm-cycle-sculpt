"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Drop-In",
    price: "$25",
    period: "per class",
    description: "Perfect for trying us out or occasional visits",
    features: [
      "Single class access",
      "All class types included",
      "Full amenity access",
      "No commitment",
    ],
    cta: "Book a Class",
    href: "/reserve",
    highlighted: false,
  },
  {
    name: "Class Pack",
    price: "$100",
    period: "10 classes",
    description: "Our most popular option for regular members",
    features: [
      "10 classes (save $150)",
      "All class types included",
      "Full amenity access",
      "Classes never expire",
      "Share with a friend",
    ],
    cta: "Get Class Pack",
    highlighted: true,
  },
  {
    name: "Unlimited",
    price: "$149",
    period: "per month",
    description: "For those who live at the studio",
    features: [
      "Unlimited classes",
      "All class types included",
      "Full amenity access",
      "Priority booking",
      "Guest passes (2/month)",
    ],
    cta: "Go Unlimited",
    highlighted: false,
  },
];

export default function PricingPage() {
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
                Pricing
              </p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-wide uppercase mb-6">
                Simple
                <br />
                <span className="text-accent">Pricing</span>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                No contracts. No hidden fees. Just great classes at honest
                prices. Your first class is always free.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {plans.map((plan, i) => (
                <ScrollReveal key={plan.name} delay={i * 0.1}>
                  <div
                    className={`relative p-8 lg:p-10 border transition-all duration-300 ${
                      plan.highlighted
                        ? "border-accent bg-background-secondary"
                        : "border-divider bg-background hover:border-text-muted"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-px left-0 right-0 h-1 bg-accent" />
                    )}

                    <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-medium mb-2">
                      {plan.name}
                    </p>
                    <div className="mb-2">
                      <span className="font-display text-5xl lg:text-6xl">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-6">
                      {plan.period}
                    </p>
                    <p className="text-text-secondary text-sm mb-8">
                      {plan.description}
                    </p>

                    <ul className="space-y-3 mb-10">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-text-secondary"
                        >
                          <span className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-1.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={plan.href ?? "/contact"}
                      className={`block text-center py-4 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-accent text-background hover:bg-accent-hover"
                          : "border border-divider text-foreground hover:border-accent hover:text-accent"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Note */}
            <ScrollReveal delay={0.4}>
              <p className="text-center text-text-muted text-sm mt-12">
                All plans include access to premium amenities: fresh linens,
                eucalyptus towels, protein shakes, private showers, Dyson hair
                care, and our specialty coffee bar.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-background-secondary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display text-5xl tracking-wide uppercase mb-12 text-center">
                Common <span className="text-accent">Questions</span>
              </h2>
            </ScrollReveal>

            {[
              {
                q: "Is my first class really free?",
                a: "Yes. Your first class is completely free, no strings attached. Come try any class type and see if we're the right fit.",
              },
              {
                q: "Do I need to book in advance?",
                a: "We recommend booking ahead to guarantee your spot, but walk-ins are welcome if space is available.",
              },
              {
                q: "What should I bring to my first class?",
                a: "Just bring yourself and a water bottle. We provide towels, and our showers are stocked with everything you need.",
              },
              {
                q: "Are classes suitable for beginners?",
                a: "Absolutely. All of our classes welcome every fitness level. Our instructors offer modifications throughout every session.",
              },
              {
                q: "Is there a contract or commitment?",
                a: "No contracts. Our class packs never expire, and our unlimited membership is month-to-month. Cancel anytime.",
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border-b border-divider py-8">
                  <h3 className="font-display text-xl tracking-wide uppercase mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
