import React from "react";

export const ADivider: React.FC = () => {
  return (
    <div className="text-[var(--color-dim)]/50 select-none overflow-hidden whitespace-nowrap">
      {"─".repeat(120)}
    </div>
  );
};