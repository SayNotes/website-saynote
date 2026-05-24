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
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (item: string) => {
    if (active === item) return;
    
    setThreeDItem(item); // Pemicu efek spin koin 3D
    onNav(item);

    setTimeout(() => {
      setThreeDItem(null);
    }, 400);
  };

  return (
    <>
      {/* Kumpulan Animasi Efek Perspektif 3D */}
      <style>{`
        @keyframes spin-3d {
          0% { transform: rotateX(0deg); filter: brightness(1); }
          50% { transform: rotateX(90deg); filter: brightness(0.4); }
          100% { transform: rotateX(360deg); filter: brightness(1); }
        }

        .nav-3d-container {
          perspective: 1000px;
        }

        .nav-3d-item {
          transform-style: preserve-3d;
          transition: transform 0.1s ease;
        }

        .nav-3d-item.is-spinning {
          animation: spin-3d 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .nav-3d-item:hover:not(.is-spinning) {
          transform: translateZ(5px) rotateX(-5deg);
        }

        /* Animasi Transisi Lipat Kebawah (Fold-Down) Untuk Mobile Menu */
        .mobile-3d-wrapper {
          transform-origin: top center;
          opacity: 0;
          transform: rotateX(-90deg);
          transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.25s ease;
        }

        .menu-is-open .mobile-3d-wrapper {
          opacity: 1;
          transform: rotateX(0deg);
        }

        /* Delay beruntun biar jatuhnya estetik satu per satu */
        .mobile-3d-wrapper:nth-child(1) { transition-delay: 0.04s; }
        .mobile-3d-wrapper:nth-child(2) { transition-delay: 0.08s; }
        .mobile-3d-wrapper:nth-child(3) { transition-delay: 0.12s; }
        .mobile-3d-wrapper:nth-child(4) { transition-delay: 0.16s; }
        .mobile-3d-wrapper:nth-child(5) { transition-delay: 0.20s; }
      `}</style>

      {/* Mengubah layout terluar nav menjadi flex-col agar container dropdown tidak merusak baris utama */}
      <nav className="border-b border-[var(--color-dim)]/25 py-2.5 px-6 flex flex-col bg-[var(--color-bg-panel)]/90 sticky top-0 z-[200] backdrop-blur-md shadow-[0_2px_20px_rgba(var(--color-primary),0.04)]">
        
        {/* --- BARIS UTAMA (HEADER BAR) --- */}
        <div className="flex items-center justify-between w-full">
          {/* Sisi Kiri: Identitas Logo & Status */}
          <div className="flex items-center gap-4">
            <AGlow size="1.15rem"><span className="tracking-widest">PORTFOLIO.EXE</span></AGlow>
            <AStatus />
          </div>
          
          {/* Sisi Kanan (DESKTOP): Menu Horizontal Muncul via md:flex */}
          <div className="hidden md:flex items-center nav-3d-container gap-1">
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
            <span className="w-[1px] bg-[var(--color-dim)]/25 h-5 mx-3" />
            <AThemeSwitcher current={themeId} onChange={onThemeChange} />
          </div>

          {/* Sisi Kanan (MOBILE): Ikon Kontrol & Tombol Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <AThemeSwitcher current={themeId} onChange={onThemeChange} />
            
            {/* Tombol Hamburger dengan Animasi Transformasi Garis */}
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center gap-1 w-8 h-8 border border-[var(--color-dim)]/20 bg-[var(--color-dim)]/5 rounded cursor-pointer active:scale-95 transition-transform"
            >
              <span className={`w-4.5 h-0.5 bg-[var(--color-white)]/80 transition-all duration-200 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`w-4.5 h-0.5 bg-[var(--color-white)]/80 transition-all duration-150 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-4.5 h-0.5 bg-[var(--color-white)]/80 transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* --- BARIS KEDUA (MOBILE DROPDOWN MENU) --- */}
        <div className={`md:hidden nav-3d-container flex flex-col gap-1 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] mt-3 opacity-100 menu-is-open" : "max-h-0 opacity-0"
        }`}>
          {ITEMS.map((item) => (
            <div 
              key={item} 
              className="mobile-3d-wrapper w-full"
            >
              <div className={`nav-3d-item ${threeDItem === item ? "is-spinning" : ""}`}>
                <MNavItem 
                  label={item} 
                  active={active === item} 
                  onClick={() => {
                    handleNavClick(item);
                    setIsOpen(false);
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};