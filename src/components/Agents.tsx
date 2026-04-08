import React from "react";
import { T } from "./tokens";
import { Eye, Icon, Pulse, Sec } from "./primitives";



interface AgentTile {
  icon: string;
  label: string;
  desc: string;
  color: string;
  tag: string;
}

const AGENTS: AgentTile[] = [
  {
    icon: "auto_awesome",
    label: "Account Intel",
    desc: "Surfaces news, hiring, funding, and tech changes for target accounts.",
    color: T.primaryContainer,
    tag: "MONITORING",
  },
  {
    icon: "monitoring",
    label: "Lead Scoring",
    desc: "Prioritizes leads based on engagement signal and ICP fit automatically.",
    color: T.secondary,
    tag: "SCORING",
  },
  {
    icon: "psychology",
    label: "Deal Coach",
    desc: "Identifies deal blockers and recommends next-best actions to every deal.",
    color: "#D97706",
    tag: "ADVISING",
  },
  {
    icon: "mic",
    label: "Meeting Intel",
    desc: "Turns live and archived calls to extract intel from every sales meeting.",
    color: "#059669",
    tag: "CAPTURING",
  },
  {
    icon: "group",
    label: "Relationship Score",
    desc: "Calculates account health based on communication engagement data.",
    color: "#DB2777",
    tag: "ANALYSING",
  },
];

export const Agents: React.FC = () => (
  <Sec id="product" bg={T.surface}>
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <Eye color={T.onSurfaceVariant}>How it works</Eye>
      <h2 className="sec-h2">A Team of Autonomous Agents</h2>
      <p className="sec-sub">
        Five specialised agents work in tandem to eliminate 80% of your
        administrative burden.
      </p>
    </div>
    <div className="agents-grid">
      {AGENTS.map((agent) => (
        <div key={agent.label} className="agent-tile">
          <div
            className="tile-icon"
            style={{ background: `${agent.color}0D` }}
          >
            <Icon n={agent.icon} fill s={22} c={agent.color} />
          </div>
          <h3 className="tile-title">{agent.label}</h3>
          <p className="tile-desc">{agent.desc}</p>
          <div className="tile-tag">
            <Pulse color={agent.color} size={5} />
            <span style={{ color: agent.color }}>{agent.tag}</span>
          </div>
        </div>
      ))}
    </div>
  </Sec>
);
