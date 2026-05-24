import React from "react";

interface AGlowProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  className?: string;
}

export const AGlow: React.FC<AGlowProps> = ({ children, color, size, className = "" }) => {
  return (
    <span 
      style={{ 
        color: color, 
        fontSize: size,
        textShadow: `0 0 8px ${color || 'var(--color-primary)'}66, 0 0 20px ${color || 'var(--color-primary)'}22` 
      }} 
      className={`${!color ? "text-[var(--color-primary)]" : ""} ${className}`}
    >
      {children}
    </span>
  );
};