import React, { useState, useEffect } from 'react';

// Base URL untuk aset ikon SVG resmi dari repository VS Code Icons
const ICON_BASE_URL = "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons";

interface MFileRowProps {
  indent?: number;
  icon?: string;       // Menyimpan opsi jika ingin memasukkan emoji/string custom manual
  name: string;
  ext?: string;        // Ekstensi file (js, ts, tsx, py, css, dll.)
  tag?: string;
  color?: string;
  delay?: number;
  isFolder?: boolean;  // Menandakan apakah baris ini sebuah folder
  isOpen?: boolean;    // Menandakan apakah folder dalam posisi terbuka
}

export const MFileRow: React.FC<MFileRowProps> = ({ 
  indent = 0, 
  icon, 
  name, 
  ext, 
  tag, 
  color, 
  delay = 0,
  isFolder = false,
  isOpen = false 
}) => {
  const [visible, setVisible] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const tm = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(tm);
  }, [delay]);

  // Fungsi pintar untuk menyusun URL Ikon VS Code yang cocok
  const getIconUrl = (): string => {
    // 1. Jika itu folder
    if (isFolder) {
      return isOpen 
        ? `${ICON_BASE_URL}/default_folder_opened.svg` 
        : `${ICON_BASE_URL}/default_folder.svg`;
    }

    // 2. Jika ada ekstensi spesifik, sesuaikan dengan penamaan file vscode-icons
    if (ext) {
      const extensionLower = ext.toLowerCase();
      
      // Mapping beberapa ekstensi populer yang memiliki nama file khusus di vscode-icons
      const specialMappings: Record<string, string> = {
        js: "javascript",
        ts: "typescript",
        tsx: "reactts",
        jsx: "reactjs",
        py: "python",
        yml: "yaml",
        yaml: "yaml",
        md: "markdown",
        json: "json",
        html: "html",
        css: "css",
        sh: "shell",
        go: "go",
        sql: "mysql"
      };

      const iconName = specialMappings[extensionLower] || extensionLower;
      return `${ICON_BASE_URL}/file_type_${iconName}.svg`;
    }

    // 3. Fallback jika tidak ada ekstensi (file biasa)
    return `${ICON_BASE_URL}/default_file.svg`;
  };

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
      className={`flex items-center gap-2.5 py-1.5 transition-all duration-100 cursor-default border-l-0 ${
        indent > 0 ? "border-l" : ""
      } ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[6px]"}`}
    >
      {/* Wrapper Resolusi Icon */}
      <div className="flex items-center justify-center shrink-0 w-4 h-4 select-none">
        {icon ? (
          // Jika diisi prop `icon` manual berupa string/emoji
          <span className="text-[0.95rem]">{icon}</span>
        ) : (
          // Mengambil gambar SVG asli langsung dari CDN URL
          <img 
            src={getIconUrl()} 
            alt="file icon" 
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => {
              // Jika ekstensi asing tidak ditemukan di repo VS Code, ganti ke icon file default
              (e.target as HTMLImageElement).src = `${ICON_BASE_URL}/default_file.svg`;
            }}
          />
        )}
      </div>

      {/* Label Nama File / Folder */}
      <span 
        style={{ color: color ? `${color}cc` : undefined }} 
        className={`text-[0.95rem] tracking-wide font-mono ${!color ? "text-[var(--color-white)]/75" : ""}`}
      >
        {name}
        {ext && <span className="text-[var(--color-gray)]/45 text-[0.85rem]">.{ext}</span>}
      </span>

      {/* Tag Kanan */}
      {tag && (
        <span className="ml-auto pr-2 font-mono text-[var(--color-secondary)]/50 text-[0.75rem] tracking-wide">
          {tag}
        </span>
      )}
    </div>
  );
};