import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/destinations", priority: 0.9, changeFrequency: "weekly" },
  { path: "/experiences", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/plan", priority: 0.7, changeFrequency: "monthly" },
];

const tourSlugs = [
  "sicilian-discovery",
  "paris-romance",
  "nashville-music-and-soul",
  "southern-charm-trail",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const tourEntries: MetadataRoute.Sitemap = tourSlugs.map((slug) => ({
    url: `${siteConfig.url}/tours/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...tourEntries];
}
