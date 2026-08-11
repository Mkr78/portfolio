"use client";

import { useLanguage } from "@/contexts/language-context";
import { ProjectDetail } from "@/components/project-detail";
import type { Project } from "@/lib/types";

export function ProjectDetailShell({
  slug,
  fallback
}: {
  slug: string;
  fallback: Project;
}) {
  const { content } = useLanguage();
  const project = content.projects.find((p) => p.slug === slug) ?? fallback;
  return <ProjectDetail project={project} />;
}
