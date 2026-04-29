"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Tile = { src: string; alt: string; position?: string };

const rowOne: Tile[] = [
  { src: "/hero-class.jpg", alt: "Cycle room with class in session", position: "center 30%" },
  { src: "/studio-yoga.png", alt: "Movement studio with mats and barre", position: "center 60%" },
  { src: "/cycle.jpg", alt: "Cycling shoe cubbies", position: "center 35%" },
  { src: "/studio-cycle.jpg", alt: "Studio shower and vanity", position: "center 55%" },
  { src: "/barre.jpg", alt: "Equipment shelf", position: "center 40%" },
];

const rowTwo: Tile[] = [
  { src: "/studio-bathroom.jpg", alt: "Barre instructor lunging at the barre", position: "center 15%" },
  { src: "/fit-body-class.jpg", alt: "Fit body class with weights", position: "center 25%" },
  { src: "/energy-towels.jpg", alt: "Cycle class waving towels", position: "center 55%" },
  { src: "/cycle-action.jpg", alt: "Cycle instructor on the bike", position: "center 18%" },
  { src: "/mat-pilates.jpg", alt: "Mat pilates class with stability balls", position: "center 55%" },
];

function MarqueeRow({
  tiles,
  reverse = false,
  duration = "55s",
  rowLabel,
}: {
  tiles: Tile[];
  reverse?: boolean;
  duration?: string;
  rowLabel: string;
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
        {loop.map((tile, i) => {
          const tileNumber = (i % tiles.length) + 1;
          return (
            <div
              key={`${tile.src}-${i}`}
              className="relative flex-shrink-0 w-[78vw] sm:w-[55vw] md:w-[38vw] lg:w-[28vw] xl:w-[24vw] aspect-[4/3] overflow-hidden rounded-2xl bg-background"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                className="object-cover"
                style={{ objectPosition: tile.position ?? "center" }}
                sizes="(max-width: 768px) 78vw, (max-width: 1024px) 38vw, 28vw"
              />
              {/* TEMP: numbering badge — remove once positions dialed in */}
              <div className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-full bg-black/80 text-white text-sm font-bold tracking-wider">
                {rowLabel}{tileNumber}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function StudioGallery() {
  return (
    <section className="relative py-20 sm:py-24 bg-background-secondary overflow-hidden">
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
        <MarqueeRow tiles={rowOne} duration="60s" rowLabel="A" />
        <MarqueeRow tiles={rowTwo} duration="75s" reverse rowLabel="B" />
      </motion.div>
    </section>
  );
}
