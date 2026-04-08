import React from "react";
import { T } from "./tokens";
import { Icon, Pulse, Sec } from "./primitives";


interface AgentCardItem {
  color: string;
  label: string;
  text: React.ReactNode;
  time: string;
}

const AGENT_CARDS: AgentCardItem[] = [
  {
    color: T.primaryContainer,
    label: "Account Intelligence",
    text: (
      <>
        Hiring surge at <b>BrightWave</b> — 12 new IT roles posted
      </>
    ),
    time: "2 min ago",
  },
  {
    color: T.secondary,
    label: "Lead Scoring",
    text: (
      <>
        <b>Priya Sharma</b> score jumped to 84 (Hot) after demo attendance
      </>
    ),
    time: "18 min ago",
  },
  {
    color: "#D97706",
    label: "Deal Coach",
    text: (
      <>
        Pre-call brief ready for <b>Meridian</b> CTO meeting at 2pm
      </>
    ),
    time: "1 hr ago",
  },
];

const LOGOS = ["HINDUSTAN", "Vanguard.", "SOLARIS", "Equifax", "APEX CORP"];

const ProductMockup: React.FC = () => (
  <div className="hero-right">
    <div className="mockup-frame">
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <i style={{ background: "#FCA5A5" }} />
          <i style={{ background: "#FCD34D" }} />
          <i style={{ background: "#86EFAC" }} />
        </div>
        <div className="chrome-url">
          <Pulse color="#10B981" size={5} />
          <Icon n="lock" s={12} c={T.outline} />
          <span>Ascoyo — Dashboard</span>
        </div>
      </div>
      <div className="mockup-body">
        <div className="mock-header">
          <h2>Good morning, Alex</h2>
          <p>Here's what your agents found today</p>
        </div>
        {AGENT_CARDS.map((card, i) => (
          <div key={i} className="agent-card">
            <div className="agent-dot" style={{ background: card.color }} />
            <div className="agent-card-body">
              <div className="agent-card-head">
                <span style={{ color: card.color }}>{card.label}</span>
                <span className="agent-time">{card.time}</span>
              </div>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
        <div className="mock-pipeline">
          <div>
            <span className="pipe-label">AGENT STATUS</span>
            <span className="pipe-label" style={{ marginLeft: 6, color: "#059669" }}>
              LIVE
            </span>
          </div>
          <div className="pipe-val">₹2.4Cr</div>
        </div>
      </div>
    </div>
  </div>
);

export const Hero: React.FC = () => (
  <Sec bg={T.surfaceLowest}>
    <div className="hero-grid">
      <div className="hero-left">
        <div className="hero-pill">
          <Pulse />
          <span>The Agentic CRM Platform</span>
        </div>

        <h1 className="hero-h1">
          The CRM that works
          <br />
          while you sell.
        </h1>

        <p className="hero-sub">
          Stop manually logging data. Ascoyo's enterprise agents autonomously
          capture intelligence, score leads, and coach your deals in real-time.
        </p>

        <div className="hero-ctas">
          <button className="btn-primary">
            Start Free Trial <Icon n="arrow_forward" s={18} c="#fff" />
          </button>
          <button className="btn-secondary">Book Demo</button>
        </div>

        <div className="hero-proof">
          <span className="hero-proof-label">Trusted by global B2B enterprises</span>
          <div className="hero-logos">
            {LOGOS.map((name) => (
              <span key={name} className="hero-logo-text">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProductMockup />
    </div>
  </Sec>
);
