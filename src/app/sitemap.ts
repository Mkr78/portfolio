import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";

const base = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/skills", "/experience", "/contact", "/about"].map(
    (path) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7
    })
  );

  const projects = getAllProjectSlugs().map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...routes, ...projects];
}
