import React, { type CSSProperties } from "react";
import { T } from "./tokens";


// ─── Icon ───────────────────────────────────────────────────────────────────

interface IconProps {
  n: string;
  fill?: boolean;
  s?: number;
  c?: string;
  style?: CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ n, fill = false, s = 20, c, style: sx }) => (
  <span
    className="material-symbols-outlined"
    style={{
      fontSize: s,
      color: c,
      fontVariationSettings: fill
        ? "'FILL' 1, 'wght' 400"
        : "'FILL' 0, 'wght' 400",
      ...sx,
    }}
  >
    {n}
  </span>
);

// ─── Pulse ───────────────────────────────────────────────────────────────────

interface PulseProps {
  color?: string;
  size?: number;
}

export const Pulse: React.FC<PulseProps> = ({
  color = T.primaryContainer,
  size = 6,
}) => (
  <span className="pulse-wrap" style={{ width: size, height: size }}>
    <span className="pulse-ring" style={{ backgroundColor: color }} />
    <span
      className="pulse-dot"
      style={{ backgroundColor: color, width: size, height: size }}
    />
  </span>
);

// ─── Section Shell ───────────────────────────────────────────────────────────

interface SecProps {
  id?: string;
  bg?: string;
  children: React.ReactNode;
  py?: string;
}

export const Sec: React.FC<SecProps> = ({
  id,
  bg = T.surfaceLowest,
  children,
  py,
}) => (
  <section id={id} style={{ background: bg }} className="sec-shell">
    <div className="sec-inner" style={py ? { padding: py } : undefined}>
      {children}
    </div>
  </section>
);

// ─── Eyebrow Label ───────────────────────────────────────────────────────────

interface EyeProps {
  children: React.ReactNode;
  color?: string;
}

export const Eye: React.FC<EyeProps> = ({
  children,
  color = T.primaryContainer,
}) => (
  <p
    style={{
      fontSize: 11,
      fontWeight: 700,
      color,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      marginBottom: 14,
    }}
  >
    {children}
  </p>
);

// ─── Chain Badge ─────────────────────────────────────────────────────────────

interface ChainBadgeProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

export const ChainBadge: React.FC<ChainBadgeProps> = ({ children, style }) => (
  <div className="chain-badge" style={style}>
    {children}
  </div>
);
