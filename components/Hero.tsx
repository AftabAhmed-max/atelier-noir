"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ConsultationCTA from "@/components/ConsultationCTA";
import { home } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Full-bleed image with slow scale-in */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={home.heroImage}
          alt="A warm, minimal interior by Atelier Noir"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" />

      <div className="container-editorial relative px-6 pb-20 md:px-10 md:pb-28 lg:px-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-body text-[11px] uppercase tracking-widest text-bone/70"
        >
          {home.heroEyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1 }}
          className="mt-5 max-w-4xl font-display text-6xl font-light leading-[0.95] tracking-tight text-bone md:text-8xl lg:text-[8.5rem]"
        >
          {home.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 1 }}
          className="mt-7 max-w-xl font-body text-lg font-light leading-relaxed text-bone/80"
        >
          {home.heroTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 1 }}
          className="mt-10"
        >
          <ConsultationCTA label="Book a Consultation" variant="light" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-6 hidden items-center gap-3 md:right-10 md:flex lg:right-16"
      >
        <span className="font-body text-[10px] uppercase tracking-widest text-bone/60">
          Scroll
        </span>
        <motion.span
          animate={{ height: [12, 28, 12] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px bg-bone/60"
        />
      </motion.div>
    </section>
  );
}
