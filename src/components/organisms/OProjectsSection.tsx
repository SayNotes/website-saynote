import React, { useState } from "react";
import { MTermLine } from "../molecules/MTermLine";
import { ADivider } from "../atoms/ADivider";
import { MProjectCard } from "../molecules/MProjectCard";

// Import Heroicons v2 resmi
import { 
  CommandLineIcon, 
  DocumentTextIcon, 
  BriefcaseIcon, 
  CodeBracketIcon,
  TrophyIcon,
  SparklesIcon,
  PhotoIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

export const OProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"PROJECTS" | "EXPERIENCE">("PROJECTS");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const PROJECTS = [
    { title: "NEXUS-PLATFORM", desc: "Enterprise SaaS for team collaboration — real-time editing, WebSocket presence, multi-tenant auth, and auto-scaling infra.", tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"], year: "2024", status: "LIVE" },
    { title: "ALGO-TRADER", desc: "ML-powered automated trading system with backtesting engine, risk management, and live market data integration via WebSocket.", tech: ["Python", "FastAPI", "TensorFlow", "ClickHouse"], year: "2024", status: "LIVE" },
    { title: "QUANTUM-CMS", desc: "Headless CMS with visual drag-and-drop page builder, GraphQL API, media CDN, and i18n support out of the box.", tech: ["React", "GraphQL", "Node.js", "MongoDB"], year: "2023", status: "BETA" },
    { title: "VOID-ANALYTICS", desc: "Privacy-first analytics platform — cookie-less tracking, GDPR compliant, funnel analysis, and real-time dashboards.", tech: ["Vue.js", "Go", "ClickHouse", "K8s"], year: "2023", status: "LIVE" },
  ];

  const EXPERIENCES = [
    { 
      period: "2024 - 2026", 
      role: "Senior Backend Engineer", 
      company: "Cyber Systems Corp", 
      summary: "Architected real-time data streaming pipeline handling millions of events daily. Mentored 4 junior developers and optimized database querying by 40%.",
      type: "work"
    },
    { 
      period: "2023", 
      role: "Competitive Chess Player (Podium Finish)", 
      company: "Campus Annual Chess Championship", 
      summary: "Applied game theory, complex pattern recognition, and tactical execution under intense Blitz/Rapid time controls. Secured top ranking placement.",
      type: "chess",
      certImg: "/images/chess-certificate.jpg" // Path gambar sertifikat (sesuaikan dengan direktorimu)
    },
    { 
      period: "2022 - 2024", 
      role: "Fullstack Developer", 
      company: "Delta Tech Labs", 
      summary: "Built and maintained 5 core responsive web applications using React and Node.js. Integrated secure payment gateways and OAuth third-party services.",
      type: "work"
    },
    { 
      period: "2021 - 2023", 
      role: "High-Tier Account Pilot & Grinder", 
      company: "Independent Gaming Service", 
      summary: "Optimized macro-strategy execution, account progression efficiency, and competitive MMR climbing for high-profile clients. Maintained 100% security and 95%+ win-rate benchmarks under tight deadlines.",
      type: "gaming"
    },
    { 
      period: "2020 - 2022", 
      role: "Junior Software Engineer", 
      company: "Apex Software Inc", 
      summary: "Developed UI components using Tailwind CSS and assisted in writing automated unit tests. Collaborated closely with UI/UX designers via Agile sprint methods.",
      type: "work"
    },
  ];

  return (
    <>
      {/* Injeksi CSS Glitch Scifi & Animasi Masuk */}
      <style>{`
        /* --- Glitch Effect CSS --- */
        .glitch-wrapper {
          animation: glitch-anim 0.2s linear infinite;
        }
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          z-index: -1;
        }
        .glitch-wrapper::before {
          background-color: rgba(0, 255, 255, 0.4);
          mix-blend-mode: screen;
          animation: glitch-anim-1 0.4s linear infinite alternate-reverse;
        }
        .glitch-wrapper::after {
          background-color: rgba(255, 0, 255, 0.4);
          mix-blend-mode: screen;
          animation: glitch-anim-2 0.3s linear infinite alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 1px) }
          40% { transform: translate(-1px, -1px) }
          60% { transform: translate(2px, 1px) }
          80% { transform: translate(1px, -1px) }
          100% { transform: translate(0) }
        }
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-4px, 2px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 2px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(2px, -2px); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(4px, -2px); }
          20% { clip-path: inset(30% 0 20% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(70% 0 10% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(20% 0 50% 0); transform: translate(-2px, 2px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -2px); }
          100% { clip-path: inset(5% 0 80% 0); transform: translate(-2px, 2px); }
        }
        .scanline {
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.3);
          position: absolute;
          animation: scanline 3s linear infinite;
          opacity: 0.5;
        }
        @keyframes scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        /* --- Entrance Animations (New) --- */
        @keyframes backdrop-fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-backdrop-fade {
          animation: backdrop-fade 0.3s ease-out forwards;
        }
        
        @keyframes crt-on {
          0% {
            transform: scale(0.8, 0.005);
            opacity: 0;
            filter: brightness(3);
          }
          30% {
            transform: scale(1, 0.01);
            opacity: 1;
            filter: brightness(2);
          }
          100% {
            transform: scale(1, 1);
            opacity: 1;
            filter: brightness(1);
          }
        }
        .animate-crt-on {
          animation: crt-on 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          transform-origin: center center;
        }
      `}</style>

      <section className="py-12 px-4 sm:px-8 max-w-5xl mx-auto font-mono select-none">
        {/* 1. Terminal Window Header Simulation */}
        <div className="flex items-center justify-between px-4 py-2 border border-[var(--color-dim)]/15 bg-[var(--color-dim)]/5 rounded-t-md text-xs text-[var(--color-gray)]/40 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40 inline-block"></span>
            <span className="ml-2 tracking-widest text-[0.65rem]">CORE_SYSTEM_v2.0.sh</span>
          </div>
          <div className="text-[var(--color-primary)]/50 text-[0.65rem] animate-pulse">● ONLINE</div>
        </div>

        <MTermLine 
          prompt="C:\>" 
          command={viewMode === "PROJECTS" ? "run projects.exe --all" : "cat history.log --verbose"} 
        />
        <ADivider />

        {/* 2. Refined Tab Switcher */}
        <div className="mt-8 mb-8 flex border-b border-[var(--color-dim)]/20 text-xs sm:text-sm">
          <button
            onClick={() => setViewMode("PROJECTS")}
            className={`px-5 py-3 border-t-2 border-x transition-all cursor-pointer tracking-widest font-bold flex items-center gap-2 relative top-[1px] ${
              viewMode === "PROJECTS"
                ? "border-t-[var(--color-primary)] border-x-[var(--color-dim)]/20 bg-[var(--color-bg)] text-[var(--color-primary)] z-10"
                : "border-t-transparent border-x-transparent text-[var(--color-gray)]/30 hover:text-[var(--color-gray)]/70 bg-transparent"
            }`}
          >
            <CommandLineIcon className="w-4 h-4 shrink-0" />
            <span>PROJECTS.EXE</span>
          </button>
          
          <button
            onClick={() => setViewMode("EXPERIENCE")}
            className={`px-5 py-3 border-t-2 border-x transition-all cursor-pointer tracking-widest font-bold flex items-center gap-2 relative top-[1px] ${
              viewMode === "EXPERIENCE"
                ? "border-t-[var(--color-primary)] border-x-[var(--color-dim)]/20 bg-[var(--color-bg)] text-[var(--color-primary)] z-10"
                : "border-t-transparent border-x-transparent text-[var(--color-gray)]/30 hover:text-[var(--color-gray)]/70 bg-transparent"
            }`}
          >
            <DocumentTextIcon className="w-4 h-4 shrink-0" />
            <span>HISTORY.LOG</span>
          </button>
        </div>

        {/* 3. Main Content Display */}
        {viewMode === "PROJECTS" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {PROJECTS.map((p, idx) => (
              <div key={p.title} className="relative flex flex-col group p-4 border border-dashed border-[var(--color-dim)]/10 hover:border-[var(--color-primary)]/30 rounded transition-all bg-[var(--color-dim)]/[0.01] hover:bg-[var(--color-dim)]/[0.03]">
                <div className="text-[0.65rem] text-[var(--color-gray)]/30 mb-2 tracking-widest group-hover:text-[var(--color-primary)]/50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CodeBracketIcon className="w-3.5 h-3.5 opacity-40" />
                    <span>SRC_FILE_NO_{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="text-[var(--color-gray)]/20">[{p.year}]</span>
                </div>
                <MProjectCard {...p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8 max-w-3xl pl-4 sm:pl-6 border-l border-[var(--color-dim)]/15 ml-3 sm:ml-4 animate-fadeIn relative">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative group pl-2">
                
                {/* Dynamic Icon Node */}
                <div className={`absolute -left-[27px] sm:-left-[35px] top-0.5 w-6 h-6 rounded-full border bg-[var(--color-bg)] transition-all flex items-center justify-center shadow-sm z-10 ${
                  exp.type === 'chess' 
                    ? 'border-yellow-500/40 text-yellow-500/50 group-hover:border-yellow-400 group-hover:text-yellow-400'
                    : exp.type === 'gaming'
                    ? 'border-cyan-500/40 text-cyan-500/50 group-hover:border-cyan-400 group-hover:text-cyan-400'
                    : 'border-[var(--color-dim)]/30 text-[var(--color-gray)]/35 group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-primary)]'
                }`}>
                  {exp.type === 'chess' && <TrophyIcon className="w-3.5 h-3.5" />}
                  {exp.type === 'gaming' && <SparklesIcon className="w-3.5 h-3.5" />}
                  {exp.type === 'work' && <BriefcaseIcon className="w-3.5 h-3.5" />}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-[0.85rem] mb-2">
                  <span className={`font-bold tracking-wider ${
                    exp.type === 'chess' ? 'text-yellow-500/70' : exp.type === 'gaming' ? 'text-cyan-500/70' : 'text-[var(--color-primary)]/70'
                  }`}>
                    [{exp.period}]
                  </span>
                  <span className="text-[var(--color-gray)]/85 font-semibold">
                    {exp.role}
                  </span>
                  <span className="text-[var(--color-gray)]/20 hidden sm:inline">|</span>
                  <span className="text-[var(--color-gray)]/50 italic text-[0.75rem] sm:text-[0.85rem]">
                    {exp.company}
                  </span>
                  
                  {/* Tombol Lihat Sertifikat Jika Ada */}
                  {exp.certImg && (
                    <button 
                      onClick={() => setSelectedCert(exp.certImg as string)}
                      className="mt-1 sm:mt-0 flex items-center gap-1 border border-yellow-500/40 text-yellow-500/70 px-2 py-0.5 rounded text-[0.65rem] hover:bg-yellow-500/10 hover:text-yellow-400 transition-all uppercase tracking-widest w-fit"
                    >
                      <PhotoIcon className="w-3 h-3" />
                      View_Decrypted_Cert
                    </button>
                  )}
                </div>
                
                <p className="text-[0.78rem] sm:text-[0.82rem] text-[var(--color-gray)]/45 leading-relaxed max-w-2xl">
                  {exp.summary}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* 4. System Footer */}
        <div className="mt-16 pt-4 border-t border-[var(--color-dim)]/10 flex justify-between text-[0.72rem] text-[var(--color-gray)]/25 tracking-wider">
          <span>STATUS: ACTIVE_NODE</span>
          <span>SYS_REF_2026</span>
        </div>
      </section>

      {/* 5. Modal Sertifikat Scifi Glitch */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-backdrop-fade"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative p-2 border-2 border-yellow-500/50 bg-black max-w-3xl w-full animate-crt-on shadow-[0_0_30px_rgba(234,179,8,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between border-b border-yellow-500/30 pb-2 mb-4 text-yellow-500 text-xs font-mono">
              <span className="animate-pulse">DECRYPTING_CERTIFICATE_DATA... [OK]</span>
              <button 
                onClick={() => setSelectedCert(null)}
                className="hover:text-red-500 hover:scale-110 transition-all"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Container Glitch Image */}
            <div className="relative w-full h-auto overflow-hidden glitch-wrapper bg-zinc-900 border border-[var(--color-dim)]/30 rounded">
              <div className="scanline"></div>
              {/* Gunakan gambar dummy jika path gagal untuk testing */}
              <img 
                src={selectedCert} 
                alt="Certificate" 
                className="w-full h-auto object-cover opacity-90 mix-blend-lighten"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/1a1a1a/eab308?text=CERTIFICATE_DATA_MISSING';
                }}
              />
            </div>
            
            {/* Footer Modal */}
            <div className="mt-2 text-[0.65rem] text-yellow-500/50 flex justify-between font-mono">
              <span>SECURITY_CLEARANCE: GRANTED</span>
              <span>NODE: CHESS_SECTOR</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};