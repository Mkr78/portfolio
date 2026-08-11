import en from "@/content/en.json";
import fr from "@/content/fr.json";
import { type Locale, type PortfolioContent, type Project } from "@/lib/types";

export const contentByLocale: Record<Locale, PortfolioContent> = {
  fr: fr as PortfolioContent,
  en: en as PortfolioContent
};

export const defaultLocale: Locale = "fr";

export function getContent(locale: Locale = defaultLocale): PortfolioContent {
  return contentByLocale[locale] ?? contentByLocale[defaultLocale];
}

export function getProjects(locale: Locale = defaultLocale): Project[] {
  return getContent(locale).projects;
}

export function getProjectBySlug(
  slug: string,
  locale: Locale = defaultLocale
): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  const frSlugs = getProjects("fr").map((p) => p.slug);
  const enSlugs = getProjects("en").map((p) => p.slug);
  return Array.from(new Set([...frSlugs, ...enSlugs]));
}
