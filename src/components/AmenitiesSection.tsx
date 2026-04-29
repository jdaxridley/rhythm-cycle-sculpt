"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const amenities = [
  { title: "Built-In Lockers", description: "Numbered lockers with combination locks already built in. Nothing to carry, nothing to lose." },
  { title: "Cycling Shoes", description: "Free clip-in shoes at the front desk for every ride. Just tell us your size." },
  { title: "Sweat Towels", description: "Fresh towels at the bike, on the floor, and at the door on your way out." },
  { title: "Stocked Bathrooms", description: "Toiletries and beauty accessories so you can walk in straight from work and out the door ready for anything." },
  { title: "Hot Showers", description: "Private showers stocked with towels and full-size toiletries. Take your time." },
  { title: "Coffee Lounge", description: "Coffee, tea, and snacks before class or after. Linger as long as you like." },
];

export default function Amenities() {
  return (
    <section className="relative py-20 sm:py-24 bg-background overflow-hidden">
      {/* Background photo strip on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block opacity-40">
        <Image
          src="/energy-towels.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-5">
              The Details
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-[0.95] mb-8">
              More than a <span className="text-gradient-brand-animated">workout.</span>
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-md">
              Every detail is here for the same reason — so the best 50 minutes
              of your day feel exactly like that.
            </p>
          </motion.div>

          {/* Amenity grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-divider rounded-2xl overflow-hidden border border-divider">
            {amenities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative bg-background-secondary p-7 lg:p-9 hover:bg-background-tertiary transition-colors duration-500"
              >
                {/* Top number */}
                <p className="text-text-muted text-[10px] tracking-[0.4em] uppercase mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl tracking-wide uppercase mb-2 text-foreground">
                  {a.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {a.description}
                </p>
                {/* Hover gradient bar */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-brand group-hover:w-full transition-[width] duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
