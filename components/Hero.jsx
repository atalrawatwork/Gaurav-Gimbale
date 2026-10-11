"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Clock } from "lucide-react";
import { SITE } from "@/lib/data";

/** Full-screen hero with a background image placeholder, big typography and CTA. */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden" aria-label="Introduction">
      {/* Background image placeholder — swap for /images/hero.jpg */}
      <Image
        src="https://picsum.photos/seed/gimbal-hero/1920/1200"
        alt="Wedding couple at golden hour photographed by Gaurav Gimbale"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/50 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-blush-500/10" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-label"
        >
          {SITE.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-cream sm:text-7xl lg:text-8xl"
        >
          Moments that <span className="italic text-gold-400">last</span>
          <br />
          forever, framed by <span className="text-blush-400">Gaurav</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mx-auto mt-6 max-w-xl text-base text-cream/75 sm:text-lg"
        >
          {SITE.brand} {SITE.city} — wedding, pre-wedding &amp; tourist photography told with a cinematic eye.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#portfolio" className="btn-gold">View Portfolio <ArrowDown size={16} /></a>
          <a href="#services" className="btn-ghost">See Packages</a>
        </motion.div>

        <p className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream/60">
          <Clock size={14} className="text-gold-400" /> {SITE.timing}
        </p>
      </div>
    </section>
  );
}
