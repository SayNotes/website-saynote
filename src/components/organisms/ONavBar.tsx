import React from "react";
import { AGlow } from "../atoms/AGlow";
import { AStatus } from "../atoms/AStatus";
import { MNavItem } from "../molecules/MNavItem";
import { AThemeSwitcher } from "../atoms/AThemeSwitcher";

interface ONavBarProps {
  active: string;
  onNav: (section: string) => void;
  themeId: string;
  onThemeChange: (id: string) => void;
}

export const ONavBar: React.FC<ONavBarProps> = ({ active, onNav, themeId, onThemeChange }) => {
  const ITEMS = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];
  return (
    <nav className="border-b border-[var(--color-dim)]/25 py-2.5 px-6 flex items-center justify-between bg-[var(--color-bg-panel)]/90 sticky top-0 z-[200] backdrop-blur-md shadow-[0_2px_20px_rgba(var(--color-primary),0.04)]">
      <div className="flex items-center gap-4">
        <AGlow size="1.15rem"><span className="tracking-widest">PORTFOLIO.EXE</span></AGlow>
        <AStatus />
      </div>
      <div className="flex items-center">
        {ITEMS.map(item => (
          <MNavItem key={item} label={item} active={active === item} onClick={() => onNav(item)} />
        ))}
        <span className="w-[1px] bg-[var(--color-dim)]/25 h-5 mx-2" />
        <AThemeSwitcher current={themeId} onChange={onThemeChange} />
      </div>
    </nav>
  );
};