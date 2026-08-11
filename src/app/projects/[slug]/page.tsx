import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug, getContent } from "@/lib/content";
import { ProjectDetailShell } from "@/components/project-detail-shell";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug ?? "");
  if (!slug) return {};
  const project = getProjectBySlug(slug, "fr") ?? getProjectBySlug(slug, "en");
  if (!project) return {};
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    title: `${project.title} | Mahmoud Mohamed`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${site}/projects/${project.slug}`,
      type: "article"
    },
    alternates: { canonical: `/projects/${project.slug}` }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug ?? "");
  if (!slug) return notFound();
  const project = getProjectBySlug(slug, "fr") ?? getProjectBySlug(slug, "en");

  if (!project) return notFound();

  return (
    <div className="space-y-8">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
        {getContent("fr").navigation.projects}
      </p>
      <ProjectDetailShell slug={slug} fallback={project} />
    </div>
  );
}
