import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { MTermLine } from "../molecules/MTermLine";
import { ADivider } from "../atoms/ADivider";
import { OCRTMonitor } from "./OCRTMonitor";
import { MFolderGroup } from "../molecules/MFolderGroup";

export const OSkillsSection: React.FC = () => {
  const t = useTheme();

  const FOLDERS = [
    {
      name: "FRONTEND", color: t.primary,
      files: [
        { name: "React", ext: "jsx", tag: "daily driver" },
        { name: "Next", ext: "js", tag: "SSR / SSG" },
        { name: "TypeScript", ext: "ts", tag: "type safety" },
        { name: "Tailwind", ext: "css", tag: "utility-first" },
        { name: "Shadcn", ext: "js", tag: "component library" },
        { name: "Bootstrap", ext: "css", tag: "CSS framework" },
      ],
    },
    {
      name: "BACKEND", color: t.secondary,
      files: [
        { name: "Node", ext: "js", tag: "event loop" },
        { name: "FastAPI", ext: "py", tag: "async REST" },
        { name: "Go", ext: "go", tag: "concurrency" },
        { name: "schema", ext: "sql", tag: "PostgreSQL" },
        { name: "redis", ext: "yml", tag: "cache / pub-sub" },
        { name: "Express", ext: "js", tag: "web framework" },
      ],
    },
    {
      name: "DEVOPS", color: t.accent,
      files: [
        { name: "Dockerfile", ext: "sh", tag: "containerize" },
        { name: "k8s", ext: "yml", tag: "orchestration" },
        { name: "deploy", ext: "yml", tag: "CI/CD" },
        { name: "terraform", ext: "sh", tag: "infra as code" },
        { name: "aws-config", ext: "yml", tag: "cloud" },
        { name: "bash", ext: "sh", tag: "automation" },
      ],
    },
  ];

  const FileManagerScreen = () => (
    <div className="bg-[var(--color-bg)]">
      {/* Title bar */}
      <div className="bg-[var(--color-dim)]/35 px-3 py-1 flex justify-between items-center border-b border-[var(--color-dim)]/20">
        <span className="text-[var(--color-primary)]/80 text-[0.85rem] tracking-wider">
          📁 C:\SKILLS — File Explorer
        </span>
        <div className="flex gap-1.5">
          {["─", "□", "✕"].map((c, i) => (
            <span key={i} className="text-[var(--color-gray)]/50 text-[0.8rem] bg-[var(--color-dim)]/25 px-1.5 cursor-default">{c}</span>
          ))}
        </div>
      </div>
      {/* Menu bar */}
      <div className="px-3 py-0.5 border-b border-[var(--color-dim)]/15 flex gap-5 text-[0.78rem] text-[var(--color-gray)]/45">
        {["File", "Edit", "View", "Help"].map(m => (
          <span key={m} className="cursor-pointer">
            <span className="underline text-[var(--color-primary)]/50">{m[0]}</span>{m.slice(1)}
          </span>
        ))}
      </div>
      {/* Address bar */}
      <div className="px-3 py-0.5 border-b border-[var(--color-dim)]/15 flex items-center gap-2 text-[0.8rem]">
        <span className="text-[var(--color-gray)]/35">Address:</span>
        <span className="text-[var(--color-primary)]/60 bg-[var(--color-primary)]/[0.03] px-2 py-0.5 border border-[var(--color-dim)]/20 flex-1">
          C:\PORTFOLIO\SKILLS\
        </span>
      </div>
      {/* Column header */}
      <div className="grid grid-cols-[1fr_auto] px-3 py-0.5 border-b border-[var(--color-dim)]/15 text-[0.75rem] text-[var(--color-gray)]/35 bg-[var(--color-dim)]/[0.06]">
        <span>Name</span>
        <span className="pr-1.5">Category</span>
      </div>
      
      {/* Folder tree */}
      {/* PERUBAHAN DI SINI: max-h-[360px] diubah menjadi h-[360px] */}
      <div className="p-1.5 h-[360px] overflow-y-auto">
        {FOLDERS.map((folder) => (
          <MFolderGroup key={folder.name} folder={folder} color={folder.color} />
        ))}
      </div>
      
      {/* Status bar */}
      <div className="border-t border-[var(--color-dim)]/20 px-3 py-1 text-[0.72rem] text-[var(--color-gray)]/35 flex justify-between">
        <span>{FOLDERS.reduce((a, f) => a + f.files.length, 0)} objects</span>
        <span className="text-[var(--color-primary)]/35">always learning ✦</span>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-8">
      <MTermLine prompt="C:\>" command="explorer /skills" />
      <ADivider />
      <div className="mt-10 flex justify-center">
        <OCRTMonitor>
          <FileManagerScreen />
        </OCRTMonitor>
      </div>
    </section>
  );
};