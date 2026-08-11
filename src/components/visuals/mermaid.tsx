"use client";

import { useEffect, useId, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "loose",
  theme: "dark"
});

export function MermaidDiagram({ chart }: { chart: string }) {
  const { theme } = useTheme();
  const [svg, setSvg] = useState<string>("");
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const render = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: theme === "light" ? "default" : "dark"
        });
        const { svg } = await mermaid.render(`mermaid-${id}`, chart);
        setSvg(svg);
      } catch (error) {
        console.error("Mermaid render error", error);
      }
    };
    render();
  }, [chart, id, theme]);

  if (!chart) return null;

  return (
    <div
      className="overflow-x-auto rounded-xl bg-black/60 p-3 text-white"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
