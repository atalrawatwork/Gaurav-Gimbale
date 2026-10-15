import Link from "next/link";
import WaLink from "@/components/WaLink";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/Icons";
import { SLOTS, FAQS, SITE, inr } from "@/lib/site";
import { pageMeta, breadcrumbSchema, faqSchema, offersSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Jaipur Photoshoot Packages & Pricing",
  description:
    "Sunrise Slot ₹1,000, Sunset Slot ₹1,000, Full Day Package ₹3,000. Shoot at Hawa Mahal, Amer Fort, Jal Mahal, City Palace and more in Jaipur. ₹300/hour extra after slot time.",
  path: "/packages",
  keywords: ["Jaipur photoshoot price", "reels shoot price Jaipur", "sunrise photoshoot Jaipur", "sunset photoshoot Jaipur"],
});

const tint = { sunrise: "tint-1", sunset: "tint-2", full: "featured" };

export default function Packages() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Packages & Pricing", path: "/packages" }]), offersSchema(), faqSchema()]} />

      <section className="page-title">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Packages</span></nav>
          <h1>Packages &amp; <em className="it">Pricing</em></h1>
          <p className="lead">Simple slot-based pricing for reels and photo shoots in Jaipur. Pick a time of day and the locations you love.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <div className="price-grid">
            {Object.values(SLOTS).map((s) => (
              <article key={s.id} className={`card ${tint[s.id]}`}>
                {s.id === "full" && <span className="badge">Complete day</span>}
                <div>
                  <h2 style={{ fontSize: "1.9rem" }}>{s.name}</h2>
                  <p className="time">{s.time}</p>
                </div>
                <div className="price">{inr(s.base)} <small>{s.id === "full" ? "flat" : "per slot"}</small></div>
                {s.locations.length > 0 ? (
                  <div>
                    <h3 style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10, color: "inherit", opacity: .7 }}>Locations</h3>
                    <div className="chips">{s.locations.map((l) => <span key={l}>{l}</span>)}</div>
                  </div>
                ) : (
                  <p className="time">One flat price for the whole day, from sunrise until 8:00 PM.</p>
                )}
                <p className="note">Note: {s.note}.</p>
                <div className="actions">
                  <WaLink slot={s.id} className={`btn ${s.id === "full" ? "btn-solid" : "btn-wa"}`}><WhatsAppIcon /> Book on WhatsApp</WaLink>
                  <Link href={`/calculator?slot=${s.id}`} className="btn btn-ghost">Calculate cost</Link>
                </div>
              </article>
            ))}
          </div>
          <p className="fine">All prices are in Indian Rupees (₹). Extra hours are charged at {inr(SITE.extraPerHour)} per hour after the slot ends (Sunrise and Sunset slots only).</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Questions, answered</h2>
            </div>
          </div>
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
