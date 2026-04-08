export const T = {
  primary: "#004ac6",
  primaryContainer: "#2563eb",
  secondary: "#712ae2",
  secondaryContainer: "#8a4cfc",
  surface: "#faf8ff",
  surfaceLow: "#f2f3ff",
  surfaceLowest: "#ffffff",
  surfaceHigh: "#e2e7ff",
  surfaceHighest: "#dae2fd",
  surfaceContainer: "#eaedff",
  onSurface: "#131b2e",
  onSurfaceVariant: "#434655",
  outline: "#737686",
  outlineVariant: "#c3c6d7",
  inverseSurface: "#283044",
  gradient: "linear-gradient(135deg, #2563EB, #7C3AED)",
  shadow: "0 1px 3px rgba(19,27,46,0.04), 0 4px 12px rgba(19,27,46,0.03)",
  shadowXl: "0 24px 64px rgba(19,27,46,0.12), 0 4px 12px rgba(19,27,46,0.04)",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export type Token = typeof T;
