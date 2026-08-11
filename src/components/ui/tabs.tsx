"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  initial?: string;
  onChange?: (tab: string) => void;
  className?: string;
};

export function Tabs({ tabs, initial, onChange, className }: TabsProps) {
  const [active, setActive] = useState(initial ?? tabs[0]?.id);

  const handleChange = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            onClick={() => handleChange(tab.id)}
            className={cn(
              "relative overflow-hidden rounded-full border px-4 py-2 text-sm transition-colors",
              isActive
                ? "border-cyan-400/70 bg-cyan-400/10 text-white"
                : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="tab-pill"
                className="absolute inset-0 bg-cyan-400/10"
                transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
