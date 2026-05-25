import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

interface OCRTMonitorProps {
  children: React.ReactNode;
}

export const OCRTMonitor: React.FC<OCRTMonitorProps> = ({ children }) => {
  const t = useTheme();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 my-8 font-mono">
      {/* MAIN TERMINAL WINDOW FRAME:
        Gaya fisik CRT bulky abu-abu dibuang, diganti dengan frame terminal "skeek" futuristik 
        yang menyatu dengan web, menggunakan lebar layar penuh untuk kenyamanan UX desktop.
      */}
      <div 
        style={{ 
          backgroundColor: `${t.bg}dd`, 
          borderColor: `${t.primary}15`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${t.primary}03`
        }} 
        className="border-2 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-[var(--color-primary)]/40 relative group flex flex-col"
      >
        
        {/* ================= SCREEN EFFECTS LAYER ================= */}
        {/* Garis Scanlines Super Halus (Diperhalus opasitasnya agar mata tidak lelah) */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-40 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(0,0,0,0.08)_3px,rgba(0,0,0,0.08)_4px)]" />
        
        {/* Efek Ambient Glow Halus di Tengah Layar */}
        <div 
          style={{ background: `radial-gradient(circle at 50% 30%, ${t.primary}08 0%, transparent 80%)` }} 
          className="absolute inset-0 z-20 pointer-events-none" 
        />
        
        {/* Efek Vignette Kaca Melengkung Ringan di Sudut */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_75%,rgba(0,0,0,0.3)_100%)]" />


        {/* ================= WINDOW HEADER BAR ================= */}
        {/* Menggunakan gaya window top bar ala OS/Mac tetapi dengan nuansa retro */}
        <div className="bg-[var(--color-dim)]/15 px-4 py-3 flex justify-between items-center border-b border-[var(--color-dim)]/20 relative z-30 select-none">
          {/* Fake Window Controls (Bulat Retro) */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: t.danger }} />
            <span className="w-3 h-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: t.secondary }} />
            <span className="w-3 h-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: t.accent }} />
          </div>
          
          {/* Center Title / Current Session Status */}
          <div className="text-[0.78rem] text-[var(--color-white)]/40 tracking-[0.15em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: t.accent }} />
            CORE_SYSTEM_INTERFACE // NODE_2026
          </div>
          
          {/* Terminal Code ID */}
          <div className="text-[0.7rem] text-[var(--color-primary)]/40 hidden sm:block tracking-widest">
            SYS.TERM_v4.2
          </div>
        </div>


        {/* ================= CONTENT AREA ================= */}
        {/* Memberikan ruang padding yang jauh lebih lega dan fleksibel tanpa max-w rigid */}
        <div className="relative z-30 flex-1 p-1 sm:p-3 md:p-5">
          
          {/* Dekorasi Sudut Siku Militer/Sci-Fi HUD */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[var(--color-dim)]/10 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[var(--color-dim)]/10 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[var(--color-dim)]/10 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[var(--color-dim)]/10 pointer-events-none" />
          
          {/* Render Komponen Child (File Explorer, About, dll) */}
          <div className="w-full h-full overflow-hidden rounded-sm">
            {children}
          </div>
        </div>


        {/* ================= WINDOW FOOTER BAR ================= */}
        {/* Menambahkan bar status bawah yang kental dengan nuansa retro cyberpunk */}
        <div className="border-t border-[var(--color-dim)]/10 px-4 py-2 bg-[var(--color-dim)]/5 flex justify-between items-center text-[0.7rem] text-[var(--color-gray)]/40 relative z-30 font-mono select-none">
          <div className="flex items-center gap-4">
            <span>STATUS: <span className="text-[var(--color-accent)] font-bold opacity-80 animate-pulse">ONLINE</span></span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline uppercase tracking-widest">Protocol: SECURE_SHELL [SSH]</span>
          </div>
          <div className="text-[var(--color-primary)]/50 text-[0.68rem] tracking-wider hidden sm:block">
            [ Escape_Matrix: Abort ]
          </div>
        </div>

      </div>
    </div>
  );
};