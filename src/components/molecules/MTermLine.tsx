import React from "react";

interface MTermLineProps {
  prompt?: string;
  command?: string;
}

export const MTermLine: React.FC<MTermLineProps> = ({ prompt = "C:\\>", command = "" }) => {
  return (
    <div className="text-[1.15rem] mb-1 flex flex-wrap gap-x-2">
      <span className="text-[var(--color-accent)]/80">{prompt}</span>
      <span className="text-[var(--color-primary)]/80">{command}</span>
    </div>
  );
};