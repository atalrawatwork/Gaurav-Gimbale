"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TILE_CLASS } from "@/lib/site";

export default function Gallery({ photos }) {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      lastTrigger.current?.focus();
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[clamp(160px,18vw,240px)] md:grid-cols-4 md:gap-4">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-label={`View larger: ${p.cap}`}
            onClick={(e) => {
              lastTrigger.current = e.currentTarget;
              setActive(p);
            }}
            className={`group relative min-h-0 cursor-zoom-in overflow-hidden rounded-2xl border border-black/10 bg-snow text-left ${TILE_CLASS[p.tile] || ""}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              loading={i < 2 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
              style={{ objectPosition: p.pos }}
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-x-4 bottom-3 text-[13px] font-medium text-white">{p.cap}</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-paper/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo preview: ${active.cap}`}
          onClick={() => setActive(null)}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close preview"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-black/20 bg-snow text-2xl leading-none text-cream hover:border-gold-400"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <Image
            src={active.src}
            alt={active.alt}
            width={active.w}
            height={active.h}
            sizes="100vw"
            className="max-h-[88vh] w-auto max-w-full rounded-xl object-contain shadow-card"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
