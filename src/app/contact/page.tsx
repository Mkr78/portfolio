'use client';

import { ContactSection } from "@/components/sections/contact";
import { useLanguage } from "@/contexts/language-context";

export default function ContactPage() {
  const { content } = useLanguage();
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {content.navigation.contact}
        </p>
        <h1 className="text-3xl font-semibold text-white">{content.contact.title}</h1>
        <p className="text-white/70">{content.contact.subtitle}</p>
      </div>
      <ContactSection />
    </div>
  );
}
