export interface ThemeProperties {
  id: string;
  label: string;
  desc: string;
  swatch: string;
  bg: string;
  bgPanel: string;
  bgHover: string;
  primary: string;
  dim: string;
  ghost: string;
  secondary: string;
  accent: string;
  danger: string;
  white: string;
  gray: string;
  scanColor: string;
}

export type ThemeType = "ROSE" | "MINT" | "LILAC" | "PEACH";