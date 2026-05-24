import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";
import { MTermLine } from "../molecules/MTermLine";
import { ADivider } from "../atoms/ADivider";
import { ACursor } from "../atoms/ACursor";

interface HistoryItem {
  type: "sys" | "in" | "out" | "err";
  text: string;
}

// 1. Tambahkan daftar command easter egg ke dalam CmdKeys
type CmdKeys = "help" | "email" | "github" | "linkedin" | "twitter" | "whoami" | "ls" | "hire" | "clear" | "cd" | "mkdir" | "sudo" | "rm" | "echo" | "ping" | "exit";

export const OContactSection: React.FC = () => {
  const t = useTheme();
  const [history, setHistory] = useState<HistoryItem[]>([{ type: "sys", text: 'CONTACT.EXE — Type "help" for commands.' }]);
  const [input, setInput] = useState("");
  const [focus, setFocus] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // 2. Ubah tipe fungsi agar menerima parameter (args: string[])
  const CMDS: Record<CmdKeys, (args: string[]) => string[] | null> = {
    help: () => ["Available commands:", "  email    — View email", "  github   — GitHub profile", "  linkedin — LinkedIn", "  twitter  — Twitter", "  hire     — Send hire request", "  whoami   — About me", "  ls       — List contacts", "  clear    — Clear terminal"],
    email: () => ["📧  hello@retro-dev.io"],
    github: () => ["🔗  github.com/retro-developer"],
    linkedin: () => ["🔗  linkedin.com/in/retro-dev"],
    twitter: () => ["🔗  twitter.com/retro_dev"],
    whoami: () => ["Full-Stack Developer | OSS Contributor", "Location: Internet 🌐", "Status: Available for hire ✅"],
    ls: () => ["email.txt  github.lnk  linkedin.lnk  twitter.lnk  resume.pdf"],
    hire: () => ["✅ Hire request logged!", "Redirecting to calendar...", "📅 You will hear back within 24 hours."],
    clear: () => null,
    
    // --- EASTER EGGS ---
    cd: (args) => {
      if (!args.length || args[0] === "~") return ["C:\\PORTFOLIO>"];
      if (args[0] === "..") return ["C:\\>"];
      return [`Access denied: Cannot navigate to directory '${args[0]}'.`];
    },
    mkdir: (args) => [`Error: Read-only file system. Cannot create '${args[0] || "directory"}'.`],
    rm: () => ["Permission denied: Are you trying to delete my portfolio? 🤨"],
    sudo: () => ["Nice try. This incident will be reported to the sysadmin. 🚨"],
    echo: (args) => [args.join(" ")],
    ping: () => ["Pinging retro-dev.io [127.0.0.1] with 32 bytes of data:", "Reply from 127.0.0.1: bytes=32 time<1ms TTL=64", "Ping statistics: Packets: Sent = 1, Received = 1, Lost = 0 (0% loss)"],
    exit: () => ["You cannot escape the matrix... Just kidding, just scroll up!"]
  };

  const handleCmd = useCallback(() => {
    // Ambil input mentah untuk ditampilkan di layar (agar spasi tidak hilang)
    const fullCmd = input.trim();
    if (!fullCmd) return;

    setInput("");

    // 3. Pecah input menjadi command dasar dan argumen
    const [baseCmd, ...args] = fullCmd.toLowerCase().split(/\s+/);
    
    const isValidCmd = Object.prototype.hasOwnProperty.call(CMDS, baseCmd);
    
    if (isValidCmd) {
      const fn = CMDS[baseCmd as CmdKeys];
      const out = fn(args); // Eksekusi dengan menyertakan array argumen

      if (out === null) {
        setHistory([{ type: "sys", text: "Terminal cleared." }]);
      } else {
        const newH: HistoryItem[] = [...history, { type: "in", text: fullCmd }];
        setHistory([...newH, ...out.map(x => ({ type: "out" as const, text: x }))]);
      }
    } else {
      const newH: HistoryItem[] = [...history, { type: "in", text: fullCmd }];
      setHistory([...newH, { type: "err", text: `'${baseCmd}' is not recognized. Type "help".` }]);
    }
  }, [input, history]);

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
          <div className="p-4 min-h-[240px] max-h-[340px] overflow-y-auto bg-[var(--color-bg-panel)]">
            {history.map((item, i) => {
              let textClass = "text-[var(--color-white)]/60";
              if (item.type === "in") textClass = "text-[var(--color-accent)]";
              if (item.type === "err") textClass = "text-[var(--color-danger)]";
              if (item.type === "sys") textClass = "text-[var(--color-gray)]/50";
              
              return (
                <div key={i} className={`mb-1 text-[1rem] leading-relaxed break-all ${textClass}`}>
                  {item.type === "in" && <span className="text-[var(--color-primary)]/65">C:\&gt; </span>}
                  {item.text}
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>
          <div className="border-t border-[var(--color-dim)]/20 px-4 py-2 flex items-center gap-2 bg-[var(--color-bg-panel)]">
            <span className="text-[var(--color-primary)]/65">C:\&gt;</span>
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleCmd(); }}
              onFocus={() => setFocus(true)} 
              onBlur={() => setFocus(false)}
              placeholder="type a command..."
              className="flex-1 text-[1rem] text-[var(--color-accent)] bg-transparent border-none outline-none caret-[var(--color-primary)]"
              autoFocus 
            />
            {focus && <ACursor char="▋" />}
          </div>
        </div>

        {/* INFO CARDS DENGAN MASK IMAGE URL */}
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
                <div style={{ color: c.color }} className="text-[0.95rem]">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="border border-[var(--color-dim)]/25 p-4 text-[var(--color-gray)]/50 text-[0.82rem] Richmond leading-relaxed">
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