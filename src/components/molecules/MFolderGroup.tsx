import React, { useState, useEffect } from "react";
import { MFileRow } from "./MFileRow";

interface FileItem {
  name: string;
  ext: string;
  tag: string;
}

interface FolderData {
  name: string;
  files: FileItem[];
}

interface MFolderGroupProps {
  folder: FolderData;
  color: string;
  delay?: number;
}

export const MFolderGroup: React.FC<MFolderGroupProps> = ({ folder, color }) => {
  const [open, setOpen] = useState(true);
  const [hov, setHov] = useState(false);

  return (
    <div className="mb-1">
      <div 
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHov(true)} 
        onMouseLeave={() => setHov(false)}
        style={{ 
          backgroundColor: hov ? `${color}14` : "transparent",
          borderLeftColor: open ? color : `${color}44`
        }}
        className="flex items-center gap-2 p-1.5 cursor-pointer border-l-2 transition-all duration-100"
      >
        <span className="text-[1rem]">{open ? "📂" : "📁"}</span>
        <span style={{ color: color, textShadow: `0 0 8px ${color}44` }} className="text-[1.05rem] tracking-wide">
          {folder.name}/
        </span>
        <span className="text-[var(--color-gray)]/40 text-[0.82rem] ml-auto">
          {folder.files.length} items
        </span>
        <span style={{ color: `${color}66` }} className="text-[0.9rem]">{open ? "▾" : "▸"}</span>
      </div>
      
      {open && (
        <div className="animate-folder-open">
          {folder.files.map((f, i) => (
            <MFileRow 
              key={f.name} 
              indent={1} 
              name={f.name} 
              ext={f.ext} 
              tag={f.tag} 
              color={color} 
              delay={i * 60} 
            />
          ))}
        </div>
      )}
    </div>
  );
};