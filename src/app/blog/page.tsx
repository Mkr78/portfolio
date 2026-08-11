'use client';

import { BlogSection } from "@/components/sections/blog";
import { useLanguage } from "@/contexts/language-context";

export default function BlogPage() {
  const { content } = useLanguage();
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {content.navigation.blog}
        </p>
        <h1 className="text-3xl font-semibold text-white">{content.blog.title}</h1>
        <p className="text-white/70">{content.blog.subtitle}</p>
      </div>
      <BlogSection />
    </div>
  );
}
