import Link from "next/link";
import Generator from "@/components/Generator";
import WaLink from "@/components/WaLink";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon, InstagramIcon, PhoneIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";
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
      <section className="page-title">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav>
          <h1>Book your <em className="it">slot</em></h1>
          <p className="lead">The fastest way to book is WhatsApp. Your selected slot and extra hours are added to the message automatically.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-card wa">
              <h2>WhatsApp</h2>
              <p>Tap the button, review the message and press send. Gaurav will confirm availability.</p>
              <div className="row">
                <WaLink><WhatsAppIcon /> Book on WhatsApp</WaLink>
              </div>
              <p>Number: <span className="sel">{SITE.phone}</span></p>
            </div>
            <div className="contact-card ig">
              <h2>Instagram</h2>
              <p>See recent reels and shoots, and message Gaurav directly.</p>
              <div className="row">
                <a className="btn" href={SITE.instagram} target="_blank" rel="noopener noreferrer me"><InstagramIcon /> Follow on Instagram</a>
                <a className="btn btn-ghost" href={SITE.phoneHref}><PhoneIcon /> Call</a>
              </div>
            </div>
          </div>

          <div className="facts">
            <div><b>Jaipur, Rajasthan</b>All shoots happen in and around the city</div>
            <div><b>Sunrise · Sunset · Full Day</b>Pick the light you love</div>
            <div><b>₹300 / extra hour</b>After the slot ends (Sunrise &amp; Sunset)</div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <Generator variant="compact" />
          <p className="fine">Want to add your date, name and preferred location? Use the <Link href="/calculator" style={{ textDecoration: "underline" }}>full cost calculator</Link>.</p>
        </div>
      </section>
    </>
  );
}
