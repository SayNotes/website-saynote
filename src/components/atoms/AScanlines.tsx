import React from "react";

export const AScanlines: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9998] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(0,0,0,0.1)_3px,rgba(0,0,0,0.1)_4px)]" />
      <div className="fixed left-0 right-0 h-[2px] pointer-events-none z-[9997] animate-scanline bg-[linear-gradient(transparent,var(--color-scan),transparent)]" />
      <div className="fixed inset-0 pointer-events-none z-[9996] bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    </>
  );
};