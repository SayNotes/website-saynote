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
    <section ref={ref as React.RefObject<HTMLElement>} className="py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* Header Terminal Command */}
      <MTermLine prompt="C:\>" command="cat about.txt" />
      <ADivider />
      
      {/* Grid Wrapper: Mobile First (Stack kebawah), Desktop (Side-by-side) */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-start">
        
        {/* WINDOW TERMINAL BOX */}
        <div className="w-full border border-[var(--color-dim)]/25 overflow-hidden bg-[var(--color-bg-panel)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm">
          
          {/* Top Window Bar */}
          <div className="bg-[var(--color-dim)]/10 px-4 py-2.5 flex justify-between items-center border-b border-[var(--color-dim)]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full opacity-60" style={{ backgroundColor: t.danger }} />
              <span className="w-2.5 h-2.5 rounded-full opacity-60" style={{ backgroundColor: t.secondary }} />
              <span className="w-2.5 h-2.5 rounded-full opacity-60" style={{ backgroundColor: t.accent }} />
              <span className="text-[var(--color-secondary)]/70 text-[0.75rem] font-mono ml-2 tracking-wide hidden sm:inline">
                system@retro-dev: ~/about.txt
              </span>
            </div>
            <span className="text-[var(--color-gray)]/40 text-[0.8rem] font-mono select-none">ASCII_TXT</span>
          </div>

          {/* Isi Konten Text Editor */}
          <div className="p-5 md:p-6 font-mono relative">
            {/* Dekorasi Garis Samping ala Code Editor */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-secondary)]/10" />
            
            <p className="text-[var(--color-white)]/85 text-[0.95rem] md:text-[1rem] leading-relaxed md:leading-loose text-justify whitespace-pre-wrap pl-2">
              {displayed}
              <ACursor char="▋" />
            </p>
          </div>

          {/* Window Footer Status */}
          <div className="bg-[var(--color-dim)]/5 px-4 py-1.5 flex justify-end items-center border-t border-[var(--color-dim)]/10 text-[0.75rem] text-[var(--color-gray)]/40 font-mono">
            <span>UTF-8 | LN 1, COL {displayed.length}</span>
          </div>
        </div>

        {/* STATS INTERACTIVE CARDS */}
        {/* Mobile: Grid 2 Kolom | Desktop: 1 Kolom Vertikal */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full">
          {[
            { label: "EXPERIENCE", value: "6+ YRS", color: t.primary },
            { label: "PROJECTS", value: "50+ BUILT", color: t.secondary },
            { label: "COMMITS", value: "4.2K+", color: t.accent },
            { label: "COFFEE", value: "∞ CUPS", color: `${t.primary}bb` },
          ].map(s => (
            <div 
              key={s.label} 
              className="transform hover:-translate-y-0.5 transition-transform duration-200"
            >
              <MStatCard {...s} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};