import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { studio } from "@/data/content";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://ateliernoir.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${studio.name} — Interiors & Bespoke Furniture`,
    template: `%s · ${studio.name}`,
  },
  description:
    "Atelier Noir is a Mumbai- and Milan-based interior design and bespoke furniture studio. Warm, material-led interiors and hand-made pieces composed to last decades.",
  keywords: [
    "interior design studio",
    "bespoke furniture",
    "luxury interiors Mumbai",
    "custom furniture",
    "Atelier Noir",
  ],
  openGraph: {
    title: `${studio.name} — Interiors & Bespoke Furniture`,
    description:
      "Warm, material-led interiors and hand-made furniture, composed to last decades. A design house in Mumbai & Milan.",
    url: siteUrl,
    siteName: studio.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${studio.name} — Interiors & Bespoke Furniture`,
    description:
      "Warm, material-led interiors and hand-made furniture, composed to last decades.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-bone text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
