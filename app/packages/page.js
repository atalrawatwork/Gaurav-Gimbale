import Link from "next/link";
import WaLink from "@/components/WaLink";
import JsonLd from "@/components/JsonLd";
import PageTitle from "@/components/PageTitle";
import { WhatsAppIcon, ArrowIcon } from "@/components/Icons";
import { SLOTS, FAQS, SITE, inr } from "@/lib/site";
import { pageMeta, breadcrumbSchema, faqSchema, offersSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Jaipur Photoshoot Packages & Pricing",
  description:
    "Sunrise Slot ₹1,000, Sunset Slot ₹1,000, Full Day Package ₹3,000. Shoot at Hawa Mahal, Amer Fort, Jal Mahal, City Palace and more in Jaipur. ₹300/hour extra after slot time.",
  path: "/packages",
  keywords: ["Jaipur photoshoot price", "reels shoot price Jaipur", "sunrise photoshoot Jaipur", "sunset photoshoot Jaipur"],
});

export default function Packages() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Packages & Pricing", path: "/packages" }]), offersSchema(), faqSchema()]} />

      <PageTitle
        crumb="Packages"
        title={<>Packages &amp; <span className="gold-text italic">Pricing</span></>}
        lead="Simple slot-based pricing for reels and photo shoots in Jaipur. Pick a time of day and the locations you love."
      />

      <section className="section pt-4">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-3">
            {Object.values(SLOTS).map((s) => {
              const featured = s.id === "full";
              return (
                <article
                  key={s.id}
                  className={`card ${featured ? "border-gold-500/60 from-linen shadow-glow" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-paper">Best value</span>
                  )}
                  <div>
                    <h2 className="text-[1.9rem]">{s.name}</h2>
                    <p className="mt-1 text-[15px] text-mute">{s.time}</p>
                  </div>
                  <div className="font-display text-[3rem] font-semibold leading-none text-gold-300">
                    {inr(s.base)} <small className="font-sans text-sm font-normal text-mute">{featured ? "flat" : "per slot"}</small>
                  </div>
                  {s.locations.length > 0 ? (
                    <div>
                      <h3 className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Locations</h3>
                      <div className="flex flex-wrap gap-2">{s.locations.map((l) => <span className="chip" key={l}>{l}</span>)}</div>
                    </div>
                  ) : (
                    <p className="text-[15px] text-mute">One flat price for the whole day, from sunrise until 8:00 PM.</p>
                  )}
                  <p className="text-sm text-mute">Note: {s.note}.</p>
                  <div className="mt-auto grid gap-3 pt-2">
                    <WaLink slot={s.id} className="btn btn-wa"><WhatsAppIcon /> Book on WhatsApp</WaLink>
                    <Link href={`/calculator?slot=${s.id}`} className="btn btn-ghost">Calculate cost <ArrowIcon /></Link>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-mute">
            All prices are in Indian Rupees (₹). Extra hours are charged at {inr(SITE.extraPerHour)} per hour after the slot ends (Sunrise and Sunset slots only).
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap max-w-[860px]">
          <span className="eyebrow">FAQ</span>
          <h2 className="mb-8 mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">Questions, answered</h2>
          <div className="divide-y divide-black/10 rounded-3xl border border-black/10 bg-snow/60">
            {FAQS.map((f) => (
              <details key={f.q} className="group px-6 py-5 sm:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="grid size-8 flex-none place-items-center rounded-full border border-black/15 text-gold-300 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[62ch] text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
