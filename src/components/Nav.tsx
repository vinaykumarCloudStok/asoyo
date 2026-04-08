import React, { useState } from "react";
import { T } from "./tokens";

interface NavProps {
  scrolled: boolean;
}

export const Nav: React.FC<NavProps> = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="nav-shell"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        borderBottom: scrolled
          ? `1px solid ${T.outlineVariant}30`
          : "1px solid transparent",
        boxShadow: scrolled ? T.shadow : "none"
      }}
    >
      <div className="nav-inner">
        {/* Brand */}
        <div className="nav-brand">
          <div className="nav-logo-mark">A</div>
          <span className="nav-logo-text">Ascoyo</span>
        </div>

        {/* Desktop Links */}
        <nav className="nav-links">
          {(["Product", "Solutions", "Pricing", "Compliance"] as const).map(
            (label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="nav-link">
                {label}
              </a>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button className="btn-ghost">Login</button>
          <button className="btn-primary-sm">Get Started</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {(["Product", "Solutions", "Pricing", "Compliance"] as const).map(
          (label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          )
        )}

        <div className="mobile-actions">
          <button className="btn-ghost">Login</button>
          <button className="btn-primary-sm">Get Started</button>
        </div>
      </div>
    </header>
  );
};