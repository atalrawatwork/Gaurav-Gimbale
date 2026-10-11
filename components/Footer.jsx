import { Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { SITE, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm text-cream/60">{SITE.tagline}. Capturing your stories across Jaipur &amp; beyond.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs uppercase tracking-widest2 text-gold-400">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-cream/70 hover:text-gold-300">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <address className="space-y-3 text-sm not-italic text-cream/70">
          <h2 className="text-xs uppercase tracking-widest2 text-gold-400">{SITE.name}</h2>
          <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-gold-300"><Phone size={15} /> {SITE.phone}</a>
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-300"><MessageCircle size={15} /> WhatsApp</a>
          <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-gold-300"><MapPin size={15} className="mt-0.5 shrink-0" /> {SITE.address}</a>
          <div className="flex gap-3 pt-2">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blush-400"><Instagram size={20} /></a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold-300"><Facebook size={20} /></a>
          </div>
        </address>
      </div>
      <p className="border-t border-ink-800 py-5 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} {SITE.brand} Jaipur · {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}
