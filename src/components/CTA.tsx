import React from "react";
import { ChainBadge, Pulse, Sec } from "./primitives";
import { T } from "./tokens";


export const CTA: React.FC = () => (
  <Sec bg={T.inverseSurface}>
    <div style={{ textAlign: "center" }}>
      <ChainBadge
        style={{
          display: "inline-flex",
          background: "rgba(255,255,255,0.06)",
          marginBottom: 20,
        }}
      >
        <Pulse />
        <span style={{ color: "rgba(255,255,255,0.5)" }}>
          Active automation engine
        </span>
      </ChainBadge>

      <h2
        style={{
          fontSize: 40,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          color: "#fff",
          margin: "0 0 14px",
        }}
      >
        Ready to let your CRM work for you?
      </h2>
      <p
        style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.5)",
          margin: "0 auto 32px",
          maxWidth: 400,
        }}
      >
        Join 500+ enterprises who have regained 12 hours of selling time per
        week.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <button className="btn-primary">Start your free trial</button>
        <button
          className="btn-secondary"
          style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)", background: "transparent" }}
        >
          Contact Sales
        </button>
      </div>
    </div>
  </Sec>
);
