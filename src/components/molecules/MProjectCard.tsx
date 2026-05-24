import React, { useState } from "react";
import { AGlow } from "../atoms/AGlow";
import { ABadge } from "../atoms/ABadge";
import { useTheme } from "../../context/ThemeContext";

interface MProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  year: string;
  status: string;
}

export const MProjectCard: React.FC<MProjectCardProps> = ({ title, desc, tech, year, status }) => {
  const t = useTheme();
  const [hov, setHov] = useState(false);
  const sc = status === "LIVE" ? t.primary : status === "BETA" ? t.accent : t.gray;

  return (
    <div 
      onMouseEnter={() => setHov(true)} 
      onMouseLeave={() => setHov(false)}
      className={`border p-[1.2rem] transition-all duration-150 relative overflow-hidden ${hov ? "border-[var(--color-primary)]/45 bg-[var(--color-primary)]/[0.02] shadow-[0_0_20px_rgba(var(--color-primary),0.08)]" : "border-[var(--color-dim)]/25 bg-transparent"}`}
    >
      {hov && <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />}
      <div className="flex justify-between items-baseline mb-2.5">
        <AGlow color={hov ? t.primary : `${t.white}cc`} size="1.1rem">{title}</AGlow>
        <span className="text-[var(--color-gray)]/40 text-[0.85rem]">{year}</span>
      </div>
      <p className="text-[var(--color-white)]/60 text-[0.9rem] leading-relaxed mb-3">{desc}</p>
      <div className="flex gap-1.5 flex-wrap">
        {tech.map(x => <ABadge key={x} color={t.secondary}>{x}</ABadge>)}
        <ABadge color={sc}>{status}</ABadge>
      </div>
    </div>
  );
};