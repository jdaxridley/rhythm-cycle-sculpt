"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import ClassesSection from "@/components/ClassesSection";
import AboutSection from "@/components/AboutSection";
import StudioGallery from "@/components/StudioGallery";
import AmenitiesSection from "@/components/AmenitiesSection";
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
        <Pillars />
        <ClassesSection />
        <AboutSection />
        <StudioGallery />
        <AmenitiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
