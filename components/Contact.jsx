import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import { SITE } from "@/lib/data";

/** Contact details are hard-coded from lib/data.js (SITE). */
export default function Contact() {
  const items = [
    { icon: Phone, label: "Mobile", value: SITE.phone, href: SITE.phoneHref },
    { icon: MapPin, label: "Studio address", value: SITE.address, href: SITE.mapsHref },
    { icon: Clock, label: "Timing", value: "9:30 AM – 8:30 PM (daily)" },
  ];

  return (
    <section id="contact" className="bg-ink-900 py-24 lg:py-32" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 id="contact-title" className="section-title mt-3">Let&apos;s create something beautiful</h2>
          <p className="mt-5 max-w-md text-cream/70">
            Planning a wedding, pre-wedding, candid shoot or a trip photoshoot in Jaipur? Message me on WhatsApp
            for the fastest reply, or fill in the form.
          </p>

          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>

          <address className="mt-10 space-y-5 not-italic">
            <p className="font-display text-2xl text-cream">{SITE.name}</p>
            {items.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="rounded-full border border-ink-600 p-3 text-gold-400"><Icon size={18} /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-cream/50">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-cream hover:text-gold-300">{value}</a>
                  ) : (
                    <p className="text-cream">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </address>

          <div className="mt-8 flex gap-3">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-ink-600 p-3 text-cream transition hover:border-blush-400 hover:text-blush-400">
              <Instagram size={20} />
            </a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-ink-600 p-3 text-cream transition hover:border-gold-400 hover:text-gold-300">
              <Facebook size={20} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
