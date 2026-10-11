"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import { CATEGORIES, PHOTOS } from "@/lib/data";

/** Filterable masonry-style gallery + fullscreen lightbox. */
export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visible = useMemo(
    () => (active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="portfolio" className="bg-ink-900 py-24 lg:py-32" aria-labelledby="portfolio-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-label">Portfolio</p>
          <h2 id="portfolio-title" className="section-title mt-3">Stories in frames</h2>
        </Reveal>

        {/* Filter tabs */}
        <div role="tablist" aria-label="Filter photos by category" className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-sm uppercase tracking-wider transition ${
                active === c
                  ? "border-gold-500 bg-gold-500 text-ink-950"
                  : "border-ink-600 text-cream/70 hover:border-gold-400 hover:text-gold-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* CSS columns = easy masonry; layout animates when filters change */}
        <motion.ul layout className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
          <AnimatePresence mode="popLayout">
            {visible.map((photo) => (
              <motion.li
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setLightboxIndex(visible.indexOf(photo))}
                  className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label={`Open ${photo.title} full screen`}
                >
                  <Image
                    src={photo.src}
                    alt={`${photo.title} – ${photo.category} photography by Gaurav Gimbale, Jaipur`}
                    width={photo.w}
                    height={photo.h}
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="h-auto w-full transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink-950/85 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-left">
                      <span className="block font-display text-xl text-cream">{photo.title}</span>
                      <span className="text-xs uppercase tracking-wider text-gold-300">{photo.category}</span>
                    </span>
                    <Expand size={18} className="text-cream" />
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <Lightbox photos={visible} index={lightboxIndex} setIndex={setLightboxIndex} />
    </section>
  );
}
