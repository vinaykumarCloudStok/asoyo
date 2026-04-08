import React, { useState } from "react";
import { Eye, Icon, Sec } from "./primitives";
import { T } from "./tokens";


type IndustryId = "it" | "prof";

interface IndustryOption {
  id: IndustryId;
  icon: string;
  name: string;
}

interface ModuleCard {
  id: string;
  name: string;
}

interface ToggleItem {
  label: string;
  enabled: boolean;
}

const INDUSTRY_OPTIONS: IndustryOption[] = [
  { id: "it", icon: "dns", name: "IT Services" },
  { id: "prof", icon: "layers", name: "Professional Services" },
];

const MODULE_CARDS: ModuleCard[] = [
  { id: "Module 01", name: "Contract Value AI" },
  { id: "Module 02", name: "Bench Analytics" },
];

const TOGGLE_ITEMS: ToggleItem[] = [
  { label: "CLP Tracking", enabled: true },
  { label: "Project Profitability", enabled: true },
  { label: "Consulting Agents", enabled: false },
];

export const Industry: React.FC = () => {
  const [sel, setSel] = useState<IndustryId>("it");

  return (
    <Sec id="solutions" bg={T.surface}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Eye color={T.secondary}>Personalised from day one</Eye>
        <h2 className="sec-h2">Adapts to your Industry</h2>
        <p className="sec-sub">
          The CRM that understands the nuances of how you sell, whether you're in
          IT Services or Professional Services.
        </p>
      </div>

      <div className="ind-grid">
        {/* Left panel */}
        <div className="ind-left">
          <span className="ind-label">Industry template</span>

          {INDUSTRY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              className={`ind-opt ${sel === opt.id ? "ind-active" : ""}`}
              onClick={() => setSel(opt.id)}
            >
              <Icon
                n={opt.icon}
                s={18}
                c={sel === opt.id ? T.primaryContainer : T.outline}
              />
              <span>{opt.name}</span>
              {sel === opt.id && (
                <Icon
                  n="check_circle"
                  fill
                  s={18}
                  c={T.primaryContainer}
                  style={{ marginLeft: "auto" }}
                />
              )}
            </button>
          ))}

          <div className="ind-controls">
            <span className="ind-controls-label">Module Controls</span>
            {TOGGLE_ITEMS.map((item) => (
              <div key={item.label} className="ind-toggle-row">
                <span>{item.label}</span>
                <div className={`toggle ${item.enabled ? "on" : ""}`}>
                  <div className="toggle-thumb" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="ind-right">
          <div className="ind-morph-icon">
            <Icon n="bolt" fill s={28} c={T.primaryContainer} />
          </div>
          <h3 className="ind-morph-title">Morphing into IT Services Mode</h3>
          <p className="ind-morph-desc">
            We've pre-configured your pipeline for RFP tracking, MSA renewals,
            and technical staffing workflows.
          </p>
          <div className="ind-modules">
            {MODULE_CARDS.map((mod) => (
              <div key={mod.id} className="ind-mod-card">
                <span className="ind-mod-id">{mod.id}</span>
                <span className="ind-mod-name">{mod.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sec>
  );
};
