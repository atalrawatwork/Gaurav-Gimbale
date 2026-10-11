import { Check, Clapperboard, Smile, Film, Heart, Sparkles, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { PACKAGES, SITE } from "@/lib/data";

const ICONS = { reels: Clapperboard, candid: Smile, cine: Film, pre: Heart, wedding: Sparkles };

/** Pricing cards. Each card has a WhatsApp "Book" button with the package pre-filled. */
export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" aria-labelledby="services-title">
      <Reveal className="text-center">
        <p className="section-label">Services &amp; Pricing</p>
        <h2 id="services-title" className="section-title mt-3">Simple, honest packages</h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/65">
          Choose a plan that fits your moment. Custom combinations available — just message me on WhatsApp.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PACKAGES.map((p, i) => {
          const Icon = ICONS[p.icon] || Sparkles;
          const wa = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
            `Hello Gaurav, I'm interested in the "${p.name}" package (${p.price} ${p.unit}). Please share availability.`
          )}`;
          return (
            <Reveal key={p.name} delay={i * 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition hover:-translate-y-1 ${
                  p.highlight
                    ? "border-gold-500 bg-gradient-to-b from-ink-700 to-ink-800 shadow-[0_0_50px_-15px] shadow-gold-500/40"
                    : "border-ink-600 bg-ink-800 hover:border-gold-500/50"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-950">
                    Most popular
                  </span>
                )}
                <Icon className={p.highlight ? "text-gold-400" : "text-blush-400"} size={30} />
                <h3 className="mt-5 font-display text-3xl text-cream">{p.name}</h3>
                <p className="mt-2 text-sm text-cream/60">{p.blurb}</p>

                <p className="mt-6">
                  <span className="font-display text-5xl text-gold-400">{p.price}</span>
                  <span className="ml-2 text-sm text-cream/55">{p.unit}</span>
                </p>

                <ul className="mt-6 flex-1 space-y-3 text-sm text-cream/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check size={16} className="mt-0.5 shrink-0 text-sage-400" /> {f}
                    </li>
                  ))}
                </ul>

                <a href={wa} target="_blank" rel="noopener noreferrer" className={`mt-8 ${p.highlight ? "btn-gold" : "btn-ghost"}`}>
                  <MessageCircle size={16} /> Book on WhatsApp
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
