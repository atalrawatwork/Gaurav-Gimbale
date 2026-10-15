import Link from "next/link";
import Generator from "@/components/Generator";
import WaLink from "@/components/WaLink";
import JsonLd from "@/components/JsonLd";
import PageTitle from "@/components/PageTitle";
import { WhatsAppIcon, InstagramIcon, PhoneIcon } from "@/components/Icons";
import { SITE, hasRealInstagram, inr } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Book a Shoot on WhatsApp, Jaipur",
  description:
    "Book your Jaipur reels or photo shoot slot on WhatsApp or follow Gaurav Gimbal on Instagram. Pre-filled booking message with your slot and extra hours.",
  path: "/contact",
  keywords: ["book photographer Jaipur", "Gaurav Gimbal WhatsApp", "Gaurav Gimbal Instagram"],
});

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Book & Contact", path: "/contact" }])} />
      <PageTitle
        crumb="Contact"
        title={<>Book your <span className="gold-text italic">slot</span></>}
        lead="The fastest way to book is WhatsApp. Your selected slot and extra hours are added to the message automatically."
      />

      <section className="section pt-4">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h2 className="text-[1.7rem]">WhatsApp</h2>
              <p className="text-mute">Tap the button, review the message and press send. Gaurav will confirm availability.</p>
              <div className="flex flex-wrap gap-3"><WaLink><WhatsAppIcon /> Book on WhatsApp</WaLink></div>
              <p className="text-sm text-mute">Number: <span className="select-all text-cream">{SITE.phone}</span></p>
            </div>
            <div className="card">
              <h2 className="text-[1.7rem]">{hasRealInstagram ? "Instagram & Call" : "Call"}</h2>
              <p className="text-mute">
                {hasRealInstagram ? "See recent reels and shoots, and message Gaurav directly." : "Prefer a quick chat? Call Gaurav directly."}
              </p>
              <div className="flex flex-wrap gap-3">
                {hasRealInstagram && (
                  <a className="btn" href={SITE.instagram} target="_blank" rel="noopener noreferrer me"><InstagramIcon /> Follow on Instagram</a>
                )}
                <a className="btn btn-ghost" href={SITE.phoneHref}><PhoneIcon /> Call</a>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 rounded-3xl border border-black/10 bg-snow/60 p-8 md:grid-cols-3">
            {[
              ["Jaipur, Rajasthan", "All shoots happen in and around the city"],
              ["Sunrise · Sunset · Full Day", "Pick the light you love"],
              [`${inr(SITE.extraPerHour)} / extra hour`, "After the slot ends (Sunrise & Sunset)"],
            ].map(([b, t]) => (
              <div key={b}>
                <b className="block font-display text-lg font-semibold text-gold-300">{b}</b>
                <span className="text-sm text-mute">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap max-w-[720px]">
          <Generator variant="compact" />
          <p className="mt-5 text-sm text-mute">
            Want to add your date, name and preferred location? Use the <Link href="/calculator" className="text-gold-300 underline underline-offset-4">full cost calculator</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
