"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClassesSection from "@/components/ClassesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClassesSection />
        <AmenitiesSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
