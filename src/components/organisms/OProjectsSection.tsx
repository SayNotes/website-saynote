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
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";

export const OProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"PROJECTS" | "EXPERIENCE">("PROJECTS");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  
  // State untuk melacak log mana saja yang terbuka
  const [expandedLogs, setExpandedLogs] = useState<Record<number, boolean>>({});

  const toggleLog = (idx: number) => {
    setExpandedLogs(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

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
      certImg: "/src/assets/images/chess-cert.png"
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
      <style>{`
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

        @keyframes backdrop-fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-backdrop-fade {
          animation: backdrop-fade 0.3s ease-out forwards;
        }
        
        @keyframes crt-on {
          0% { transform: scale(0.8, 0.005); opacity: 0; filter: brightness(3); }
          30% { transform: scale(1, 0.01); opacity: 1; filter: brightness(2); }
          100% { transform: scale(1, 1); opacity: 1; filter: brightness(1); }
        }
        .animate-crt-on {
          animation: crt-on 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          transform-origin: center center;
        }

        @keyframes expand-down {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-expand {
          animation: expand-down 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <section className="py-16 px-8">
        <MTermLine 
          prompt="C:\>" 
          command={viewMode === "PROJECTS" ? "run projects.exe --all" : "cat history.log --verbose"} 
        />
        <ADivider />

        {/* Tab Switcher */}
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

        {/* Main Content Display */}
        <div className="min-h-[400px]">
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
            /* --- MID-SIZE BALANCED HISTORY LOG --- */
            <div className="space-y-3 max-w-4xl font-mono animate-fadeIn">
              {EXPERIENCES.map((exp, idx) => {
                const isExpanded = !!expandedLogs[idx];
                const isChess = exp.type === 'chess';
                const isGaming = exp.type === 'gaming';
                
                const textColor = isChess ? 'text-yellow-500' : isGaming ? 'text-cyan-500' : 'text-[var(--color-primary)]';
                const borderDim = isChess ? 'border-yellow-500/20' : isGaming ? 'border-cyan-500/20' : 'border-[var(--color-primary)]/20';
                const bgHover = isChess ? 'hover:bg-yellow-500/[0.02]' : isGaming ? 'hover:bg-cyan-500/[0.02]' : 'hover:bg-[var(--color-primary)]/[0.02]';

                return (
                  <div 
                    key={idx} 
                    className={`relative overflow-hidden border ${borderDim} bg-black/20 ${bgHover} rounded-sm transition-all duration-200`}
                  >
                    {/* Header Row - Lebih Berjarak & Terbaca */}
                    <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      {/* Informasi Kiri */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        {/* Status/Periode */}
                        <span className={`text-xs font-bold tracking-wider px-2.5 py-1 bg-black/40 border ${borderDim} ${textColor} w-fit rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]`}>
                          {exp.period}
                        </span>
                        
                        {/* Posisi & Perusahaan */}
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold text-[var(--color-gray)]/90 tracking-wide">
                            {exp.role}
                          </h4>
                          <span className="text-xs text-[var(--color-gray)]/40 italic mt-0.5">
                            via {exp.company}
                          </span>
                        </div>
                      </div>

                      {/* Tombol Kontrol Kanan */}
                      <div className="flex items-center gap-2 self-end md:self-auto text-xs tracking-wider font-mono">
                        {/* File Attachment jika tersedia */}
                        {exp.certImg && (
                          <button 
                            onClick={() => setSelectedCert(exp.certImg as string)}
                            className="flex items-center gap-1.5 border border-yellow-500/30 text-yellow-500/70 px-3 py-1.5 rounded-sm hover:bg-yellow-500/10 hover:text-yellow-400 transition-all uppercase"
                          >
                            <PhotoIcon className="w-4 h-4" /> [ATTACHMENT]
                          </button>
                        )}
                        
                        {/* Toggle Deskripsi */}
                        <button 
                          onClick={() => toggleLog(idx)}
                          className={`flex items-center gap-1.5 border ${borderDim} ${textColor} px-3 py-1.5 rounded-sm bg-black/30 hover:brightness-110 active:scale-95 transition-all font-bold`}
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUpIcon className="w-4 h-4" /> [CLOSE_LOG]
                            </>
                          ) : (
                            <>
                              <ChevronDownIcon className="w-4 h-4" /> [READ_LOG]
                            </>
                          )}
                        </button>
                      </div>

                    </div>

                    {/* Expandable Box - Ukuran teks nyaman dibaca */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-3 border-t border-[var(--color-dim)]/10 bg-black/30 animate-expand">
                        <div className="border-l-2 border-[var(--color-dim)]/30 pl-4 py-1">
                          <div className="text-[var(--color-gray)]/20 font-mono text-[0.65rem] uppercase tracking-widest mb-2">
                            &gt; DATA_DECRYPTION_SUMMARY:
                          </div>
                          <p className="text-sm text-[var(--color-gray)]/60 leading-relaxed font-sans">
                            {exp.summary}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* System Footer */}
        <div className="mt-16 pt-4 border-t border-[var(--color-dim)]/10 flex justify-between text-[0.72rem] text-[var(--color-gray)]/25 tracking-wider">
          <span>STATUS: ACTIVE_NODE</span>
          <span>SYS_REF_2026</span>
        </div>
      </section>

      {/* Modal Sertifikat (Tanpa Glitch) */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-backdrop-fade"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative p-2 border-2 border-yellow-500/50 bg-black max-w-4xl w-full animate-crt-on shadow-[0_0_40px_rgba(234,179,8,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between border-b border-yellow-500/30 pb-2 mb-4 text-yellow-500 text-xs font-mono">
              <span className="animate-pulse flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                DECRYPTING_SECURE_FILE... [OK]
              </span>
              <button 
                onClick={() => setSelectedCert(null)}
                className="hover:text-red-500 hover:bg-red-500/10 p-1 transition-all"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Container Image */}
            <div className="relative w-full h-auto overflow-hidden bg-[#0a0a0a] border border-yellow-500/20 flex items-center justify-center min-h-[300px]">
              <div className="scanline"></div>
              <img 
                src={selectedCert} 
                alt="Certificate" 
                className="w-full h-auto max-h-[75vh] object-contain opacity-95 mix-blend-lighten"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/0a0a0a/eab308?font=monospace&text=[_DATA_CORRUPTED_]';
                }}
              />
            </div>
            
            {/* Footer Modal */}
            <div className="mt-3 text-[0.65rem] text-yellow-500/50 flex justify-between font-mono tracking-widest">
              <span>SECURITY_CLEARANCE: GRANTED</span>
              <span>NODE: CHESS_SECTOR</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};