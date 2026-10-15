import { SITE, SLOTS, FAQS, hasRealInstagram } from "./site";

const abs = (p) => `${SITE.url}${p}`;

/** Per-page metadata helper: title, description, canonical, Open Graph, Twitter. */
export function pageMeta({ title, description, path, keywords }) {
  const url = abs(path);
  // `title` may be a string (gets the "| Gaurav Gimbal" template) or { absolute } (used as-is, e.g. home).
  const full = typeof title === "string" ? `${title} | ${SITE.name}` : title.absolute;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE.name,
      title: full,
      description,
      images: [{ url: abs("/og-image.jpg"), width: 1200, height: 630, type: "image/jpeg", alt: "Gaurav Gimbal, Jaipur photographer with a Canon camera" }],
    },
    twitter: { card: "summary_large_image", title: full, description, images: [abs("/og-image.jpg")] },
  };
}

export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": abs("/#business"),
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  image: abs("/og-image.jpg"),
  logo: abs("/icon-512.png"),
  founder: { "@type": "Person", name: "Gaurav Gimbal", jobTitle: "Photographer and videographer", image: abs("/images/hero-gaurav.jpg"), worksFor: { "@id": abs("/#business") } },
  description:
    "Gimbal photographer and reels creator in Jaipur. Sunrise and sunset photoshoot slots from ₹1,000 at Hawa Mahal, Amer Fort, Nahargarh, Jal Mahal and more.",
  telephone: "+916375393310",
  priceRange: "₹1,000 - ₹3,000",
  currenciesAccepted: "INR",
  address: { "@type": "PostalAddress", addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: SITE.country },
  areaServed: { "@type": "City", name: SITE.city },
  knowsAbout: ["Reels shoot", "Gimbal videography", "Pre-wedding photography", "Wedding photography", "Tourist photography Jaipur"],
  ...(hasRealInstagram ? { sameAs: [SITE.instagram] } : {}),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": abs("/#website"),
  url: SITE.url,
  name: SITE.name,
  inLanguage: "en-IN",
  publisher: { "@id": abs("/#business") },
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

export const faqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const offersSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reels and photo shoot slots in Jaipur",
  provider: { "@id": abs("/#business") },
  areaServed: { "@type": "City", name: SITE.city },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gaurav Gimbal shoot packages",
    itemListElement: Object.values(SLOTS).map((s) => ({
      "@type": "Offer",
      name: `${s.name} (${s.time})`,
      price: s.base,
      priceCurrency: "INR",
      url: abs("/packages"),
      description: s.locations.length ? `Locations: ${s.locations.join(", ")}. ${s.note}.` : s.note,
    })),
  },
});
