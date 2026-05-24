import React, { useState } from "react";

interface MMatrixColumnProps {
  x: number;
  speed: number;
}

export const MMatrixColumn: React.FC<MMatrixColumnProps> = ({ x, speed }) => {
  const chars = "✦✧◇◆○●△▽♡♢✿❋";
  const [items] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      char: chars[Math.floor(Math.random() * chars.length)],
      opacity: i === 0 ? 0.6 : Math.random() * 0.25 + 0.05,
    }))
  );

  return (
    <div 
      style={{ 
        left: x, 
        animation: `matrix-fall ${speed}s linear infinite`,
        animationDelay: `${-Math.random() * speed}s` 
      }} 
      className="absolute top-0 w-5 text-[var(--color-primary)]"
    >
      {items.map((it, i) => (
        <div key={i} style={{ opacity: it.opacity }} className="text-[0.9rem] h-5 leading-5">
          {it.char}
        </div>
      ))}
    </div>
  );
};