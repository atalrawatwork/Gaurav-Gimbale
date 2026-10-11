import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, PACKAGES } from "@/lib/data";

export default function Home() {
  // Structured data (JSON-LD) → helps Google show a rich local-business result.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Photographer",
    name: `${SITE.brand} Jaipur`,
    founder: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    description: SITE.description,
    priceRange: "₹2,000 – ₹40,000",
    openingHours: "Mo-Su 09:30-20:30",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Goner Road, Machi ki Pipli",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [SITE.instagram, SITE.facebook],
    makesOffer: PACKAGES.map((p) => ({ "@type": "Offer", name: p.name, price: p.price.replace(/[^\d]/g, ""), priceCurrency: "INR" })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
