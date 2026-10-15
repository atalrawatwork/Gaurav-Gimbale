# Gaurav Gimbal – Photography & Booking (Next.js 16, React 19, Tailwind CSS 4, App Router)

Pages: `/` Home · `/packages` Packages & Pricing · `/calculator` Live cost calculator + WhatsApp message generator · `/contact` Book & Contact

## Run (Node 20.9+)
```bash
npm install
cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL to your real domain
npm run dev                    # http://localhost:3000
npm run build && npm start     # production
```

## Change these first (all in `lib/site.js`)
- `SITE.instagram`: replace the placeholder with Gaurav's real Instagram link
- `SITE.whatsapp` / `SITE.phone`: currently 91 6375393310 (taken from your earlier project)
- Prices, locations, FAQs and gallery photos

## SEO included
- Unique `<title>` + meta description + canonical URL per page (`lib/seo.js → pageMeta`)
- Open Graph + Twitter card with `/og-image.jpg` (1200×630)
- JSON-LD: LocalBusiness/ProfessionalService, Person, WebSite, BreadcrumbList, Service + Offers (₹ prices), FAQPage
- `sitemap.xml`, `robots.txt`, web manifest, favicon (`app/icon.svg`) and Apple touch icon
- One `<h1>` per page, semantic header/nav/main/footer, keyword-rich image alt text, breadcrumbs, internal links
- `next/image` (AVIF/WebP, responsive sizes, priority hero), `next/font` (Fraunces + Manrope, swap), long-cache headers for images

## After deploying (Vercel recommended)
1. Set `NEXT_PUBLIC_SITE_URL` (and optional `NEXT_PUBLIC_GSC_VERIFICATION`) in project env vars.
2. Submit `https://your-domain/sitemap.xml` in Google Search Console.
3. Create and verify a Google Business Profile for "Gaurav Gimbal" (Jaipur) and link this site. This matters most for local "photographer in Jaipur" searches.
4. Add the real Instagram URL (it is then included in schema `sameAs` automatically).
