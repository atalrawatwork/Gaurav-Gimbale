import Link from "next/link";
import { LogoMark } from "./Icons";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <Link href="/" className="brand" aria-label="Gaurav Gimbal – home">
            <LogoMark />
            <span><b>Gaurav Gimbal</b><small>Photo · Reels · Jaipur</small></span>
          </Link>
          <p>Gimbal reels, pre-wedding and tourist photo shoots across Jaipur&rsquo;s most loved locations.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/packages">Packages &amp; Pricing</Link></li>
            <li><Link href="/calculator">Cost Calculator</Link></li>
            <li><Link href="/contact">Book &amp; Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer me">Instagram</a></li>
            <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap copy">
        <span>© {new Date().getFullYear()} Gaurav Gimbal Photography, Jaipur, Rajasthan.</span>
        <span>Sunrise · Sunset · Full Day slots</span>
      </div>
    </footer>
  );
}
