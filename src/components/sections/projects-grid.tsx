"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Tabs } from "@/components/ui/tabs";
import { ProjectDetail } from "@/components/project-detail";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

export function ProjectsGrid() {
  const { content, locale } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const tags = useMemo(() => {
    const unique = new Set<string>();
    content.projects.forEach((p) => p.tags.forEach((t) => unique.add(t)));
    return ["all", ...Array.from(unique)];
  }, [content.projects]);

  const filtered =
    filter === "all"
      ? content.projects
      : content.projects.filter((p) => p.tags.includes(filter));

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[color:var(--text)]">
            {content.navigation.projects}
          </p>
          <p className="text-sm text-[color:var(--muted)]">
            {locale === "fr"
              ? "Filtre rapide par tags : Big Data, IA, ML/DL, GenAI, Fullstack, DevOps, Sécurité."
              : "Quick filter by tags: Big Data, AI/ML/DL, GenAI, Fullstack, DevOps, Security."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>
            {content.projects.length} {locale === "fr" ? "projets" : "projects"}
          </Badge>
        </div>
      </div>
      <Tabs
        tabs={tags.map((tag) => ({
          id: tag,
          label: tag === "all" ? (locale === "fr" ? "Tous" : "All") : tag
        }))}
        initial="all"
        onChange={setFilter}
      />
      <div className="space-y-3">
        {filtered.map((project, idx) => {
          const isOpen = openSlug === project.slug;
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] shadow-[var(--shadow)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm text-[color:var(--text)] hover:bg-[color:var(--panel-strong)] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                onClick={() => setOpenSlug(isOpen ? null : project.slug)}
              >
                <span className="flex items-center gap-3">
                  {isOpen ? (
                    <ChevronDown size={16} className="text-cyan-500" />
                  ) : (
                    <ChevronRight size={16} className="text-cyan-500" />
                  )}
                  <span className="font-semibold">{project.title}</span>
                  <Badge>{project.type}</Badge>
                </span>
                <span className="text-xs text-[color:var(--muted)]">
                  {project.tags.slice(0, 3).join(" • ")}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-[color:var(--border)] bg-[color:var(--panel-strong)] p-4">
                  <ProjectDetail project={project} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
