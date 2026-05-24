import React from "react";

interface ABadgeProps {
  children: React.ReactNode;
  color?: string;
}

export const ABadge: React.FC<ABadgeProps> = ({ children, color }) => {
  return (
    <span 
      style={{ borderColor: color ? `${color}66` : undefined, color: color ? `${color}cc` : undefined }}
      className="border border-[var(--color-secondary)]/40 text-[var(--color-secondary)]/80 px-2 py-0.5 text-[0.78rem] tracking-wide inline-block"
    >
      {children}
    </span>
  );
};