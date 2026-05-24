import React, { useState, useEffect, useRef } from "react";
import { THEMES, useTheme } from "../../context/ThemeContext";

interface AThemeSwitcherProps {
  current: string;
  onChange: (id: string) => void;
}

export const AThemeSwitcher: React.FC<AThemeSwitcherProps> = ({ current, onChange }) => {
  const t = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={ref} className="relative z-[500]">
      <button 
        onClick={() => setOpen(o => !o)}
        className={`text-[0.88rem] py-1 px-3 border cursor-pointer tracking-widest transition-all duration-120 ${open ? "bg-[var(--color-primary)]/10 border-[var(--color-primary)] text-[var(--color-primary)] shadow-[0_0_12px_rgba(var(--color-primary),0.15)]" : "bg-transparent border-[var(--color-dim)]/40 text-[var(--color-primary)]/60"}`}
      >
        ◈ THEME
      </button>
      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] bg-[var(--color-bg-panel)] border border-[var(--color-dim)]/30 p-2.5 min-w-[210px] shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_24px_rgba(var(--color-primary),0.08)] animate-theme-in">
          <div className="text-[var(--color-gray)]/60 text-[0.72rem] tracking-widest mb-2 pb-1.5 border-b border-[var(--color-dim)]/20">
            COLOR_SCHEME
          </div>
          {Object.values(THEMES).map(th => {
            const active = th.id === current;
            return (
              <div 
                key={th.id} 
                onClick={() => { onChange(th.id); setOpen(false); }}
                className={`flex items-center gap-2.5 p-1.5 cursor-pointer mb-0.5 rounded-sm transition-all duration-75 ${active ? "bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20" : "border border-transparent"}`}
              >
                <span 
                  style={{ background: th.swatch, boxShadow: `0 0 6px ${th.swatch}88` }} 
                  className="w-3 h-3 rounded-full inline-block shrink-0"
                />
                <div>
                  <div 
                    style={{ color: active ? th.swatch : undefined }}
                    className={`text-[0.95rem] tracking-wide ${!active ? "text-[var(--color-white)]/80" : ""}`}
                  >
                    {th.label} {active && "✦"}
                  </div>
                  <div className="text-[var(--color-gray)]/50 text-[0.7rem]">{th.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};