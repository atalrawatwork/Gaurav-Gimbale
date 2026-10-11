"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Fullscreen image viewer.
 * - Keyboard: ← → to navigate, Esc to close
 * - Click backdrop to close; page scroll is locked while open
 */
export default function Lightbox({ photos, index, setIndex }) {
  const open = index !== null && photos[index];

  const close = useCallback(() => setIndex(null), [setIndex]);
  const next = useCallback(() => setIndex((i) => (i + 1) % photos.length), [setIndex, photos.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + photos.length) % photos.length), [setIndex, photos.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  const photo = open ? photos[index] : null;

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={photo.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <button onClick={close} aria-label="Close" className="absolute right-5 top-5 rounded-full bg-ink-800 p-3 text-cream hover:text-gold-300">
            <X size={22} />
          </button>
          {photos.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo" className="absolute left-3 rounded-full bg-ink-800/80 p-3 text-cream hover:text-gold-300 sm:left-6">
                <ChevronLeft size={26} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo" className="absolute right-3 rounded-full bg-ink-800/80 p-3 text-cream hover:text-gold-300 sm:right-6">
                <ChevronRight size={26} />
              </button>
            </>
          )}

          <motion.figure
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              width={photo.w}
              height={photo.h}
              sizes="100vw"
              priority
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="font-display text-2xl text-cream">{photo.title}</span>
              <span className="ml-3 text-xs uppercase tracking-wider text-gold-300">{photo.category}</span>
              <span className="ml-3 text-xs text-cream/50">{index + 1} / {photos.length}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
