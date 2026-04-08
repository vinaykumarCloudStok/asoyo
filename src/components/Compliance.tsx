import React from "react";
import { T } from "./tokens";
import { ChainBadge, Eye, Pulse, Sec } from "./primitives";

interface ComplianceCard {
  t: string;
  d: string;
}

const CARDS: ComplianceCard[] = [
  {
    t: "Granular Consent",
    d: "Automated per-purpose consent management that maps every data point to specific user authorization, ensuring full DPDP alignment.",
  },
  {
    t: "Data Rights Portal",
    d: "Self-service infrastructure for users to exercise data portability and erasure rights with automated SLA tracking and audit trails.",
  },
  {
    t: "AI Consent Gates",
    d: "Every agentic action is preceded by a millisecond-level check of the user's latest consent status before processing personal data.",
  },
  {
    t: "DPO Dashboard",
    d: "A command center for Data Protection Officers to view real-time compliance health, audit logs, and regional residency status.",
  },
];

const BADGES = [
  "🇮🇳 DPDP Act 2023",
  "🏥 HIPAA Ready",
  "🔐 AES-256 at Rest",
  "🛡️ TLS 1.3 in Transit",
];

export const Compliance: React.FC = () => (
  <Sec id="compliance" bg={T.surfaceLowest}>
    <div className="comp-header">
      <div>
        <Eye color="#059669">Compliance built-in</Eye>
        <h2 className="sec-h2" style={{ textAlign: "left" }}>
          Enterprise Grade
          <br />
          Security & Compliance
        </h2>
        <p
          style={{
            fontSize: 15,
            color: T.onSurfaceVariant,
            lineHeight: 1.6,
            marginTop: 14,
            maxWidth: 460,
          }}
        >
          Your data is governed by the highest global standards. We are built for
          mission-critical operations in regulated industries.
        </p>
      </div>
      <div className="comp-badges">
        {BADGES.map((badge) => (
          <div key={badge} className="comp-badge">
            {badge}
          </div>
        ))}
      </div>
    </div>

    <div className="comp-cards">
      {CARDS.map((card) => (
        <div key={card.t} className="comp-card">
          <h4>
            <span className="comp-dot" />
            {card.t}
          </h4>
          <p>{card.d}</p>
          <div className="comp-card-art" />
        </div>
      ))}
    </div>

    <div style={{ textAlign: "center", marginTop: 48 }}>
      <ChainBadge style={{ display: "inline-flex" }}>
        <Pulse color="#059669" size={6} />
        <span>Active monitoring: 32 global compliance frameworks</span>
      </ChainBadge>
    </div>
  </Sec>
);
