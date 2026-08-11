"use client";

import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

export function BlogSection() {
  const { content } = useLanguage();
  const blog = content.blog;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-orange-500/20" />
        <div>
          <p className="text-sm font-semibold text-white">{blog.title}</p>
          <p className="text-sm text-white/60">{blog.subtitle}</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {blog.posts.map((post) => (
          <Card key={post.slug}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
              <BookOpen size={14} /> {post.readingTime} · {post.status}
            </div>
            <h3 className="mt-3 text-base font-semibold text-white">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-white/70">{post.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.topics.map((topic) => (
                <Badge key={topic} className="bg-white/5 text-white/70">
                  {topic}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
