import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";
import { MTermLine } from "../molecules/MTermLine";
import { ADivider } from "../atoms/ADivider";
import { ACursor } from "../atoms/ACursor";

// Import Heroicons v2 untuk log baris terminal
import { 
  EnvelopeIcon, 
  CodeBracketIcon, 
  BriefcaseIcon, 
  GlobeAltIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  FolderOpenIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

interface HistoryItem {
  type: "sys" | "in" | "out" | "err";
  text: string;
  icon?: React.ComponentType<any>;
  iconColor?: string;
}

interface CmdLine {
  text: string;
  icon?: React.ComponentType<any>;
  iconColor?: string;
}

type CmdKeys = "help" | "email" | "github" | "linkedin" | "twitter" | "whoami" | "ls" | "cat" | "run" | "explorer" | "hire" | "clear" | "cd" | "mkdir" | "sudo" | "rm" | "echo" | "ping" | "exit";

export const OContactSection: React.FC = () => {
  const t = useTheme();
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "sys", text: 'CONTACT.EXE — Type "help" for commands.', icon: CommandLineIcon }
  ]);
  const [input, setInput] = useState("");
  const [focus, setFocus] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // --- STATE UNTUK ARROW KEY COMMAND HISTORY ---
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const CMDS: Record<CmdKeys, (args: string[]) => CmdLine[] | null> = {
    help: () => [
      { text: "Available commands:", icon: InformationCircleIcon }, 
      { text: "  run      — Execute application (e.g., run projects.exe)", icon: ChevronRightIcon },
      { text: "  explorer — Navigate sectors (e.g., explorer /skills)", icon: ChevronRightIcon },
      { text: "  cat      — Read file content (e.g., cat about.txt)", icon: ChevronRightIcon },
      { text: "  ls       — List available files", icon: ChevronRightIcon }, 
      { text: "  email    — View email address", icon: ChevronRightIcon }, 
      { text: "  github   — GitHub profile link", icon: ChevronRightIcon }, 
      { text: "  linkedin — LinkedIn profile link", icon: ChevronRightIcon }, 
      { text: "  clear    — Clear terminal screen", icon: ChevronRightIcon }
    ],
    email: () => [{ text: "hello@retro-dev.io", icon: EnvelopeIcon, iconColor: t.primary }],
    github: () => [{ text: "github.com/retro-developer", icon: CodeBracketIcon, iconColor: t.white }],
    linkedin: () => [{ text: "linkedin.com/in/retro-dev", icon: BriefcaseIcon, iconColor: t.secondary }],
    twitter: () => [{ text: "twitter.com/retro_dev", icon: GlobeAltIcon, iconColor: t.accent }],
    whoami: () => [
      { text: "Full-Stack Developer | OSS Contributor", icon: InformationCircleIcon },
      { text: "Location: Internet Sector [Remote]", icon: GlobeAltIcon },
      { text: "Status: Available for hire / contract work", icon: CheckCircleIcon, iconColor: t.accent }
    ],
    ls: () => [{ text: "about.txt   email.txt   github.lnk   linkedin.lnk   twitter.lnk   resume.pdf   projects.exe", icon: FolderOpenIcon }],
    
    run: (args) => {
      if (!args.length) return [{ text: "Error: Missing target executable. Usage: run [program.exe]", icon: ExclamationTriangleIcon, iconColor: t.danger }];
      
      const target = args[0].toLowerCase();
      const hasAllFlag = args.includes("--all");

      if (target === "projects.exe") {
        return [
          { text: "Launching PROJECTS.EXE...", icon: CommandLineIcon },
          { text: "Initializing project registry...", icon: SparklesIcon },
          { text: hasAllFlag ? "Status: Fetching full repository details [--all]..." : "Status: Fetching standard view...", icon: InformationCircleIcon },
          { text: "Success: 4 active production nodes initialized.", icon: CheckCircleIcon, iconColor: t.accent },
          { text: "Check out the 'PROJECTS.EXE' tab dashboard at the top section!", icon: LightBulbIcon }
        ];
      }
      return [{ text: `Error: '${target}' is not recognized as an internal executable program.`, icon: ExclamationTriangleIcon, iconColor: t.danger }];
    },

    explorer: (args) => {
      if (!args.length) return [{ text: "Error: Missing sector path. Usage: explorer /[sector]", icon: ExclamationTriangleIcon, iconColor: t.danger }];
      
      const path = args[0].toLowerCase();
      if (path === "/skills" || path === "skills") {
        return [
          { text: "Opening System Explorer: SKILLS Sector...", icon: FolderOpenIcon },
          { text: "──────────────────────────────────────────────" },
          { text: " Languages : TypeScript, JavaScript, Python, Go, HTML/CSS", icon: CodeBracketIcon },
          { text: " Frameworks: React, Next.js, Node.js, FastAPI, Vue.js", icon: CodeBracketIcon },
          { text: " Databases : PostgreSQL, Redis, MongoDB, ClickHouse", icon: CodeBracketIcon },
          { text: " DevOps    : AWS, Docker, K8s, CI/CD Pipelines", icon: CodeBracketIcon },
          { text: "──────────────────────────────────────────────" },
          { text: "Tip: Navigation shortcut registered. You can also view this visually on the top navbar!", icon: LightBulbIcon }
        ];
      }
      return [{ text: `Error: Sector path '${args[0]}' could not be located.`, icon: ExclamationTriangleIcon, iconColor: t.danger }];
    },

    cat: (args) => {
      if (!args.length) return [{ text: "Error: Missing filename. Usage: cat [filename]", icon: ExclamationTriangleIcon, iconColor: t.danger }];
      const filename = args[0].toLowerCase();
      switch (filename) {
        case "about.txt":
          return [
            { text: "--- ABOUT.TXT ---", icon: DocumentTextIcon },
            { text: "Full-Stack Developer focused on building clean, modular applications." },
            { text: "Passionate about interactive UI, terminal aesthetics, and robust backend architecture." },
            { text: "Current Status: active_node_2026", icon: CheckCircleIcon, iconColor: t.accent }
          ];
        case "email.txt": return [{ text: "hello@retro-dev.io", icon: EnvelopeIcon, iconColor: t.primary }];
        case "github.lnk": return [{ text: "github.com/retro-developer", icon: CodeBracketIcon }];
        case "linkedin.lnk": return [{ text: "linkedin.com/in/retro-dev", icon: BriefcaseIcon }];
        case "twitter.lnk": return [{ text: "twitter.com/retro_dev", icon: GlobeAltIcon }];
        case "resume.pdf": return [
          { text: "Opening resume.pdf...", icon: DocumentTextIcon },
          { text: "Dumped data summary into HISTORY.LOG module.", icon: InformationCircleIcon }
        ];
        default: return [{ text: `Error: File '${args[0]}' not found.`, icon: ExclamationTriangleIcon, iconColor: t.danger }];
      }
    },
    hire: () => [
      { text: "Hire request logged successfully!", icon: CheckCircleIcon, iconColor: t.accent },
      { text: "Redirecting to secure calendar router...", icon: CommandLineIcon },
      { text: "Transmission established: You will hear back within 24 hours.", icon: InformationCircleIcon }
    ],
    clear: () => null,
    cd: (args) => {
      if (!args.length || args[0] === "~") return [{ text: "C:\\PORTFOLIO>", icon: CommandLineIcon }];
      if (args[0] === "..") return [{ text: "C:\\>", icon: CommandLineIcon }];
      return [{ text: `Access denied: Cannot navigate to directory '${args[0]}'.`, icon: ExclamationTriangleIcon, iconColor: t.danger }];
    },
    mkdir: (args) => [{ text: `Error: Read-only file system. Cannot create '${args[0] || "directory"}'.`, icon: ExclamationTriangleIcon, iconColor: t.danger }],
    rm: () => [{ text: "Permission denied: Are you trying to delete my portfolio? :)", icon: ExclamationTriangleIcon, iconColor: t.danger }],
    sudo: () => [{ text: "Nice try. This incident will be reported to the sysadmin.", icon: ExclamationTriangleIcon, iconColor: t.danger }],
    echo: (args) => [{ text: args.join(" "), icon: CommandLineIcon }],
    ping: () => [
      { text: "Pinging retro-dev.io [127.0.0.1] with 32 bytes of data:", icon: CommandLineIcon },
      { text: "Reply from 127.0.0.1: bytes=32 time<1ms TTL=64", icon: CheckCircleIcon, iconColor: t.accent }
    ],
    exit: () => [{ text: "You cannot escape the matrix... Just kidding, just scroll up!", icon: InformationCircleIcon }]
  };

  const handleCmd = useCallback(() => {
    const fullCmd = input.trim();
    if (!fullCmd) return;

    setInput("");
    
    // Simpan perintah asli ke dalam array history log command
    setCmdHistory(prev => [...prev, fullCmd]);
    setHistoryIndex(-1); // Reset index navigasi setelah command dieksekusi

    const [baseCmd, ...args] = fullCmd.toLowerCase().split(/\s+/);
    const isValidCmd = Object.prototype.hasOwnProperty.call(CMDS, baseCmd);
    
    if (isValidCmd) {
      const fn = CMDS[baseCmd as CmdKeys];
      const out = fn(args);

      if (out === null) {
        setHistory([{ type: "sys", text: "Terminal cleared.", icon: CommandLineIcon }]);
      } else {
        const newH: HistoryItem[] = [...history, { type: "in", text: fullCmd }];
        setHistory([...newH, ...out.map(x => ({ type: "out" as const, ...x }))]);
      }
    } else {
      const newH: HistoryItem[] = [...history, { type: "in", text: fullCmd }];
      setHistory([...newH, { type: "err", text: `'${baseCmd}' is not recognized. Type "help".`, icon: ExclamationTriangleIcon, iconColor: t.danger }]);
    }
  }, [input, history, t.danger]);

  // --- HANDLER NAVIGASI TOMBOL PANAH ATAS & BAWAH ---
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCmd();
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); // Mencegah cursor melompat ke awal teks
      if (cmdHistory.length === 0) return;

      let newIndex = historyIndex - 1;
      if (historyIndex === -1) {
        // Jika baru pertama kali menekan panah atas, ambil perintah paling terakhir
        newIndex = cmdHistory.length - 1;
      } else if (newIndex < 0) {
        newIndex = 0; // Kunci pada perintah paling awal
      }

      setHistoryIndex(newIndex);
      setInput(cmdHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistory.length === 0 || historyIndex === -1) return;

      let newIndex = historyIndex + 1;
      if (newIndex >= cmdHistory.length) {
        // Jika sudah melewati batas bawah, kosongkan input kembali ke semula
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    }
  };

  useEffect(() => { 
    bottomRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [history]);

  return (
    <section className="py-16 px-8">
      <MTermLine prompt="C:\>" command="contact.exe /interactive" />
      <ADivider />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start">
        
        {/* TERMINAL BOX */}
        <div className="border border-[var(--color-dim)]/25">
          <div className="bg-[var(--color-dim)]/20 px-4 py-1.5 flex justify-between items-center">
            <span className="text-[var(--color-primary)]/65 text-[0.9rem]">CONTACT.EXE — v1.0</span>
            <span className="text-[var(--color-gray)]/40 text-[0.85rem]">─ □ ✕</span>
          </div>
          <div className="p-4 min-h-[240px] max-h-[340px] overflow-y-auto bg-[var(--color-bg-panel)] font-mono">
            {history.map((item, i) => {
              let textClass = "text-[var(--color-white)]/60";
              if (item.type === "in") textClass = "text-[var(--color-accent)]";
              if (item.type === "err") textClass = "text-[var(--color-danger)]";
              if (item.type === "sys") textClass = "text-[var(--color-gray)]/50";
              
              const LogIcon = item.icon;

              return (
                <div key={i} className={`mb-1.5 text-[1rem] leading-relaxed break-all flex items-start gap-2 ${textClass}`}>
                  {item.type === "in" && <span className="text-[var(--color-primary)]/65 shrink-0">C:\&gt;</span>}
                  
                  {LogIcon && (
                    <LogIcon 
                      className="w-4 h-4 mt-1 shrink-0 stroke-[2]" 
                      style={{ color: item.iconColor }} 
                    />
                  )}
                  
                  <span className="flex-1 whitespace-pre-wrap">{item.text}</span>
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>
          <div className="border-t border-[var(--color-dim)]/20 px-4 py-2 flex items-center gap-2 bg-[var(--color-bg-panel)]">
            <span className="text-[var(--color-primary)]/65 font-mono">C:\&gt;</span>
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Menggunakan fungsi handler baru
              onFocus={() => setFocus(true)} 
              onBlur={() => setFocus(false)}
              placeholder="type a command..."
              className="flex-1 text-[1rem] text-[var(--color-accent)] bg-transparent border-none outline-none caret-[var(--color-primary)] font-mono"
              autoFocus 
            />
            {focus && <ACursor char="▋" />}
          </div>
        </div>

        {/* INFO CARDS */}
        <div className="flex flex-col gap-4">
          {[
            { iconUrl: "https://api.iconify.design/lucide:mail.svg", label: "EMAIL", value: "hello@retro-dev.io", color: t.primary },
            { iconUrl: "https://api.iconify.design/lucide:github.svg", label: "GITHUB", value: "github.com/retro-developer", color: `${t.white}cc` },
            { iconUrl: "https://api.iconify.design/lucide:linkedin.svg", label: "LINKEDIN", value: "linkedin.com/in/retro-dev", color: t.secondary },
            { iconUrl: "https://api.iconify.design/lucide:twitter.svg", label: "TWITTER", value: "@retro_dev", color: t.accent },
          ].map(c => (
            <div 
              key={c.label} 
              style={{ borderColor: `${c.color}2a`, background: `${c.color}06` }}
              className="border p-4 flex gap-4 items-center"
            >
              <div 
                style={{ 
                  maskImage: `url(${c.iconUrl})`, 
                  WebkitMaskImage: `url(${c.iconUrl})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  backgroundColor: c.color, 
                }} 
                className="w-6 h-6 shrink-0" 
              />
              <div>
                <div className="text-[var(--color-gray)]/45 text-[0.75rem] tracking-widest">{c.label}</div>
                <div style={{ color: c.color }} className="text-[0.95rem] font-mono">{c.value}</div>
              </div>
            </div>
          ))}
          
          <div className="border border-[var(--color-dim)]/25 p-4 text-[var(--color-gray)]/50 text-[0.82rem] leading-relaxed font-mono">
            <div className="text-[var(--color-primary)]/65 mb-2">// AVAILABILITY</div>
            <div>Response time: &lt; 24 hours</div>
            <div>Timezone: GMT+7 (Jakarta)</div>
            <div className="text-[var(--color-primary)]/65 mt-2">
              Status: <span className="text-[var(--color-accent)]">OPEN TO OFFERS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};