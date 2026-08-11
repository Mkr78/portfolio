'use client';

import { ProjectsGrid } from "@/components/sections/projects-grid";
import { OpenDataSection } from "@/components/sections/open-data";
import { useLanguage } from "@/contexts/language-context";

export default function ProjectsPage() {
  const { content } = useLanguage();

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {content.navigation.projects}
        </p>
        <h1 className="text-3xl font-semibold text-white">
          {content.hero.title}
        </h1>
        <p className="text-white/60">{content.hero.subtitle}</p>
      </div>
      <ProjectsGrid />
      <OpenDataSection />
    </div>
  );
}
