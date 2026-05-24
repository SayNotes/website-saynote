import React from "react";

interface AButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "alt";
  className?: string;
}

export const AButton: React.FC<AButtonProps> = ({ children, onClick, variant = "default", className = "" }) => {
  const textColor = variant === "alt" ? "text-[var(--color-secondary)]/70 hover:text-[var(--color-secondary)] border-[var(--color-secondary)]/30 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 hover:shadow-[0_0_14px_rgba(var(--color-secondary),0.2)]" : "text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:shadow-[0_0_14px_rgba(var(--color-primary),0.2)]";

  return (
    <button 
      onClick={onClick} 
      className={`text-[1.05rem] border bg-transparent py-1.5 px-4 cursor-pointer tracking-wider transition-all duration-120 ${textColor} ${className}`}
    >
      {children}
    </button>
  );
};