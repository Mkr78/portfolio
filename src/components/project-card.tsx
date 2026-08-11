"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";
import { useLanguage } from "@/contexts/language-context";

type Props = {
  project: Project;
  onSelect?: (slug: string) => void;
  compact?: boolean;
};

export function ProjectCard({ project, onSelect, compact }: Props) {
  const { locale } = useLanguage();
  const cta =
    locale === "fr" ? (compact ? "Voir" : "Détails") : compact ? "View" : "Details";
  const securityLabel = locale === "fr" ? "Sécurité" : "Security";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black p-6 shadow-xl shadow-black/30">
        <div
          className="pointer-events-none absolute inset-0 opacity-30 blur-3xl transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(45,212,191,0.25), transparent 25%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.15), transparent 30%)"
          }}
        />
        <div className="relative z-10 flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl border border-white/5">
            {project.image ? (
              <Image
                src={project.image.src}
                alt={project.image.alt ?? project.title}
                width={800}
                height={450}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-40 w-full items-center justify-between bg-white/5 px-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {project.type}
                  </p>
                  <p className="text-sm font-semibold text-white">{project.title}</p>
                </div>
                <span className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-70" />
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge glow className="bg-white/10 text-cyan-100">
              {project.type}
            </Badge>
            {project.status && (
              <span className="text-xs text-white/60">{project.status}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-white/60">{project.tagline}</p>
          </div>
          <p className="text-sm text-white/70">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((tag) => (
              <Badge key={tag} className="border-white/5 bg-white/5 text-white/70">
                {tag}
              </Badge>
            ))}
          </div>
          {!compact && (
            <div className="flex flex-wrap gap-2 text-xs text-white/60">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/5 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          <div className="mt-auto flex items-center gap-3">
            {onSelect ? (
              <Button onClick={() => onSelect(project.slug)} className="text-sm">
                {cta} <ArrowUpRight size={16} />
              </Button>
            ) : (
              <Link href={`/projects/${project.slug}`}>
                <Button className="text-sm">
                  {cta} <ArrowUpRight size={16} />
                </Button>
              </Link>
            )}
            {project.security && project.security.length > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
                <Shield size={14} /> {securityLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
