import React, { useState, useEffect } from "react";
import { THEMES } from "../../context/ThemeContext";
import { AScanlines } from "../atoms/AScanlines";

interface OBootSequenceProps {
  onDone: () => void;
  themeId: string;
}

export const OBootSequence: React.FC<OBootSequenceProps> = ({ onDone, themeId }) => {
  const t = THEMES[themeId] || THEMES.ROSE;
  const [lines, setLines] = useState<Array<{ text: string; color?: string }>>([]);
  const [progress, setProgress] = useState(0);
  const [showProg, setShowProg] = useState(false);

  // Tambahkan warna spesifik untuk beberapa teks, sisanya akan pakai fallback
  const BOOT = [
    { text: "SOFT-BIOS v1.0 — SAYNOTE", delay: 0 },
    { text: `Loading color palette: ${t.label} ✦`, delay: 400, color: t.primary },
    { text: "Memory check: ················ OK", delay: 750 },
    { text: "Loading PORTFOLIO.SYS ········ OK", delay: 1100 },
    { text: "Mounting /dev/creativity ····· OK", delay: 1400 },
    { text: "", delay: 1700 },
    { text: `✦ Welcome — ${t.desc}`, delay: 1800, color: t.accent },
    { text: "", delay: 1900 },
  ];

  useEffect(() => {
    setLines([]);
    setProgress(0);
    setShowProg(false);
    
    const timers = BOOT.map(({ text, delay, color: c }) =>
      setTimeout(() => setLines(prev => [...prev, { text, color: c }]), delay)
    );
    
    const t1 = setTimeout(() => setShowProg(true), 2100);
    const t2 = setTimeout(() => {
      let v = 0;
      const iv = setInterval(() => {
        v += 3;
        setProgress(v);
        if (v >= 100) {
          clearInterval(iv);
          setTimeout(onDone, 350);
        }
      }, 18);
    }, 2100);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [themeId, t, onDone]);

  return (
    <div style={{ background: t.bg }} className="min-h-screen flex items-center justify-center animate-flicker">
      <AScanlines />
      <div className="w-[min(600px,92vw)] p-8">
        {lines.map((ln, i) => (
          <div 
            key={i} 
            style={{ 
              // Jika tidak ada color dari array, gunakan warna dim dari JS
              color: ln.color || `${t.dim}cc`, 
              // Berikan shadow sesuai warnanya agar terlihat menyala
              textShadow: ln.color ? `0 0 8px ${ln.color}55` : `0 0 8px ${t.dim}55` 
            }} 
            className="animate-boot-slide text-[1.05rem] mb-1 font-mono"
          >
            {ln.text}
          </div>
        ))}
        
        {showProg && (
          <div className="mt-6">
            {/* Teks Loading */}
            <div 
              style={{ color: `${t.white}88` }} 
              className="text-[0.95rem] mb-1.5 font-mono"
            >
              Loading ···
            </div>
            
            {/* Track Progress Bar */}
            <div 
              style={{ backgroundColor: `${t.dim}44` }} 
              className="h-[3px] rounded-sm overflow-hidden"
            >
              {/* Fill Progress Bar */}
              <div 
                style={{ 
                  width: `${progress}%`,
                  backgroundColor: t.primary,
                  boxShadow: `0 0 10px ${t.primary}88`
                }} 
                className="h-full transition-[width] duration-75 linear rounded-sm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};