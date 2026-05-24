import React from "react";

export const AStatus: React.FC = () => {
  return (
    <span className="text-[0.82rem] flex items-center gap-1.5">
      <span className="w.1.5 h-1.5 rounded-full bg-[var(--color-primary)] inline-block shadow-[0_0_6px_var(--color-primary)] animate-glow-soft" />
      <span className="text-[var(--color-primary)]/60">ONLINE</span>
    </span>
  );
};