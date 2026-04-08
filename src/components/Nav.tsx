import React from "react";
import { T } from "./tokens";


interface NavProps {
  scrolled: boolean;
}

export const Nav: React.FC<NavProps> = ({ scrolled }) => (
  <header
    className="nav-shell"
    style={{
      background: scrolled
        ? "rgba(255,255,255,0.78)"
        : "rgba(250,248,255,0.5)",
      borderBottom: scrolled
        ? `1px solid ${T.outlineVariant}22`
        : "1px solid transparent",
    }}
  >
    <div className="nav-inner">
      <div className="nav-brand">
        <div className="nav-logo-mark">A</div>
        <span className="nav-logo-text">Ascoyo</span>
      </div>
      <nav className="nav-links">
        {(["Product", "Solutions", "Pricing", "Compliance"] as const).map(
          (label) => (
            <a key={label} href={`#${label.toLowerCase()}`} className="nav-link">
              {label}
            </a>
          )
        )}
      </nav>
      <div className="nav-actions">
        <button className="btn-ghost">Login</button>
        <button className="btn-primary-sm">Get Started</button>
      </div>
    </div>
  </header>
);
