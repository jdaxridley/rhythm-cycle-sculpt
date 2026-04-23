import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  classes: [
    { label: "Cycle", href: "/classes" },
    { label: "Barre", href: "/classes" },
    { label: "Fit Body", href: "/classes" },
    { label: "Mat Pilates", href: "/classes" },
    { label: "Yoga", href: "/classes" },
  ],
  studio: [
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-white.png"
                alt="Rhythm Cycle & Sculpt"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Shawnee&rsquo;s premier boutique cycling and sculpt studio. Five
              class formats. Premium amenities. Your first class is always free.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/rhythmcyclingstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-divider text-text-secondary hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Classes links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-text-muted font-medium mb-6">
              Classes
            </h4>
            <ul className="space-y-3">
              {footerLinks.classes.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-text-muted font-medium mb-6">
              Studio
            </h4>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-medium mb-3">
                Visit Us
              </p>
              <address className="not-italic text-sm text-text-secondary leading-relaxed">
                Shawnee, KS
                <br />
                {/* TODO: Add full address from Tommy */}
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-divider flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Rhythm Cycle & Sculpt. All rights reserved.
          </p>
          <p className="text-text-muted text-xs tracking-wider">
            Built by{" "}
            <a
              href="https://ridleywebworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              Ridley Web Works
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
