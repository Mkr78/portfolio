'use client';

import { SkillsSection } from "@/components/sections/skills";
import { useLanguage } from "@/contexts/language-context";

export default function SkillsPage() {
  const { content } = useLanguage();
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {content.navigation.skills}
        </p>
        <h1 className="text-3xl font-semibold text-white">
          {content.skills.title}
        </h1>
        <p className="text-white/70">
          {content.hero.highlight}
        </p>
      </div>
      <SkillsSection />
    </div>
  );
}
