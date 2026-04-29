"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tiles = [
  { src: "/hero-class.jpg", label: "Cycle Room", span: "md:col-span-6 md:row-span-2 aspect-[4/5] md:aspect-auto" },
  { src: "/studio-yoga.png", label: "Movement Studio", span: "md:col-span-3 aspect-square" },
  { src: "/cycle.jpg", label: "Cubbies", span: "md:col-span-3 aspect-square" },
  { src: "/barre.jpg", label: "Equipment", span: "md:col-span-3 aspect-square" },
  { src: "/studio-cycle.jpg", label: "Showers", span: "md:col-span-3 aspect-square" },
];

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
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[14rem] md:auto-rows-[16rem]">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl bg-background ${tile.span}`}
            >
              <Image
                src={tile.src}
                alt={tile.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <p className="text-foreground text-xs tracking-[0.3em] uppercase font-medium">
                  {tile.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
