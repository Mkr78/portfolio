'use client';

import { AboutSection } from "@/components/sections/about";
import { AcademicSection } from "@/components/sections/academic";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { OpenDataSection } from "@/components/sections/open-data";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AcademicSection />
      <OpenDataSection />
      <ContactSection />
    </div>
  );
}
