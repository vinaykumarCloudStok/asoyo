import React from "react";
import { T } from "./tokens";
import { ChainBadge, Eye, Icon, Pulse, Sec } from "./primitives";


interface TimelineStep {
  n: number;
  label: string;
  title: string;
  desc: string;
  time: string;
  color: string;
}

const STEPS: TimelineStep[] = [
  {
    n: 1,
    label: "TRIGGER",
    title: "Rep finishes product demo on Zoom",
    desc: "Intelligence gathering initiated automatically upon call disconnection.",
    time: "T+0:00",
    color: "#059669",
  },
  {
    n: 2,
    label: "MEETING INTELLIGENCE",
    title: "6 data points extracted",
    desc: "BANT fields identified. Budget confirmed, Authority verified, Timeline within 3 months.",
    time: "T+2:00",
    color: T.primaryContainer,
  },
  {
    n: 3,
    label: "FOLLOW-UP AGENT",
    title: "2 commitments become tasks",
    desc: "Drafted follow-up email and added 'Send security whitepaper' to CRM task list.",
    time: "T+2:30",
    color: "#D97706",
  },
  {
    n: 4,
    label: "LEAD SCORING",
    title: "Score jumps 64 → 78",
    desc: "Intent signals recalculated based on technical depth of demo questions.",
    time: "T+3:00",
    color: T.secondary,
  },
  {
    n: 5,
    label: "DEAL COACH",
    title: "Objection flagged",
    desc: "Compliance concern detected. Next brief updated with specialised rebuttal assets.",
    time: "T+4:00",
    color: "#D97706",
  },
  {
    n: 6,
    label: "OUTCOME",
    title: "Rep reviews for 45s",
    desc: "Accepting all agent suggestions with a single click. Pipeline perfectly synced.",
    time: "T+5:00",
    color: "#059669",
  },
];

export const Chain: React.FC = () => (
  <Sec bg={T.surfaceLowest}>
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <Eye color={T.outline}>The chain effect</Eye>
      <ChainBadge style={{ display: "inline-flex", marginBottom: 18 }}>
        <Icon n="schedule" s={14} c={T.outline} />
        <span>Time Elapsed: T+5:00</span>
      </ChainBadge>
      <h2 className="sec-h2">
        One meeting. Five agents. Zero
        <br />
        manual entry.
      </h2>
      <p className="sec-sub">
        When a meeting ends, Ascoyo's Meeting Intelligence Agent triggers a
        cascade across your entire system. Here's what happens in under 5
        minutes.
      </p>
    </div>

    <div className="timeline">
      <div className="timeline-line" />
      {STEPS.map((step, i) => (
        <div key={step.n} className={`tl-row ${i % 2 === 0 ? "tl-left" : "tl-right"}`}>
          <div className="tl-card-wrap">
            <div className="tl-card" style={{ boxShadow: T.shadow }}>
              <span className="tl-label" style={{ color: step.color }}>
                {step.label}
              </span>
              <h4 className="tl-title">{step.title}</h4>
              <p className="tl-desc">{step.desc}</p>
              <div className="tl-time">
                <Pulse color={step.color} size={5} />
                <span style={{ color: step.color }}>{step.time}</span>
              </div>
            </div>
          </div>
          <div
            className="tl-circle"
            style={{
              background: step.color,
              boxShadow: `0 0 0 4px ${T.surfaceLowest}, 0 0 0 6px ${step.color}30`,
            }}
          >
            {step.n}
          </div>
          <div className="tl-spacer" />
        </div>
      ))}
    </div>

    <div className="chain-summary">
      Total system updates: 4 agents recalculated · 2 tasks created · 1
      objection tracked · 1 BANT field updated ·{" "}
      <strong style={{ color: T.primaryContainer }}>
        0 forms filled by the rep
      </strong>
    </div>
  </Sec>
);
