'use client';

import { AboutSection } from "@/components/sections/about";
import { AcademicSection } from "@/components/sections/academic";
import { useLanguage } from "@/contexts/language-context";

export default function AboutPage() {
  const { content } = useLanguage();
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {content.navigation.about}
        </p>
        <h1 className="text-3xl font-semibold text-white">{content.about.title}</h1>
        <p className="text-white/70">{content.about.pitch}</p>
      </div>
      <AboutSection />
      <AcademicSection />
    </div>
  );
}
