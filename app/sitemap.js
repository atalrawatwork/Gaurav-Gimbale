import { SITE, PHOTOS } from "@/lib/site";

// Update this date when you meaningfully change the site content.
const LAST_UPDATED = new Date("2026-10-15");

export default function sitemap() {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly", images: PHOTOS.slice(0, 5).map((p) => `${SITE.url}${p.src}`) },
    { path: "/packages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/calculator", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];
  return pages.map(({ path, ...rest }) => ({ url: `${SITE.url}${path}`, lastModified: LAST_UPDATED, ...rest }));
}
