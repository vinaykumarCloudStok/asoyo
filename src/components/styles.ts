import { T } from "./tokens";


export const globalStyles = `
/* ── Reset & Base ── */
.ascoyo-root { font-family: 'Plus Jakarta Sans', sans-serif; color: ${T.onSurface}; background: ${T.surfaceLowest}; -webkit-font-smoothing: antialiased; }
.ascoyo-root * { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
::selection { background: ${T.primaryContainer}25; }

/* ── Pulse ── */
.pulse-wrap { position: relative; display: inline-flex; flex-shrink: 0; }
.pulse-ring { position: absolute; inset: 0; border-radius: 50%; animation: pulseanim 2s cubic-bezier(0,0,0.2,1) infinite; }
.pulse-dot { position: relative; border-radius: 50%; }
@keyframes pulseanim { 75%,100% { transform: scale(2.2); opacity: 0; } }

/* ── Nav ── */
.nav-shell { position: fixed; top: 0; left: 0; right: 0; z-index: 50; height: 64px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); transition: all 0.5s ${T.ease}; }
.nav-inner { max-width: 1440px; margin: 0 auto; padding: 0 32px; height: 100%; display: flex; align-items: center; justify-content: space-between; }
.nav-brand { display: flex; align-items: center; gap: 10px; }
.nav-logo-mark { width: 30px; height: 30px; background: ${T.primaryContainer}; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 15px; line-height: 1; }
.nav-logo-text { font-size: 17px; font-weight: 700; color: ${T.onSurface}; letter-spacing: -0.02em; }
.nav-links { display: flex; gap: 30px; }
.nav-link { font-size: 14px; font-weight: 500; color: ${T.onSurfaceVariant}; text-decoration: none; transition: color 0.3s ${T.ease}; letter-spacing: -0.01em; }
.nav-link:hover { color: ${T.primary}; }
.nav-actions { display: flex; align-items: center; gap: 14px; }
.btn-ghost { background: none; border: none; font-size: 14px; font-weight: 600; color: ${T.onSurfaceVariant}; cursor: pointer; font-family: inherit; }
.btn-ghost:hover { color: ${T.primary}; }
.btn-primary-sm { background: ${T.primaryContainer}; color: #fff; border: none; padding: 9px 18px; border-radius: 9px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; transition: all 0.3s ${T.ease}; }
.btn-primary-sm:hover { background: ${T.primary}; }

/* ── Buttons ── */
.btn-primary { height: 48px; padding: 0 28px; background: ${T.primaryContainer}; color: #fff; border: none; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-family: inherit; box-shadow: 0 4px 16px rgba(37,99,235,0.2); transition: all 0.3s ${T.ease}; }
.btn-primary:hover { background: ${T.primary}; box-shadow: 0 6px 20px rgba(37,99,235,0.28); transform: translateY(-1px); }
.btn-secondary { height: 48px; padding: 0 28px; background: transparent; color: ${T.onSurfaceVariant}; border: 1px solid ${T.outlineVariant}50; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; font-family: inherit; transition: all 0.3s ${T.ease}; }
.btn-secondary:hover { background: ${T.surfaceLow}; }

/* ── Hero ── */
.hero-grid { display: grid; grid-template-columns: 55% 45%; gap: 48px; align-items: start; }
.hero-left { display: flex; flex-direction: column; gap: 24px; padding-top: 12px; }
.hero-pill { display: inline-flex; align-items: center; gap: 8px; padding: 5px 14px; background: #EFF6FF; border-radius: 6px; align-self: flex-start; }
.hero-pill span { font-size: 11px; font-weight: 700; color: ${T.primaryContainer}; text-transform: uppercase; letter-spacing: 0.05em; }
.hero-h1 { font-size: 56px; font-weight: 800; line-height: 1.08; letter-spacing: -0.03em; color: ${T.onSurface}; }
.hero-sub { font-size: 17px; line-height: 1.65; color: ${T.onSurfaceVariant}; max-width: 480px; }
.hero-ctas { display: flex; gap: 12px; align-items: center; }
.hero-proof { margin-top: 20px; }
.hero-proof-label { font-size: 12px; font-weight: 600; color: ${T.outline}; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 14px; }
.hero-logos { display: flex; gap: 26px; align-items: center; opacity: 0.35; }
.hero-logo-text { font-size: 16px; font-weight: 700; color: ${T.onSurface}; }

/* ── Mockup ── */
.hero-right { perspective: 1000px; }
.mockup-frame { transform: rotateY(-2deg); background: ${T.surfaceLowest}; border-radius: 16px; overflow: hidden; box-shadow: ${T.shadowXl}; }
.mockup-chrome { height: 38px; background: ${T.surfaceLow}; display: flex; align-items: center; padding: 0 14px; gap: 14px; }
.chrome-dots { display: flex; gap: 5px; }
.chrome-dots i { display: block; width: 9px; height: 9px; border-radius: 50%; }
.chrome-url { margin: 0 auto; display: flex; align-items: center; gap: 5px; font-size: 11px; color: ${T.outline}; font-weight: 500; }
.mockup-body { padding: 20px; display: flex; flex-direction: column; gap: 14px; }
.mock-header h2 { font-size: 17px; font-weight: 700; color: ${T.onSurface}; }
.mock-header p { font-size: 12px; color: ${T.outline}; margin-top: 3px; }
.agent-card { padding: 12px; background: ${T.surfaceLowest}; border-radius: 10px; border: 1px solid ${T.surfaceLow}; display: flex; gap: 10px; cursor: pointer; transition: background 0.25s ${T.ease}; }
.agent-card:hover { background: ${T.surfaceLow}; }
.agent-dot { width: 7px; height: 7px; border-radius: 50%; margin-top: 5px; flex-shrink: 0; }
.agent-card-body { flex: 1; }
.agent-card-head { display: flex; justify-content: space-between; margin-bottom: 4px; }
.agent-card-head span:first-child { font-size: 11px; font-weight: 700; }
.agent-time { font-size: 10px; color: ${T.outline}; }
.agent-card-body p { font-size: 12px; color: ${T.onSurface}; line-height: 1.4; }
.mock-pipeline { margin-top: 6px; background: ${T.surfaceLow}; padding: 14px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; }
.pipe-label { font-size: 9px; font-weight: 700; color: ${T.outline}; text-transform: uppercase; letter-spacing: 0.08em; }
.pipe-val { font-size: 18px; font-weight: 700; color: ${T.onSurface}; }

/* ── Section Typography ── */
.sec-h2 { font-size: 44px; font-weight: 800; line-height: 1.1; letter-spacing: -0.025em; color: ${T.onSurface}; text-align: center; }
.sec-sub { font-size: 15px; color: ${T.onSurfaceVariant}; margin-top: 14px; max-width: 520px; margin-left: auto; margin-right: auto; text-align: center; line-height: 1.55; }

/* ── Agents Grid ── */
.agents-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
.agent-tile { background: ${T.surfaceLowest}; border-radius: 16px; padding: 22px; cursor: pointer; transition: all 0.4s ${T.ease}; }
.agent-tile:hover { transform: translateY(-3px); box-shadow: ${T.shadow}; }
.tile-icon { width: 42px; height: 42px; border-radius: 11px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.tile-title { font-size: 15px; font-weight: 700; color: ${T.onSurface}; margin-bottom: 7px; }
.tile-desc { font-size: 13px; color: ${T.onSurfaceVariant}; line-height: 1.5; }
.tile-tag { margin-top: 14px; display: flex; align-items: center; gap: 6px; }
.tile-tag span { font-size: 10px; font-weight: 700; letter-spacing: 0.04em; font-family: 'JetBrains Mono', monospace; }

/* ── Chain ── */
.chain-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: ${T.surfaceLow}; border-radius: 20px; margin-bottom: 18px; }
.chain-badge span { font-size: 11px; font-family: 'JetBrains Mono', monospace; font-weight: 500; color: ${T.onSurfaceVariant}; text-transform: uppercase; letter-spacing: 0.04em; }
.timeline { position: relative; max-width: 660px; margin: 0 auto; }
.timeline-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: ${T.outlineVariant}30; transform: translateX(-50%); }
.tl-row { display: flex; align-items: flex-start; margin-bottom: 40px; position: relative; }
.tl-circle { width: 34px; height: 34px; border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; z-index: 2; flex-shrink: 0; }
.tl-card-wrap, .tl-spacer { flex: 1; }
.tl-card { background: ${T.surfaceLowest}; border-radius: 14px; padding: 18px; max-width: 250px; }
.tl-left .tl-card-wrap { text-align: right; padding-right: 28px; display: flex; justify-content: flex-end; }
.tl-left .tl-spacer { padding-left: 28px; }
.tl-right .tl-card-wrap { order: 3; padding-left: 28px; }
.tl-right .tl-circle { order: 2; }
.tl-right .tl-spacer { order: 1; padding-right: 28px; }
.tl-left .tl-card { text-align: left; }
.tl-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 5px; }
.tl-title { font-size: 15px; font-weight: 700; color: ${T.onSurface}; margin-bottom: 5px; }
.tl-desc { font-size: 12px; color: ${T.onSurfaceVariant}; line-height: 1.5; margin-bottom: 10px; }
.tl-time { display: flex; align-items: center; gap: 6px; }
.tl-time span { font-size: 11px; font-family: 'JetBrains Mono', monospace; font-weight: 500; }
.chain-summary { max-width: 620px; margin: 16px auto 0; padding: 20px 24px; background: ${T.surfaceLowest}; border-radius: 14px; border-left: 3px solid #059669; box-shadow: ${T.shadow}; text-align: center; font-size: 14px; font-weight: 500; color: ${T.onSurface}; line-height: 1.6; }

/* ── Industry ── */
.ind-grid { display: grid; grid-template-columns: 280px 1fr; gap: 28px; max-width: 860px; margin: 0 auto; }
.ind-left { background: ${T.surfaceLowest}; border-radius: 16px; padding: 22px; box-shadow: ${T.shadow}; }
.ind-label { font-size: 10px; font-weight: 700; color: ${T.outline}; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 14px; }
.ind-opt { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 1px solid ${T.outlineVariant}30; background: ${T.surfaceLowest}; cursor: pointer; width: 100%; font-family: inherit; font-size: 13px; font-weight: 600; color: ${T.onSurface}; text-align: left; transition: all 0.2s ${T.ease}; margin-bottom: 6px; }
.ind-active { border: 2px solid ${T.primaryContainer}; background: #EFF6FF; }
.ind-controls { margin-top: 18px; }
.ind-controls-label { font-size: 11px; font-weight: 700; color: ${T.onSurface}; display: block; margin-bottom: 10px; }
.ind-toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 7px 0; font-size: 12px; color: ${T.onSurfaceVariant}; }
.toggle { width: 34px; height: 18px; border-radius: 9px; background: ${T.outlineVariant}40; position: relative; cursor: pointer; transition: background 0.2s; }
.toggle.on { background: ${T.primaryContainer}; }
.toggle-thumb { width: 14px; height: 14px; border-radius: 50%; background: #fff; position: absolute; top: 2px; left: 2px; transition: left 0.2s ${T.ease}; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.toggle.on .toggle-thumb { left: 18px; }
.ind-right { background: ${T.surfaceLow}; border-radius: 16px; padding: 36px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.ind-morph-icon { width: 52px; height: 52px; border-radius: 14px; background: ${T.primaryContainer}0D; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
.ind-morph-title { font-size: 22px; font-weight: 800; color: ${T.onSurface}; letter-spacing: -0.02em; margin-bottom: 10px; }
.ind-morph-desc { font-size: 14px; color: ${T.onSurfaceVariant}; max-width: 320px; line-height: 1.5; margin-bottom: 22px; }
.ind-modules { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
.ind-mod-card { background: ${T.surfaceLowest}; border-radius: 10px; padding: 14px; text-align: left; }
.ind-mod-id { font-size: 10px; font-weight: 700; color: ${T.outline}; text-transform: uppercase; letter-spacing: 0.04em; display: block; }
.ind-mod-name { font-size: 13px; font-weight: 600; color: ${T.onSurface}; margin-top: 3px; display: block; }

/* ── Compliance ── */
.comp-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 48px; margin-bottom: 40px; }
.comp-header .sec-h2 { text-align: left; }
.comp-badges { display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; }
.comp-badge { padding: 8px 16px; background: ${T.surfaceLow}; border-radius: 10px; font-size: 13px; font-weight: 600; color: ${T.onSurface}; white-space: nowrap; }
.comp-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.comp-card { background: ${T.surfaceLowest}; border-radius: 16px; padding: 22px; }
.comp-card h4 { font-size: 15px; font-weight: 700; color: ${T.onSurface}; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
.comp-dot { width: 6px; height: 6px; border-radius: 50%; background: #059669; flex-shrink: 0; }
.comp-card p { font-size: 13px; color: ${T.onSurfaceVariant}; line-height: 1.55; }
.comp-card-art { height: 100px; margin-top: 14px; border-radius: 10px; background: ${T.inverseSurface}; opacity: 0.06; }

/* ── Footer ── */
.footer { background: ${T.surfaceLow}; padding: 56px 0 28px; }
.footer-inner { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
.footer-about { font-size: 13px; color: ${T.onSurfaceVariant}; line-height: 1.6; max-width: 220px; }
.footer-col-title { font-size: 11px; font-weight: 700; color: ${T.outline}; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px; }
.footer-link { display: block; font-size: 13px; color: ${T.onSurfaceVariant}; text-decoration: none; margin-bottom: 9px; transition: color 0.2s; }
.footer-link:hover { color: ${T.primary}; }
.footer-bottom { border-top: 1px solid ${T.outlineVariant}20; padding-top: 20px; display: flex; justify-content: space-between; align-items: center; }
.footer-bottom p { font-size: 12px; color: ${T.outline}; }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-right { display: none; }
  .agents-grid { grid-template-columns: repeat(3, 1fr); }
  .comp-cards { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .hero-h1 { font-size: 38px; }
  .sec-h2 { font-size: 32px; }
  .agents-grid { grid-template-columns: 1fr 1fr; }
  .ind-grid { grid-template-columns: 1fr; }
  .comp-header { flex-direction: column; }
  .comp-cards { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .tl-row { flex-direction: column; align-items: center; }
  .tl-card-wrap, .tl-spacer { padding: 12px 0 !important; text-align: center !important; display: flex !important; justify-content: center !important; order: 2 !important; }
  .tl-circle { order: 1 !important; }
  .tl-spacer { display: none !important; }
}
`;
