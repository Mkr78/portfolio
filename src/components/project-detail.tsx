"use client";

import Link from "next/link";
import { ExternalLink, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";
import { MermaidDiagram } from "@/components/visuals/mermaid";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export function ProjectDetail({ project }: { project: Project }) {
  const { locale } = useLanguage();
  const labels =
    locale === "fr"
      ? {
          problem: "Problème",
          solution: "Solution",
          architecture: "Architecture",
          diagram: "Diagramme (Mermaid)",
          stack: "Stack",
          highlights: "Highlights",
          results: "Résultats",
          learnings: "Ce que j’ai appris",
          security: "Sécurité"
        }
      : {
          problem: "Problem",
          solution: "Solution",
          architecture: "Architecture",
          diagram: "Diagram (Mermaid)",
          stack: "Stack",
          highlights: "Highlights",
          results: "Results",
          learnings: "What I learned",
          security: "Security"
        };

  return (
    <div className="space-y-6">
      {project.image && (
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.image.src}
            alt={project.image.alt ?? project.title}
            width={1200}
            height={640}
            className="h-64 w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-wrap items-center gap-3">
        <Badge glow>{project.type}</Badge>
        <span className="text-xs text-white/60">{project.status}</span>
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-white">{project.title}</h1>
        <p className="text-lg text-white/70">{project.tagline}</p>
        <p className="text-sm text-white/70">{project.summary}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} className="border-white/5 bg-white/5 text-white/70">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <InfoBlock title={labels.problem} text={project.problem} />
        <InfoBlock title={labels.solution} text={project.solution} />
        <InfoBlock title={labels.architecture} text={project.architecture} />
      </div>
      {project.diagram && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="mb-2 text-sm font-semibold text-white">
            {labels.diagram}
          </p>
          <MermaidDiagram chart={project.diagram} />
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        <ListBlock title={labels.stack} items={project.stack} />
        <ListBlock title={labels.highlights} items={project.highlights} />
        <ListBlock title={labels.results} items={project.results} />
        <ListBlock title={labels.learnings} items={project.learnings} />
      </div>
      {project.security && (
        <ListBlock
          title={labels.security}
          icon={<Shield size={14} />}
          items={project.security}
        />
      )}
      {project.links && (
        <div className="flex flex-wrap gap-2">
          {project.links.repo && (
            <Link href={project.links.repo} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                Repo <ExternalLink size={14} />
              </Button>
            </Link>
          )}
          {project.links.demo && (
            <Link href={project.links.demo} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                Demo <ExternalLink size={14} />
              </Button>
            </Link>
          )}
          {project.links.doc && (
            <Link href={project.links.doc} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                Doc <ExternalLink size={14} />
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-widest text-white/50">{title}</p>
      <p className="mt-2 text-sm text-white/80">{text}</p>
    </div>
  );
}

function ListBlock({
  title,
  items,
  icon
}: {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
        {icon}
        {title}
      </p>
      <ul className="mt-2 space-y-2 text-sm text-white/80">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
