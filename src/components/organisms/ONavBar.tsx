import React, { useState } from "react";
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
  const [threeDItem, setThreeDItem] = useState<string | null>(null);

  const handleNavClick = (item: string) => {
    if (active === item) return;
    
    setThreeDItem(item); // Pemicu efek 3D
    onNav(item);

    // Durasi animasi 3D diset selama 400ms
    setTimeout(() => {
      setThreeDItem(null);
    }, 400);
  };

  return (
    <>
      {/* Efek Animasi 3D Perspektif */}
      <style>{`
        @keyframes spin-3d {
          0% {
            transform: rotateX(0deg);
            filter: brightness(1);
          }
          50% {
            transform: rotateX(90deg);
            filter: brightness(0.4); /* Efek bayangan saat miring */
          }
          100% {
            transform: rotateX(360deg);
            filter: brightness(1);
          }
        }

        /* Container harus memiliki perspective agar efek 3D-nya terlihat nyata */
        .nav-3d-container {
          perspective: 1000px;
        }

        .nav-3d-item {
          transform-style: preserve-3d;
          transition: transform 0.1s ease;
        }

        /* Memicu putaran silinder 3D saat diklik */
        .nav-3d-item.is-spinning {
          animation: spin-3d 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Efek hover opsional: sedikit condong ke depan secara 3D saat disentuh mouse */
        .nav-3d-item:hover:not(.is-spinning) {
          transform: translateZ(5px) rotateX(-5deg);
        }
      `}</style>

      <nav className="border-b border-[var(--color-dim)]/25 py-2.5 px-6 flex items-center justify-between bg-[var(--color-bg-panel)]/90 sticky top-0 z-[200] backdrop-blur-md shadow-[0_2px_20px_rgba(var(--color-primary),0.04)]">
        <div className="flex items-center gap-4">
          <AGlow size="1.15rem"><span className="tracking-widest">PORTFOLIO.EXE</span></AGlow>
          <AStatus />
        </div>
        
        <div className="flex items-center nav-3d-container">
          {ITEMS.map(item => (
            <div 
              key={item} 
              className={`nav-3d-item ${threeDItem === item ? "is-spinning" : ""}`}
            >
              <MNavItem 
                label={item} 
                active={active === item} 
                onClick={() => handleNavClick(item)} 
              />
            </div>
          ))}
          <span className="w-[1px] bg-[var(--color-dim)]/25 h-5 mx-2" />
          <AThemeSwitcher current={themeId} onChange={onThemeChange} />
        </div>
      </nav>
    </>
  );
};