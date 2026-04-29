import Image from "next/image";
import Link from "next/link";

const hours = [
  { days: "Mon – Thu", time: "5:00 AM – 8:00 PM" },
  { days: "Friday", time: "5:00 AM – 6:00 PM" },
  { days: "Sat – Sun", time: "7:30 AM – 12:30 PM" },
];

const classLinks = [
  { label: "Cycle", href: "/reserve?class=Cycle", color: "var(--class-cycle)" },
  { label: "Barre", href: "/reserve?class=Barre", color: "var(--class-barre)" },
  { label: "Fit Body", href: "/reserve?class=Fit+Body", color: "var(--class-fitbody)" },
  { label: "Mat Pilates", href: "/reserve?class=Mat+Pilates", color: "var(--class-matpilates)" },
  { label: "Yoga", href: "/reserve?class=Yoga", color: "var(--class-yoga)" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-divider">
      {/* Top gradient hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-brand opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-black.png"
                alt="Rhythm Cycle & Sculpt"
                width={200}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-8">
              Shawnee&rsquo;s boutique cycle &amp; sculpt studio. Five class
              formats, one welcoming room, your first class always free.
            </p>

            {/* Address + contact */}
            <address className="not-italic space-y-2 text-sm text-text-secondary mb-6">
              <p className="text-foreground">
                7470 Nieman Rd
                <br />
                Shawnee, KS 66203
              </p>
              <p>
                <a
                  href="tel:+19136697396"
                  className="hover:text-foreground transition-colors"
                >
                  (913) 669-7396
                </a>
              </p>
              <p>
                <a
                  href="mailto:shawnee@rhythmcyclesculpt.com"
                  className="hover:text-foreground transition-colors"
                >
                  shawnee@rhythmcyclesculpt.com
                </a>
              </p>
            </address>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/rhythmcyclesculpt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-divider text-text-secondary hover:border-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Classes */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.4em] uppercase text-text-muted font-medium mb-6">
              Classes
            </h4>
            <ul className="space-y-3">
              {classLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-sm text-text-secondary hover:text-foreground transition-colors"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-150"
                      style={{ background: link.color }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] tracking-[0.4em] uppercase text-text-muted font-medium mb-6">
              Hours
            </h4>
            <ul className="space-y-3">
              {hours.map((row) => (
                <li
                  key={row.days}
                  className="flex items-center justify-between text-sm border-b border-divider/60 pb-3 last:border-0"
                >
                  <span className="text-text-secondary">{row.days}</span>
                  <span className="text-foreground font-medium">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-divider flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-[11px] tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} Rhythm Cycle &amp; Sculpt
          </p>
          <p className="text-text-muted text-[11px] tracking-[0.2em] uppercase">
            Site by{" "}
            <a
              href="https://ridleywebworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              Ridley Web Works
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
