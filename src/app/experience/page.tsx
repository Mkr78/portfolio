"use client";

import { ExperienceSection } from "@/components/sections/experience";
import { useLanguage } from "@/contexts/language-context";

export default function ExperiencePage() {
  const { content, locale } = useLanguage();
  const subtitle =
    locale === "fr"
      ? "Intégration API, pipelines data/IA, automatisations, garde-fous sécurité, optimisation perf."
      : "API integration, data/AI pipelines, automation, security guardrails, performance tuning.";

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {content.navigation.experience}
        </p>
        <h1 className="text-3xl font-semibold text-white">
          {content.experience.title}
        </h1>
        <p className="text-white/70">{subtitle}</p>
      </div>
      <ExperienceSection />
    </div>
  );
}
