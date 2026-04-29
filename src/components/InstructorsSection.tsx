"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Instructor = {
  name: string;
  role: string;
  classes: string;
  bio: string;
  image?: string;
  initials: string;
  color: string;
};

const team: Instructor[] = [
  {
    name: "Tommy Gray",
    role: "Founder & Owner",
    classes: "Cycle · Barre · Mat Pilates · Fit Body",
    bio: "Kansas City native, history teacher turned international flight attendant — Tommy taught classes from Dubai to Miami before bringing the studio home. Expect his rides to feel like a nightclub.",
    image: "/instructor-tommy.png",
    initials: "TG",
    color: "var(--brand-blue)",
  },
  {
    name: "Daniel Lindsay",
    role: "Assistant Studio Manager",
    classes: "Membership · Front Desk",
    bio: "Daniel knows the first-class jitters firsthand. He's the one cheering you through every milestone — big, small, and in between.",
    image: "/instructor-daniel.png",
    initials: "DL",
    color: "var(--class-cycle)",
  },
  {
    name: "Bekah Berardi",
    role: "Cycle Instructor",
    classes: "Cycle",
    bio: "Cycling since 2015, teaching since 2021. Bekah's classes blend inspiration, challenge, and community — pursuing a law degree on the side.",
    image: "/instructor-bekah.png",
    initials: "BB",
    color: "var(--class-fitbody)",
  },
  {
    name: "Carly Martin",
    role: "Cycle & Fit Body",
    classes: "Cycle · Fit Body",
    bio: "High-energy rides, hip-hop beat drops, and hard-earned smiles. Carly teaches by day, dental-assists when she's not.",
    image: "/instructor-carly.png",
    initials: "CM",
    color: "var(--class-matpilates)",
  },
  {
    name: "Josie Williams",
    role: "Fit Body & Cycle",
    classes: "Fit Body · Cycle",
    bio: "Five years certified, full-time travel nurse recruiter. Pop music, high motivation, and a welcome wagon for first-timers.",
    image: "/instructor-josie.png",
    initials: "JW",
    color: "var(--class-yoga)",
  },
  {
    name: "Mya Fillingham",
    role: "Lead Sculpt Instructor",
    classes: "Yoga · Mat Pilates · Fit Body",
    bio: "RYT 500 with years of yoga experience. Mya's classes blend strength, flexibility, and breath — soundtracked by jazz, R&B, and lofi.",
    initials: "MF",
    color: "var(--brand-cyan)",
  },
  {
    name: "Maggie Bourk",
    role: "Cycle Instructor",
    classes: "Cycle",
    bio: "Two years on the bike and counting. Maggie promises both a party and a spiritual experience — eclectic music, every ride.",
    image: "/instructor-maggie.png",
    initials: "MB",
    color: "var(--brand-purple)",
  },
  {
    name: "Lauryn Klemm",
    role: "Concierge",
    classes: "Front Desk",
    bio: "An Overland Park native who works with elementary kids by day and welcomes you at the studio by night. Country & rock playlists guaranteed.",
    initials: "LK",
    color: "var(--class-barre)",
  },
];

export default function InstructorsSection() {
  return (
    <section id="instructors" className="relative py-20 sm:py-24 bg-background-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-5">
            The Team
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-[0.95] mb-6">
            Meet your <span className="text-gradient-brand-animated">instructors.</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Eight people who&rsquo;ll know your name by the second class.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Photo / placeholder */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-background mb-4">
                {person.image ? (
                  <>
                    <Image
                      src={person.image}
                      alt={`${person.name}, ${person.role} at Rhythm Cycle & Sculpt`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  </>
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `radial-gradient(ellipse at center, ${person.color}33 0%, var(--background) 70%)`,
                    }}
                  >
                    <span
                      className="font-display text-7xl uppercase tracking-wide"
                      style={{ color: person.color }}
                    >
                      {person.initials}
                    </span>
                  </div>
                )}

                {/* Hover gradient bar */}
                <span
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-[width] duration-500"
                  style={{ background: person.color }}
                />
              </div>

              {/* Name + role */}
              <div className="px-1">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-2 font-medium"
                  style={{ color: person.color }}
                >
                  {person.role}
                </p>
                <h3 className="font-display text-2xl tracking-wide uppercase mb-2 leading-none">
                  {person.name}
                </h3>
                <p className="text-text-muted text-[11px] tracking-[0.2em] uppercase mb-3">
                  {person.classes}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
