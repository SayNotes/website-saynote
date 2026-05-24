import React from "react";
import { AGlow } from "../atoms/AGlow";

interface MStatCardProps {
  label: string;
  value: string;
  color?: string;
}

export const MStatCard: React.FC<MStatCardProps> = ({ label, value, color }) => {
  return (
    <div 
      style={{ borderColor: color ? `${color}2a` : undefined, background: color ? `${color}06` : undefined }} 
      className="border border-[var(--color-primary)]/15 p-4 text-center bg-[var(--color-primary)]/[0.02]"
    >
      <AGlow color={color} size="1.55rem">{value}</AGlow>
      <div className="text-[var(--color-gray)]/50 text-[0.78rem] mt-1 tracking-widest">{label}</div>
    </div>
  );
};