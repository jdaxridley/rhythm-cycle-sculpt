"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
                Contact
              </p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-wide uppercase mb-6">
                Claim Your
                <br />
                <span className="text-accent">Free Class</span>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                Fill out the form below and we&rsquo;ll get you scheduled for your
                first free class. You can also call or message us directly.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form */}
              <ScrollReveal direction="left">
                {submitted ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 border-2 border-accent flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <h3 className="font-display text-3xl tracking-wide uppercase mb-3">
                        You&rsquo;re In
                      </h3>
                      <p className="text-text-secondary text-sm">
                        We&rsquo;ll reach out soon to get you scheduled.
                        See you at the studio.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-text-muted mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-background-secondary border border-divider px-4 py-4 text-foreground text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-text-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-background-secondary border border-divider px-4 py-4 text-foreground text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs tracking-[0.2em] uppercase text-text-muted mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-background-secondary border border-divider px-4 py-4 text-foreground text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                        placeholder="(913) 555-1234"
                      />
                    </div>

                    <div>
                      <label htmlFor="class" className="block text-xs tracking-[0.2em] uppercase text-text-muted mb-2">
                        Which Class Interests You?
                      </label>
                      <select
                        id="class"
                        name="class"
                        className="w-full bg-background-secondary border border-divider px-4 py-4 text-foreground text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                      >
                        <option value="">Select a class</option>
                        <option value="cycle">Cycle</option>
                        <option value="barre">Barre</option>
                        <option value="fit-body">Fit Body</option>
                        <option value="mat-pilates">Mat Pilates</option>
                        <option value="yoga">Yoga</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-text-muted mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full bg-background-secondary border border-divider px-4 py-4 text-foreground text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Anything you'd like us to know..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-accent text-background text-sm tracking-[0.2em] uppercase font-semibold hover:bg-accent-hover transition-all duration-300"
                    >
                      Claim Your Free Class
                    </button>
                  </form>
                )}
              </ScrollReveal>

              {/* Info */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-12">
                  {/* Contact details */}
                  <div>
                    <h3 className="font-display text-2xl tracking-wide uppercase mb-6">
                      Get in Touch
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-foreground text-sm">Shawnee, KS</p>
                          <p className="text-text-secondary text-xs mt-1">
                            {/* TODO: Full address from Tommy */}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                        <div>
                          <a href="tel:+19135551234" className="text-foreground text-sm hover:text-accent transition-colors">
                            {/* TODO: Real phone number from Tommy */}
                            Call Us
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-text-secondary text-xs mt-1">
                            {/* TODO: Real email from Tommy */}
                            info@rhythmcyclesculpt.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="font-display text-2xl tracking-wide uppercase mb-6">
                      Follow Us
                    </h3>
                    <a
                      href="https://instagram.com/rhythmcyclingstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      @rhythmcyclingstudio
                    </a>
                  </div>

                  {/* Map placeholder */}
                  <div className="bg-background-secondary border border-divider aspect-video flex items-center justify-center">
                    <p className="text-text-muted text-sm">
                      {/* TODO: Embed Google Map */}
                      Shawnee, KS
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
