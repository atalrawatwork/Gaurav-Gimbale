import Image from "next/image";
import Link from "next/link";
import WaLink from "@/components/WaLink";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon, InstagramIcon } from "@/components/Icons";
import { SITE, SLOTS, PHOTOS, inr } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: { absolute: "Gaurav Gimbal | Gimbal Photographer & Reels Shoot in Jaipur" },
  description:
    "Reels and photo shoots in Jaipur with Gaurav Gimbal. Sunrise and sunset slots from ₹1,000 at Hawa Mahal, Amer Fort, Nahargarh and Jal Mahal. Book on WhatsApp.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Jaipur · Gimbal Reels · Photo Shoots</span>
            <h1>
              Create your unforgettable <span className="en">reels</span> and <span className="en">photos</span> with Gaurav <span className="en">Gimbal</span>. Book your slot today.
            </h1>
            <p className="lead">
              Shoot at Hawa Mahal, Amer Fort, Nahargarh and Jal Mahal at sunrise, or at Jaipur&rsquo;s best spots at sunset. Slots start at just {inr(1000)}.
            </p>
            <div className="row">
              <WaLink><WhatsAppIcon /> Book on WhatsApp</WaLink>
              <Link href="/packages" className="btn btn-ghost">View Packages</Link>
            </div>
            <div className="hero-meta">
              <div><b>{inr(1000)}</b>Sunrise &amp; Sunset slots</div>
              <div><b>{inr(3000)}</b>Full Day, flat</div>
              <div><b>10</b>Iconic Jaipur spots</div>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-photo">
              <Image
                src="/images/hero-gaurav.jpg"
                alt="Gaurav Gimbal, Jaipur photographer and reels creator, holding his Canon camera outdoors at sunrise"
                width={1280}
                height={853}
                priority
                sizes="(max-width: 980px) 90vw, 560px"
              />
            </div>
            <div className="float-card">
              <i aria-hidden="true">📷</i>
              <span>Meet your photographer<b>Gaurav Gimbal</b></span>
            </div>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="wrap">
          <ul>
            <li>Reels Shoot</li><li>Pre-Wedding</li><li>Tourist Photography</li><li>Sunrise Shoot</li><li>Sunset Shoot</li>
          </ul>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div className="photo">
            <Image src="/images/behind-the-lens.jpg" alt="Gaurav Gimbal filming a couple with a gimbal stabiliser and the finished sunset silhouette photo" width={900} height={1350} sizes="(max-width: 980px) 90vw, 540px" />
          </div>
          <div>
            <span className="eyebrow">Why Gaurav Gimbal</span>
            <h2>Smooth gimbal reels, honest pricing, Jaipur&rsquo;s best light.</h2>
            <p className="lead">
              Gimbal-stabilised video makes every reel feel cinematic, and golden-hour timing makes every photo glow. Pick a slot, pick your locations, and we handle the rest.
            </p>
            <ul className="ticks">
              <li>Fixed, transparent slot pricing with no hidden charges</li>
              <li>Popular Jaipur locations covered in a single slot</li>
              <li>Easy booking: one tap opens WhatsApp with your message ready</li>
            </ul>
            <Link href="/calculator" className="btn">Calculate your cost</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2>Moments we&rsquo;ve framed</h2>
            </div>
            <p className="lead">Weddings, pre-wedding stories, portraits and Jaipur sunsets. Tap any photo to view it larger.</p>
          </div>
          <Gallery photos={PHOTOS} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow">Slots</span>
              <h2>Choose your time of day</h2>
            </div>
            <Link href="/packages" className="btn btn-ghost">Full pricing details</Link>
          </div>
          <div className="steps">
            {Object.values(SLOTS).map((s) => (
              <div className="step" key={s.id}>
                <h3>{s.name}</h3>
                <p>{s.time}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--ink)", marginTop: 14 }}>{inr(s.base)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap seo-text">
          <h2>Reels and photo shoots across Jaipur</h2>
          <p>
            Looking for a gimbal photographer in Jaipur? Gaurav Gimbal shoots reels, couple portraits and tourist photos at Hawa Mahal, Amer Fort, Jal Mahal, City Palace, Jantar Mantar, Albert Hall, Birla Mandir, Patrika Gate and the Nahargarh sunrise point.
          </p>
          <p>
            Compare the <Link href="/packages">Sunrise, Sunset and Full Day packages</Link>, estimate your bill with the <Link href="/calculator">live cost calculator</Link>, or go straight to <Link href="/contact">booking and contact</Link>.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div>
              <h2>Your reel is one message away.</h2>
              <p>Choose a slot, send the ready-made message, and Gaurav will confirm your booking.</p>
            </div>
            <div className="row">
              <WaLink><WhatsAppIcon /> Book on WhatsApp</WaLink>
              <a href={SITE.instagram} className="btn btn-ghost" target="_blank" rel="noopener noreferrer me"><InstagramIcon /> Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
