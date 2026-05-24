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