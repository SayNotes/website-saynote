import React, { createContext, useContext } from "react";
import type { ThemeProperties } from "../types/theme";

export const THEMES: Record<string, ThemeProperties> = {
  ROSE: {
    id: "ROSE", label: "SOFT ROSE", desc: "Pink & lavender", swatch: "#f4a7c3",
    bg: "#18101e", bgPanel: "#1e1528", bgHover: "#261c34", primary: "#f4a7c3",
    dim: "#9a5f7a", ghost: "#2d1a2e", secondary: "#c3aff0", accent: "#ffd6a5",
    danger: "#ff9999", white: "#fce8f3", gray: "#8a6888", scanColor: "rgba(244,167,195,0.035)",
  },
  MINT: {
    id: "MINT", label: "SOFT MINT", desc: "Mint green & cream", swatch: "#a8e6cf",
    bg: "#0f1a16", bgPanel: "#131e1a", bgHover: "#1a2822", primary: "#a8e6cf",
    dim: "#4a8870", ghost: "#142018", secondary: "#ffe0ac", accent: "#ffc8a2",
    danger: "#ff9999", white: "#e6f9f3", gray: "#5a8070", scanColor: "rgba(168,230,207,0.035)",
  },
  LILAC: {
    id: "LILAC", label: "SOFT LILAC", desc: "Periwinkle & sky", swatch: "#b0c4f8",
    bg: "#10121e", bgPanel: "#141826", bgHover: "#1a2030", primary: "#b0c4f8",
    dim: "#4a5898", ghost: "#12162a", secondary: "#f0c4e8", accent: "#ffeaa0",
    danger: "#ff9999", white: "#e8eeff", gray: "#606898", scanColor: "rgba(176,196,248,0.035)",
  },
  PEACH: {
    id: "PEACH", label: "SOFT PEACH", desc: "Warm peach & sand", swatch: "#ffb997",
    bg: "#1c1410", bgPanel: "#221a14", bgHover: "#2c2018", primary: "#ffb997",
    dim: "#a06040", ghost: "#221612", secondary: "#f5d08a", accent: "#c8e6c4",
    danger: "#ff9999", white: "#fff3ec", gray: "#907060", scanColor: "rgba(255,185,151,0.035)",
  },
};

const ThemeCtx = createContext<ThemeProperties>(THEMES.MINT);
export const useTheme = () => useContext(ThemeCtx);

export const ThemeProvider: React.FC<{ themeId: string; children: React.ReactNode }> = ({ themeId, children }) => {
  const currentTheme = THEMES[themeId] || THEMES.MINT;

  // Menyuntikkan CSS Variables ke element style pembungkus dinamis
  const inlineVars = {
    "--color-bg": currentTheme.bg,
    "--color-bg-panel": currentTheme.bgPanel,
    "--color-bg-hover": currentTheme.bgHover,
    "--color-primary": currentTheme.primary,
    "--color-dim": currentTheme.dim,
    "--color-ghost": currentTheme.ghost,
    "--color-secondary": currentTheme.secondary,
    "--color-accent": currentTheme.accent,
    "--color-danger": currentTheme.danger,
    "--color-white": currentTheme.white,
    "--color-gray": currentTheme.gray,
    "--color-scan": currentTheme.scanColor,
  } as React.CSSProperties;

  return (
    <ThemeCtx.Provider value={currentTheme}>
      <div 
        style={inlineVars} 
        className="bg-[var(--color-bg)] text-[var(--color-white)] min-h-screen select-none font-mono transition-colors duration-500 ease-in-out"
      >
        {children}
      </div>
    </ThemeCtx.Provider>
  );
};