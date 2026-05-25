import React from "react";
import { AScanlines } from "../atoms/AScanlines";
import { ONavBar } from "../organisms/ONavBar";
import { AGlow } from "../atoms/AGlow";
import { AStatus } from "../atoms/AStatus";

interface TPageLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onNav: (section: string) => void;
  themeId: string;
  onThemeChange: (id: string) => void;
}

export const TPageLayout: React.FC<TPageLayoutProps> = ({ children, activeSection, onNav, themeId, onThemeChange }) => {
  return (
    <div className="bg-[var(--color-bg)] min-h-screen animate-flicker relative">
      
      {/* ── CUSTOM CYBERPUNK SCROLLBAR STYLES ── */}
      <style>{`
        /* Mendukung Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary) transparent;
        }

        /* Mendukung Chrome, Edge, Safari, dan Opera */
        *::-webkit-scrollbar {
          width: 6px;  /* Lebar scrollbar vertikal */
          height: 6px; /* Tinggi scrollbar horizontal */
        }

        /* Jalur rel tempat scrollbar bergeser */
        *::-webkit-scrollbar-track {
          background: transparent; 
        }

        /* Batang scrollbar utama */
        *::-webkit-scrollbar-thumb {
          background-color: var(--color-primary);
          opacity: 0.7;
          border-radius: 0px; /* Siku tajam khas retro HUD */
        }

        /* Batang scrollbar saat di-hover/ditunjuk mouse */
        *::-webkit-scrollbar-thumb:hover {
          background-color: var(--color-accent, var(--color-primary));
          box-shadow: 0 0 8px var(--color-primary);
        }
      `}</style>

      <AScanlines />
      <ONavBar active={activeSection} onNav={onNav} themeId={themeId} onThemeChange={onThemeChange} />
      
      <main className="max-w-[1140px] mx-auto px-2">
        {children}
      </main>
      
      <footer className="border-t border-[var(--color-dim)]/20 py-5 px-8 text-center text-[var(--color-gray)]/40 text-[0.82rem] bg-[var(--color-bg-panel)]/80">
        <span>PORTFOLIO.EXE v1.0.0&nbsp;&nbsp;|&nbsp;&nbsp;© 2026 RETRO-DEV&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <AGlow size="0.82rem">ALL SYSTEMS NOMINAL</AGlow>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <AStatus />
      </footer>
    </div>
  );
};