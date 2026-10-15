"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery({ photos }) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <div className="gallery">
        {photos.map((p) => (
          <figure key={p.src} className={p.tile} tabIndex={0} onClick={() => setActive(p)} onKeyDown={(e) => e.key === "Enter" && setActive(p)}>
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: p.pos }} />
            <figcaption>{p.cap}</figcaption>
          </figure>
        ))}
      </div>
      <div className={`lightbox${active ? " on" : ""}`} onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label="Photo preview">
        {active && /* eslint-disable-next-line @next/next/no-img-element */ <img src={active.src} alt={active.alt} />}
      </div>
    </>
  );
}
