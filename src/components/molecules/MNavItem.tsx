import React from "react";

interface MNavItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const MNavItem: React.FC<MNavItemProps> = ({ label, active, onClick }) => {
  return (
    <span 
      onClick={onClick} 
      className={`text-[1rem] py-1 px-3 cursor-pointer tracking-widest transition-all duration-100 select-none border border-transparent hover:border-[var(--color-primary)]/35 ${active ? "text-[var(--color-bg)] bg-[var(--color-primary)]/90 drop-shadow-[0_0_10px_rgba(var(--color-primary),0.5)]" : "text-[var(--color-gray)]/60 hover:text-[var(--color-primary)]"}`}
    >
      {active ? `[${label}]` : label}
    </span>
  );
};