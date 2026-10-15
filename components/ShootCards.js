import WaLink from "@/components/WaLink";
import { WhatsAppIcon, CheckIcon, SmileIcon, FilmIcon, SparklesIcon, HeartIcon } from "@/components/Icons";
import { SHOOTS, inr } from "@/lib/site";

const ICONS = { candid: SmileIcon, film: FilmIcon, sparkles: SparklesIcon, heart: HeartIcon };

/** Pricing cards for the one-day shoot packages (data lives in lib/site.js → SHOOTS). */
export default function ShootCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {SHOOTS.map((s) => {
        const Icon = ICONS[s.icon] || SparklesIcon;
        return (
          <article
            key={s.id}
            className={`card ${s.featured ? "border-gold-500/60 from-linen shadow-glow" : ""}`}
          >
            {s.badge && (
              <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-paper">
                {s.badge}
              </span>
            )}
            <span className="grid size-11 place-items-center rounded-full bg-gold-400/15 text-gold-300">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="text-[1.5rem]">{s.name}</h3>
              <p className="mt-2 text-[14.5px] text-mute">{s.desc}</p>
            </div>
            <div className="font-display text-[2.4rem] font-semibold leading-none text-gold-300">
              {inr(s.price)} <small className="font-sans text-sm font-normal text-mute">{s.unit}</small>
            </div>
            <ul className="grid gap-2.5 text-[14.5px] text-cream/90">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-1 size-3.5 flex-none text-gold-300" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <WaLink service={s.id} className={`btn btn-block ${s.featured ? "btn-wa" : "btn-ghost"}`}>
                <WhatsAppIcon /> Book on WhatsApp
              </WaLink>
            </div>
          </article>
        );
      })}
    </div>
  );
}
