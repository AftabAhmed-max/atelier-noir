"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav, studio } from "@/data/content";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only the home page has a full-bleed dark hero to sit transparently over.
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overHero;
  const textLight = overHero && !scrolled;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-rule bg-bone/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-editorial flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link
          href="/"
          className={`font-display text-xl tracking-[0.32em] transition-colors duration-500 ${
            textLight ? "text-bone" : "text-ink"
          }`}
        >
          {studio.wordmark}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`link-underline font-body text-[13px] uppercase tracking-[0.18em] transition-colors duration-500 ${
                    textLight ? "text-bone/90 hover:text-bone" : "text-ink/70 hover:text-ink"
                  } ${active ? "after:w-full" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className={`hidden border px-6 py-2.5 font-body text-[12px] uppercase tracking-[0.18em] transition-all duration-500 md:inline-block ${
            textLight
              ? "border-bone/40 text-bone hover:bg-bone hover:text-ink"
              : "border-ink/30 text-ink hover:bg-ink hover:text-bone"
          }`}
        >
          Book a Consultation
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-[60] flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden`}
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            } ${open || !textLight ? "bg-ink" : "bg-bone"}`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${open ? "opacity-0" : ""} ${
              open || !textLight ? "bg-ink" : "bg-bone"
            }`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            } ${open || !textLight ? "bg-ink" : "bg-bone"}`}
          />
        </button>
      </nav>
      </header>

      {/* Mobile menu — rendered OUTSIDE <header> so the header's backdrop-blur
          (which becomes a containing block for fixed descendants) cannot clip
          this panel. The fixed inset-0 now resolves against the viewport, so
          its solid background covers the full screen. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#F4F1EC] px-6 pt-28 md:hidden"
          >
            <ul className="flex flex-col gap-7">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-4xl font-light text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-12 inline-block w-fit border border-ink px-8 py-3 font-body text-[12px] uppercase tracking-[0.18em] text-ink"
            >
              Book a Consultation
            </Link>
            <div className="mt-auto pb-10 pt-12 font-body text-[12px] uppercase tracking-[0.18em] text-ink/50">
              {studio.email}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
