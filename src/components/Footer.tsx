import React from "react";
import { Icon } from "./primitives";
import { T } from "./tokens";


interface FooterColumn {
  t: string;
  l: string[];
}

const COLUMNS: FooterColumn[] = [
  { t: "PRODUCT", l: ["Agents", "Pricing", "Integrations"] },
  { t: "SOLUTIONS", l: ["IT Services", "Consulting", "SaaS"] },
  { t: "COMPANY", l: ["Security", "Compliance", "Status"] },
  { t: "LEGAL", l: ["Privacy", "Terms", "Compliance"] },
];

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <div className="nav-brand" style={{ marginBottom: 12 }}>
            <div
              className="nav-logo-mark"
              style={{ width: 26, height: 26, fontSize: 13 }}
            >
              A
            </div>
            <span className="nav-logo-text" style={{ fontSize: 15 }}>
              Ascoyo
            </span>
          </div>
          <p className="footer-about">
            Built for the intelligent enterprise. Automating operations with
            rigorous compliance and agentic intelligence.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.t} className="footer-col">
            <p className="footer-col-title">{col.t}</p>
            {col.l.map((link) => (
              <a key={link} href="#" className="footer-link">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ascoyo Technologies Inc. Built for the intelligent enterprise.</p>
        <div style={{ display: "flex", gap: 14 }}>
          <Icon n="language" s={16} c={T.outline} />
          <Icon n="lock" s={16} c={T.outline} />
        </div>
      </div>
    </div>
  </footer>
);
