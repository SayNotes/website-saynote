import React from "react";

interface ACursorProps {
  char?: string;
  color?: string;
  className?: string;
}

export const ACursor: React.FC<ACursorProps> = ({ char = "█", color, className = "" }) => {
  return (
    <span 
      style={{ color: color }} 
      className={`animate-cursor-blink inline-block ${!color ? "text-[var(--color-primary)]" : ""} ${className}`}
    >
      {char}
    </span>
  );
};