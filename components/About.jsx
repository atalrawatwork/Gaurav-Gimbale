import Image from "next/image";
import { Heart, Camera, Mountain } from "lucide-react";
import Reveal from "./Reveal";
import { SITE, STATS } from "@/lib/data";

const SPECIALITIES = [
  { icon: Heart, label: "Pre-Wedding & Wedding", color: "text-blush-400" },
  { icon: Camera, label: "Candid & Cinematic", color: "text-gold-400" },
  { icon: Mountain, label: "Tourist & Travel", color: "text-sage-400" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32" aria-labelledby="about-title">
      <Reveal>
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold-500/30" aria-hidden="true" />
          <Image
            src="https://picsum.photos/seed/gaurav-portrait/800/1000"
            alt="Gaurav Gimbale, professional photographer in Jaipur"
            width={800}
            height={1000}
            className="relative rounded-[1.6rem] object-cover"
            sizes="(min-width:1024px) 40vw, 90vw"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="section-label">About me</p>
        <h2 id="about-title" className="section-title mt-3">Hi, I&apos;m {SITE.name}</h2>
        <p className="mt-6 text-lg leading-relaxed text-cream/75">
          I&apos;m a professional photographer and the face behind <strong className="text-gold-300">{SITE.brand}</strong>, based in {SITE.city}.
          From dreamy pre-wedding shoots in the Pink City to full two-day traditional weddings and tourist
          portraits at Amer, Hawa Mahal and beyond — I focus on honest emotion, soft light and stories you&apos;ll
          love looking back on.
        </p>
        <p className="mt-4 leading-relaxed text-cream/65">
          Every shoot is relaxed and personal. You bring the moment; I make sure it&apos;s remembered beautifully —
          in photos, reels and cinematic films.
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {SPECIALITIES.map(({ icon: Icon, label, color }) => (
            <li key={label} className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800 px-4 py-2 text-sm">
              <Icon size={16} className={color} /> {label}
            </li>
          ))}
        </ul>

        <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-700 pt-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-3xl text-gold-400 sm:text-4xl">{s.value}</dd>
              <dt className="mt-1 text-xs uppercase tracking-wider text-cream/55">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
