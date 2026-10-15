import Link from "next/link";
import { LogoMark } from "./Icons";
import { SITE, hasRealInstagram } from "@/lib/site";

const linkCls = "text-cream/75 no-underline transition-colors hover:text-gold-300";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-sand">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Gaurav Gimbal – home">
            <LogoMark className="size-10" />
            <span className="leading-tight">
              <b className="block font-display text-xl font-semibold">Gaurav Gimbal</b>
              <small className="block text-[10px] uppercase tracking-[0.28em] text-mute">Photo · Reels · Jaipur</small>
            </span>
          </Link>
          <p className="mt-5 text-[15px] text-mute">
            Gimbal reels, pre-wedding and tourist photo shoots across Jaipur&rsquo;s most loved locations.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-[11.5px] font-semibold uppercase tracking-[0.22em] text-gold-300">Explore</h4>
          <ul className="grid gap-3 text-[15px]">
            <li><Link className={linkCls} href="/packages">Packages &amp; Pricing</Link></li>
            <li><Link className={linkCls} href="/calculator">Cost Calculator</Link></li>
            <li><Link className={linkCls} href="/contact">Book &amp; Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-[11.5px] font-semibold uppercase tracking-[0.22em] text-gold-300">Get in touch</h4>
          <ul className="grid gap-3 text-[15px]">
            <li><a className={linkCls} href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            {hasRealInstagram && (
              <li><a className={linkCls} href={SITE.instagram} target="_blank" rel="noopener noreferrer me">Instagram</a></li>
            )}
            <li><a className={linkCls} href={SITE.phoneHref}>{SITE.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="wrap flex flex-wrap justify-between gap-2 py-6 text-[13px] text-mute">
          <span>© {new Date().getFullYear()} Gaurav Gimbal Photography, Jaipur, Rajasthan.</span>
          <span>Sunrise · Sunset · Full Day slots</span>
        </div>
      </div>
    </footer>
  );
}
