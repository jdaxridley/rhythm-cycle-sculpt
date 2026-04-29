import type { Metadata } from "next";
import { Inter, Bebas_Neue, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rhythm Cycle & Sculpt | Boutique Fitness Studio in Shawnee, KS",
  description:
    "Shawnee's premier boutique cycling and sculpt studio. Cycle, Barre, Fit Body, Mat Pilates, and Yoga classes. Your first class is free.",
  keywords: [
    "cycle studio Shawnee",
    "spin class Shawnee KS",
    "barre class Kansas City",
    "yoga Shawnee",
    "pilates Shawnee",
    "boutique fitness Kansas City",
    "Rhythm Cycle Sculpt",
  ],
  openGraph: {
    title: "Rhythm Cycle & Sculpt | Boutique Fitness in Shawnee, KS",
    description:
      "Cycle, Barre, Fit Body, Mat Pilates, and Yoga. Premium amenities. First class free.",
    type: "website",
    locale: "en_US",
    siteName: "Rhythm Cycle & Sculpt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
