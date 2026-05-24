import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTypewriter } from "../../hooks/useTypewriter";
import { MMatrixColumn } from "../molecules/MMatrixColumn";
import { AGlow } from "../atoms/AGlow";
import { ACursor } from "../atoms/ACursor";
import { AButton } from "../atoms/AButton";

interface OHeroSectionProps {
  onNav: (section: string) => void;
}

export const OHeroSection: React.FC<OHeroSectionProps> = ({ onNav }) => {
  const t = useTheme();
  const cRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState<Array<{ x: number; speed: number }>>([]);
  const { displayed: l1, done: d1 } = useTypewriter("> HELLO, WORLD!", 70, 500);
  const { displayed: l2, done: d2 } = useTypewriter("> I AM A FULL-STACK DEVELOPER.", 50, 1700);
  const { displayed: l3 } = useTypewriter("> BUILDING DIGITAL EXPERIENCES SINCE 2018.", 40, 3200);

  const ASCII = `  ██╗  ██╗███████╗██╗     ██╗      ██████╗ \n  ██║  ██║██╔════╝██║     ██║     ██╔═══██╗\n  ███████║█████╗  ██║     ██║     ██║   ██║\n  ██╔══██║██╔══╝  ██║     ██║     ██║   ██║\n  ██║  ██║███████╗███████╗███████╗╚██████╔╝\n  ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝`;

  useEffect(() => {
    const w = cRef.current?.offsetWidth || 800;
    setCols(Array.from({ length: Math.floor(w / 24) }, (_, i) => ({ x: i * 24, speed: 5 + Math.random() * 8 })));
  }, []);

  return (
    <section className="py-12 px-8 min-h-[88vh] flex flex-col justify-center relative">
      <div ref={cRef} className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {cols.map((c, i) => <MMatrixColumn key={i} x={c.x} speed={c.speed} />)}
      </div>
      <pre className="text-[var(--color-primary)] text-[clamp(0.38rem,1.05vw,0.78rem)] leading-tight mb-10 drop-shadow-[0_0_12px_var(--color-primary)] animate-glow-soft z-10">
        {ASCII}
      </pre>
      <div className="z-10">
        <div className="text-[clamp(1rem,2.5vw,1.5rem)] mb-2.5">
          <AGlow color={t.accent} size="inherit">{l1}</AGlow>
          {!d1 && <ACursor color={t.accent} />}
        </div>
        <div className="text-[clamp(0.9rem,2vw,1.25rem)] mb-2.5">
          <AGlow size="inherit">{l2}</AGlow>
          {d1 && !d2 && <ACursor />}
        </div>
        <div className="text-[clamp(0.85rem,1.8vw,1.1rem)] text-[var(--color-white)]/60">
          {l3}{d2 && <ACursor color={`${t.white}99`} />}
        </div>
      </div>
      <div className="flex gap-4 mt-10 flex-wrap z-10">
        <AButton onClick={() => onNav("PROJECTS")}>[ VIEW_PROJECTS ]</AButton>
        <AButton onClick={() => onNav("CONTACT")} variant="alt">[ HIRE_ME.EXE ]</AButton>
      </div>
      <div className="mt-16 text-[var(--color-gray)]/45 text-[0.82rem] flex gap-8 flex-wrap z-10 border-t border-dashed border-[var(--color-dim)]/25 pt-4">
        {[["SYS", "ONLINE"], ["AVAIL", "FOR_HIRE"], ["LATENCY", "< 1ms"], ["UPTIME", "6+ YRS"]].map(([k, v]) => (
          <span key={k}>
            <span className="text-[var(--color-dim)]/60">{k}:</span>{" "}
            <span className="text-[var(--color-primary)]/75">{v}</span>
          </span>
        ))}
      </div>
    </section>
  );
};