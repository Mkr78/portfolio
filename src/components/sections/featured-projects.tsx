"use client";

import { ProjectCard } from "@/components/project-card";
import { useLanguage } from "@/contexts/language-context";

export function FeaturedProjects() {
  const { content, locale } = useLanguage();
  const projects =
    (content.featuredProjects
      .map((slug) => content.projects.find((p) => p.slug === slug))
      .filter(Boolean) as typeof content.projects) ?? [];

  const heading = locale === "fr" ? "Projets phares" : "Featured projects";
  const sub =
    locale === "fr"
      ? "Sélection courte orientée démo produit et architecture data/IA."
      : "Shortlist focused on product-grade demos and data/AI architecture.";

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-cyan-500/20" />
        <div>
          <p className="text-sm font-semibold text-white">{heading}</p>
          <p className="text-sm text-white/60">{sub}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project!.slug} project={project!} compact />
        ))}
      </div>
    </section>
  );
}
