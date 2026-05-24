import React, { useState, useEffect } from 'react';

const FILE_ICONS: Record<string, string> = {
  js: "📄", ts: "📄", css: "🎨", html: "🌐", py: "🐍",
  go: "📦", sql: "🗄️", sh: "⚙️", yml: "🔧", dir: "📁", diropen: "📂",
};

interface MFileRowProps {
  indent?: number;
  icon?: string;
  name: string;
  ext?: string;
  tag?: string;
  color?: string;
  delay?: number;
}

export const MFileRow: React.FC<MFileRowProps> = ({ indent = 0, icon, name, ext, tag, color, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const tm = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(tm);
  }, [delay]);

  return (
    <div 
      onMouseEnter={() => setHov(true)} 
      onMouseLeave={() => setHov(false)}
      style={{ 
        paddingLeft: `${indent * 1.4 + 0.5}rem`,
        borderLeftColor: indent > 0 ? 'var(--color-dim)33' : undefined,
        marginLeft: indent > 0 ? `${indent * 0.4 + 0.4}rem` : 0,
        backgroundColor: hov ? `${color || 'var(--color-primary)'}0c` : 'transparent',
      }}
      className={`flex items-center gap-2 py-1 transition-all duration-100 cursor-default border-l-0 ${indent > 0 ? "border-l" : ""} ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[6px]"}`}
    >
      <span className="text-[0.95rem]">{icon || (ext ? FILE_ICONS[ext] : "📄")}</span>
      <span 
        style={{ color: color ? `${color}cc` : undefined }} 
        className={`text-[1rem] ${!color ? "text-[var(--color-white)]/70" : ""}`}
      >
        {name}
        {ext && <span className="text-[var(--color-gray)]/45 text-[0.85rem]">.{ext}</span>}
      </span>
      {tag && (
        <span className="ml-auto pr-2 text-[var(--color-secondary)]/50 text-[0.78rem] tracking-wide">
          {tag}
        </span>
      )}
    </div>
  );
};