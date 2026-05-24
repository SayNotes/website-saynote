import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useVisible } from "../../hooks/useVisible";
import { useTypewriter } from "../../hooks/useTypewriter";
import { MTermLine } from "../molecules/MTermLine";
import { ADivider } from "../atoms/ADivider";
import { MStatCard } from "../molecules/MStatCard";
import { ACursor } from "../atoms/ACursor";

export const OAboutSection: React.FC = () => {
  const t = useTheme();
  const { ref, visible } = useVisible(0.15);
  const { displayed } = useTypewriter(
    "Hello, World! I am a passionate full-stack developer who crafts elegant solutions to complex problems. With 6+ years of experience, I specialize in scalable web applications, distributed systems, and polished user interfaces. I thrive at the intersection of performance and design — writing code that is both fast and beautiful.",
    18, 300, visible
  );

  return (
    <section ref={ref as React.RefObject<HTMLParagraphElement>} className="py-16 px-8">
      <MTermLine prompt="C:\>" command="cat about.txt" />
      <ADivider />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-start">
        <div className="border border-[var(--color-dim)]/25 p-6 bg-[var(--color-bg-panel)] shadow-[inset_0_0_30px_rgba(var(--color-primary),0.02)]">
          <div className="text-[var(--color-secondary)]/50 mb-3 text-[0.88rem]">
            ┌─[ ABOUT.TXT ]──────────────────────────────┐
          </div>
          <p className="text-[var(--color-white)]/60 text-[1rem] leading-loose">
            {displayed}<ACursor char="▋" />
          </p>
          <div className="text-[var(--color-secondary)]/50 mt-3 text-[0.88rem]">
            └────────────────────────────────────────────┘
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { label: "EXPERIENCE", value: "6+ YRS", color: t.primary },
            { label: "PROJECTS", value: "50+ BUILT", color: t.secondary },
            { label: "COMMITS", value: "4.2K+", color: t.accent },
            { label: "COFFEE", value: "∞ CUPS", color: `${t.primary}bb` },
          ].map(s => <MStatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
};