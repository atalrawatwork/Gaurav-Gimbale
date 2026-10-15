import { SITE } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/packages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/calculator", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];
  return pages.map((p) => ({ url: `${SITE.url}${p.path}`, lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority }));
}
