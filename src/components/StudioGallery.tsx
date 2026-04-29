"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Tile = { src: string; label: string };

const rowOne: Tile[] = [
  { src: "/hero-class.jpg", label: "Cycle Room" },
  { src: "/studio-yoga.png", label: "Movement Studio" },
  { src: "/studio-cubbies.jpg", label: "Cubbies" },
  { src: "/studio-cycle.jpg", label: "Premium Bikes" },
  { src: "/studio-weights.jpg", label: "Strength Floor" },
];

const rowTwo: Tile[] = [
  { src: "/barre.jpg", label: "Barre Setup" },
  { src: "/studio-bathroom.jpg", label: "Showers" },
  { src: "/energy-towels.jpg", label: "Towels Provided" },
  { src: "/cycle.jpg", label: "Bike Floor" },
  { src: "/mat-pilates.jpg", label: "Pilates Mats" },
];

function MarqueeRow({
  tiles,
  reverse = false,
  duration = "55s",
}: {
  tiles: Tile[];
  reverse?: boolean;
  duration?: string;
}) {
  // Duplicate the list so the -50% loop is seamless
  const loop = [...tiles, ...tiles];
  return (
    <div
      className="marquee-track marquee-mask overflow-hidden"
      style={{ ["--marquee-duration" as string]: duration }}
    >
      <div
        className={`flex gap-4 lg:gap-5 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((tile, i) => (
          <div
            key={`${tile.src}-${i}`}
            className="group relative flex-shrink-0 w-[78vw] sm:w-[55vw] md:w-[38vw] lg:w-[28vw] xl:w-[24vw] aspect-[4/3] overflow-hidden rounded-2xl bg-background"
          >
            <Image
              src={tile.src}
              alt={tile.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 78vw, (max-width: 1024px) 38vw, 28vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 flex items-center gap-3">
              <span className="w-6 h-px bg-foreground/60" />
              <p className="text-foreground text-[11px] lg:text-xs tracking-[0.3em] uppercase font-medium">
                {tile.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StudioGallery() {
  return (
    <section className="relative py-28 sm:py-36 bg-background-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-5">
            The Studio
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-[0.95]">
            Step <span className="text-gradient-brand">inside.</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-6">
            A space designed to feel like the warmest hour in your week.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows — bleed full width past the container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9 }}
        className="space-y-4 lg:space-y-5"
      >
        <MarqueeRow tiles={rowOne} duration="60s" />
        <MarqueeRow tiles={rowTwo} duration="75s" reverse />
      </motion.div>
    </section>
  );
}
