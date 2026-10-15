import Image from "next/image";
import Link from "next/link";
import WaLink from "@/components/WaLink";
import Gallery from "@/components/Gallery";
import ShootCards from "@/components/ShootCards";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon, InstagramIcon, ArrowIcon, CheckIcon } from "@/components/Icons";
import { SITE, SLOTS, PHOTOS, inr, hasRealInstagram } from "@/lib/site";
import { pageMeta, breadcrumbSchema, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata = pageMeta({
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

const SERVICES = ["Reels Shoot", "Pre-Wedding", "Tourist Photography", "Sunrise Shoot", "Sunset Shoot", "Portraits", "Wedding Moments"];

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      {/* HERO */}
      <section className="grain relative -mt-[72px] overflow-hidden pt-[72px]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 size-[640px] rounded-full bg-gold-500/20 blur-[140px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 size-[420px] rounded-full bg-gold-600/10 blur-[120px]" />
        <div className="wrap relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="animate-fade-up">
            <span className="eyebrow">Jaipur · Gimbal Reels · Photo Shoots</span>
            <h1 className="mb-6 mt-6 text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.04]">
              Create unforgettable <span className="gold-text italic">reels</span> &amp; <span className="gold-text italic">photos</span> with Gaurav Gimbal.
            </h1>
            <p className="lead mb-9">
              Shoot at Hawa Mahal, Amer Fort, Nahargarh and Jal Mahal at sunrise, or at Jaipur&rsquo;s best spots at sunset. Slots start at just {inr(1000)}.
            </p>
            <div className="flex flex-wrap gap-3">
              <WaLink><WhatsAppIcon /> Book on WhatsApp</WaLink>
              <Link href="/packages" className="btn btn-ghost">View Packages <ArrowIcon /></Link>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-black/10 pt-7">
              {[
                [inr(1000), "Sunrise & Sunset slots"],
                [inr(3000), "Full Day, flat"],
                ["10+", "Iconic Jaipur spots"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-[1.7rem] font-semibold text-gold-300">{n}</dt>
                  <dd className="mt-1 text-[13px] leading-snug text-mute">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] animate-fade-up [animation-delay:150ms]">
            <div aria-hidden="true" className="absolute -inset-3 rounded-t-[999px] rounded-b-[40px] border border-gold-500/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[32px] shadow-glow">
              <Image
                src="/images/hero-gaurav.jpg"
                alt="Gaurav Gimbal, Jaipur photographer and reels creator, holding his Canon camera outdoors at sunrise"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 540px"
                className="object-cover"
                style={{ objectPosition: "42% 30%" }}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-3 bottom-10 flex animate-float items-center gap-3 rounded-2xl border border-black/10 bg-snow/90 px-5 py-4 shadow-card backdrop-blur sm:-left-8">
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-gold-400/15 text-lg">📷</span>
              <span className="text-[13px] leading-tight text-mute">
                Meet your photographer
                <b className="mt-0.5 block font-display text-lg font-semibold text-cream">Gaurav Gimbal</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-black/10 bg-sand py-5" aria-label="Services">
        <ul className="flex w-max animate-marquee font-display text-lg italic text-cream/80">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <li key={i} aria-hidden={i >= SERVICES.length ? "true" : undefined} className="flex items-center gap-12 whitespace-nowrap pr-12">
              {s}
              <span aria-hidden="true" className="text-gold-500">✦</span>
            </li>
          ))}
        </ul>
      </div>

      {/* WHY */}
      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="reveal relative mx-auto w-full max-w-[460px]">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 size-full rounded-[32px] border border-gold-500/30" />
            <Image
              src="/images/behind-the-lens.jpg"
              alt="Gaurav Gimbal filming a couple with a gimbal stabiliser and the finished sunset silhouette photo"
              width={900}
              height={1350}
              sizes="(max-width: 1024px) 90vw, 460px"
              className="relative h-auto w-full rounded-[32px] shadow-card"
            />
          </div>
          <div className="reveal">
            <span className="eyebrow">Why Gaurav Gimbal</span>
            <h2 className="mb-5 mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">Smooth gimbal reels., honest pricing, Jaipur&rsquo;s best light.</h2>
            <p className="lead mb-7">
              Gimbal-stabilised video makes every reel feel cinematic, and golden-hour timing makes every photo glow. Pick a slot, pick your locations, and we handle the rest.
            </p>
            <ul className="mb-9 grid gap-3.5">
              {[
                "Fixed, transparent slot pricing with no hidden charges",
                "Popular Jaipur locations covered in a single slot",
                "Easy booking: one tap opens WhatsApp with your message ready",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-cream/90">
                  <span className="mt-0.5 grid size-6 flex-none place-items-center rounded-full bg-gold-400/15 text-gold-300"><CheckIcon className="size-3.5" /></span>
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/calculator" className="btn">Calculate your cost <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section pt-0" id="portfolio">
        <div className="wrap">
          <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">Moments we&rsquo;ve framed</h2>
            </div>
            <p className="lead">Weddings, pre-wedding stories, portraits and Jaipur sunsets. Tap any photo to view it larger.</p>
          </div>
          <Gallery photos={PHOTOS} />
        </div>
      </section>

      {/* SLOTS */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Slots</span>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">Choose your time of day</h2>
            </div>
            <Link href="/packages" className="btn btn-ghost">Full pricing details <ArrowIcon /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {Object.values(SLOTS).map((s) => (
              <Link
                key={s.id}
                href={`/calculator?slot=${s.id}`}
                className="reveal group card no-underline transition duration-300 hover:-translate-y-1 hover:border-gold-500/50"
              >
                <h3 className="text-2xl">{s.name}</h3>
                <p className="text-[15px] text-mute">{s.time}</p>
                <p className="mt-2 font-display text-[2.6rem] font-semibold leading-none text-gold-300">{inr(s.base)}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cream/80 group-hover:text-gold-300">
                  Calculate cost <ArrowIcon className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ONE-DAY SHOOT PACKAGES */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="reveal mb-10 max-w-[640px]">
            <span className="eyebrow">Services &amp; Pricing</span>
            <h2 className="mb-3 mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">Simple, honest packages</h2>
            <p className="lead">Choose a plan that fits your moment. Custom combinations available, just message on WhatsApp.</p>
          </div>
          <ShootCards />
        </div>
      </section>

      {/* SEO COPY */}
      <section className="section pt-0">
        <div className="wrap max-w-[860px] text-mute">
          <h2 className="mb-5 text-[clamp(1.7rem,3vw,2.3rem)] text-cream">Reels and photo shoots across Jaipur</h2>
          <p>
            Looking for a gimbal photographer in Jaipur? Gaurav Gimbal shoots reels, couple portraits and tourist photos at Hawa Mahal, Amer Fort, Jal Mahal, City Palace, Jantar Mantar, Albert Hall, Birla Mandir, Patrika Gate and the Nahargarh sunrise point.
          </p>
          <p className="mt-4">
            Compare the <Link className="text-gold-300 underline underline-offset-4" href="/packages">Sunrise, Sunset and Full Day packages</Link>, estimate your bill with the <Link className="text-gold-300 underline underline-offset-4" href="/calculator">live cost calculator</Link>, or go straight to <Link className="text-gold-300 underline underline-offset-4" href="/contact">booking and contact</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="grain relative overflow-hidden rounded-[2rem] border border-gold-500/30 bg-gradient-to-br from-linen via-snow to-sand p-8 sm:p-14">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-gold-500/25 blur-[100px]" />
            <div className="relative flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)]">Your reel is one message away.</h2>
                <p className="mt-3 text-mute">Choose a slot, send the ready-made message, and Gaurav will confirm your booking.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <WaLink><WhatsAppIcon /> Book on WhatsApp</WaLink>
                {hasRealInstagram && (
                  <a href={SITE.instagram} className="btn btn-ghost" target="_blank" rel="noopener noreferrer me"><InstagramIcon /> Instagram</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
