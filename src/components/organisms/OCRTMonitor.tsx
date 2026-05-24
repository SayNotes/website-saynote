import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

interface OCRTMonitorProps {
  children: React.ReactNode;
}

export const OCRTMonitor: React.FC<OCRTMonitorProps> = ({ children }) => {
  const t = useTheme();
  const [ledOn, setLedOn] = useState(true);

  // Efek LED berkedip (Hanya dipakai untuk Desktop View)
  useEffect(() => {
    const iv = setInterval(() => setLedOn(v => !v), 2800);
    return () => clearInterval(iv);
  }, []);

  // Efek Overlay Kaca Layar (Scanlines, Glare, Radial Glow)
  // Dipisahkan agar bisa dipakai di Desktop maupun Mobile untuk konsistensi estetika retro
  const ScreenEffects = () => (
    <>
      {/* Garis-garis Scanlines */}
      <div className="absolute inset-0 z-11 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(0,0,0,0.06)_3px,rgba(0,0,0,0.06)_4px)]" />
      {/* Efek Radial Vignette (Sudut Gelap) */}
      <div className="absolute inset-0 z-12 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,transparent_60%,rgba(0,0,0,0.5)_100%)]" />
      {/* Pantulan Cahaya Atas */}
      <div className="absolute top-0 left-0 w-[50%] h-[30%] z-13 pointer-events-none bg-gradient-to-br from-white/[0.04] to-transparent rounded-br-[50%]" />
      {/* Glow Warna Tema */}
      <div style={{ background: `radial-gradient(ellipse at 50% 40%, ${t.primary}07 0%, transparent 70%)` }} className="absolute inset-0 z-10 pointer-events-none" />
    </>
  );

  return (
    <>
      {/* --- MOBILE VIEW (block di bawah md:, hidden di md: ke atas) --- */}
      {/* Tampilan Sleek: Tanpa Casing Komputer, Hanya Bingkai Kaca Layar */}
      <div className="block md:hidden w-full relative group">
        <div 
          style={{ background: t.bg }} 
          className="relative rounded-lg overflow-hidden border border-[var(--color-dim)]/20 shadow-2xl w-full"
        >
          {/* Terapkan Efek Kaca Layar agar tetap terasa retro tapi sleek */}
          <ScreenEffects />
          
          {/* Isi Konten (File Explorer) */}
          <div className="relative z-10 p-0.5">{children}</div>
        </div>
      </div>


      {/* --- DESKTOP VIEW (hidden di bawah md:, flex di md: ke atas) --- */}
      {/* Tampilan Bulky: Visual Fisik Komputer Tabung Retro Lengkap */}
      <div className="hidden md:flex flex-col items-center select-none w-full">
        
        {/* OUTER CASING */}
        <div className="w-full max-w-[780px] bg-gradient-to-br from-[#d6cfc2] via-[#c4baa8] to-[#b0a590] rounded-t-[18px] rounded-b-[10px] pt-[22px] px-[26px] pb-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.7),0_6px_18px_rgba(0,0,0,0.5),inset_0_3px_6px_rgba(255,255,255,0.35),inset_0_-3px_6px_rgba(0,0,0,0.25)] relative">
          
          {/* SCREEN BEZEL */}
          <div className="bg-gradient-to-br from-[#1c1c1a] to-[#111110] rounded-t-[10px] rounded-b-[6px] pt-3.5 px-3.5 pb-2.5 shadow-[inset_0_6px_24px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(0,0,0,0.8),0_0_0_1px_#0a0a08,0_2px_8px_rgba(0,0,0,0.6)]">
            
            {/* SCREEN GLASS (Desktop: with perspective & rotation) */}
            <div style={{ background: t.bg }} className="relative rounded-[6px] overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] [transform:perspective(900px)_rotateX(0.6deg)]">
              <ScreenEffects />
              <div className="relative z-10 p-0.5">{children}</div>
            </div>
          </div>

          {/* BOTTOM CONTROL BAR */}
          <div className="flex items-center mt-3 px-1.5 gap-2.5">
            {/* Power Button */}
            <div className="w-5.5 h-5.5 rounded-full bg-gradient-to-br from-[#a09080] to-[#786858] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer shrink-0">
              <div 
                style={{ 
                  backgroundColor: ledOn ? t.primary : `${t.primary}44`,
                  boxShadow: ledOn ? `0 0 6px ${t.primary}, 0 0 12px ${t.primary}88` : "none" 
                }} 
                className="w-2.5 h-2.5 rounded-full transition-all duration-400"
              />
            </div>
            <div className="text-[0.7rem] text-[#5a4e3e]/70 tracking-[0.25em] [text-shadow:0_1px_0_rgba(255,255,255,0.15)]">RETRO·TECH</div>
            <div className="flex-1" />
            {[0, 1, 2].map(i => (
              <div key={i} className={`rounded-full bg-gradient-to-br from-[#9a8878] to-[#6e5e50] shadow-[inset_0_2px_3px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.18)] ${i === 0 ? "w-4.5 h-4.5" : "w-3.5 h-3.5"}`} />
            ))}
            <div className="text-[0.6rem] text-[#5a4e3e]/45 tracking-widest">RT-2400</div>
          </div>
        </div>

        {/* NECK & BASE PLATE */}
        <div className="w-[160px] h-[28px] bg-gradient-to-b from-[#b0a590] to-[#9a8c7a] [clip-path:polygon(12%_0%,88%_0%,78%_100%,22%_100%)] shadow-[0_4px_12px_rgba(0,0,0,0.4)]" />
        <div className="w-[320px] h-[22px] bg-gradient-to-b from-[#a09282] to-[#8a7c6c] rounded-b-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.12)]" />
        <div className="w-[260px] h-2 bg-[radial-gradient(ellipse,rgba(0,0,0,0.4)_0%,transparent_70%)] mt-0.5" />
      </div>
    </>
  );
};