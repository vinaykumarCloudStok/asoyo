import { T } from "./tokens";

export const globalStyles = `

/* ── Reset & Base ── */
.ascoyo-root {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: ${T.onSurface};
  background: ${T.surfaceLowest};
  -webkit-font-smoothing: antialiased;
}
.ascoyo-root * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html { scroll-behavior: smooth; }
body { overflow-x: hidden; }

::selection { background: ${T.primaryContainer}25; }

img, video {
  max-width: 100%;
  height: auto;
}

button {
  min-height: 44px;
  border: none;
  font-family: inherit;
  transition: all 0.2s ${T.ease};
}

/* ── Primitives ── */
.sec-shell {
  width: 100%;
}
.sec-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 32px;
}

@media (max-width: 768px) {
  .sec-inner {
    padding: 64px 20px;
  }
}

.pulse-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}
.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: pulse 2s infinite;
  opacity: 0.4;
}
.pulse-dot {
  border-radius: 50%;
  z-index: 1;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.4; }
  70% { transform: scale(3); opacity: 0; }
  100% { transform: scale(3); opacity: 0; }
}

.chain-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: ${T.surfaceHigh}40;
  border: 1px solid ${T.outlineVariant}30;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  color: ${T.onSurfaceVariant};
}

/* ── Nav ── */
.nav-shell {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 72px;
  backdrop-filter: blur(20px);
  transition: all 0.4s ${T.ease};
}
.nav-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.nav-logo-mark {
  width: 32px;
  height: 32px;
  background: ${T.primaryContainer};
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 18px;
}
.nav-logo-text {
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: ${T.onSurface};
}
.nav-links {
  display: flex;
  gap: 32px;
}
.nav-link {
  font-size: 14px;
  font-weight: 600;
  color: ${T.onSurfaceVariant};
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link:hover { color: ${T.primaryContainer}; }

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (max-width: 1024px) {
  .nav-links { gap: 20px; }
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-inner { padding: 0 20px; }
}

/* ── Buttons ── */
.btn-primary, .btn-primary-sm {
  background: ${T.primaryContainer};
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}
.btn-primary { padding: 0 28px; font-size: 16px; }
.btn-primary-sm { padding: 0 18px; font-size: 14px; height: 40px; min-height: 40px; }
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 12px ${T.primaryContainer}40; }

.btn-secondary {
  background: #fff;
  color: ${T.onSurface};
  border: 1px solid ${T.outlineVariant};
  font-weight: 600;
  border-radius: 10px;
  padding: 0 28px;
  font-size: 16px;
  cursor: pointer;
}
.btn-secondary:hover { background: ${T.surfaceLow}; }

.btn-ghost {
  background: transparent;
  color: ${T.onSurfaceVariant};
  font-weight: 600;
  font-size: 14px;
  padding: 0 12px;
  cursor: pointer;
}

/* ── Hero ── */
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: center;
}
.hero-left {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.hero-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: ${T.primaryContainer}10;
  border: 1px solid ${T.primaryContainer}20;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  color: ${T.primaryContainer};
  width: fit-content;
}
.hero-h1 {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
}
.hero-sub {
  font-size: 18px;
  line-height: 1.6;
  color: ${T.onSurfaceVariant};
  max-width: 540px;
}
.hero-ctas {
  display: flex;
  gap: 16px;
}
.hero-proof {
  margin-top: 24px;
}
.hero-proof-label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${T.outline};
  margin-bottom: 16px;
}
.hero-logos {
  display: flex;
  gap: 32px;
  opacity: 0.5;
  filter: grayscale(1);
}
.hero-logo-text {
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 0.05em;
}

.hero-right {
  position: relative;
}
.mockup-frame {
  background: #fff;
  border-radius: 20px;
  box-shadow: ${T.shadowXl};
  overflow: hidden;
  border: 1px solid ${T.outlineVariant}40;
}
.mockup-chrome {
  height: 40px;
  background: ${T.surfaceLow};
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  border-bottom: 1px solid ${T.outlineVariant}30;
}
.chrome-dots { display: flex; gap: 6px; }
.chrome-dots i { width: 8px; height: 8px; border-radius: 50%; }
.chrome-url {
  flex: 1;
  height: 24px;
  background: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 8px;
  font-size: 11px;
  color: ${T.outline};
}
.mockup-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.mock-header h2 { font-size: 20px; font-weight: 800; margin-bottom: 4px; }
.mock-header p { font-size: 13px; color: ${T.onSurfaceVariant}; }

.agent-card {
  display: flex;
  gap: 12px;
  padding: 14px;
  background: ${T.surface};
  border: 1px solid ${T.outlineVariant}20;
  border-radius: 12px;
}
.agent-dot { width: 8px; height: 8px; border-radius: 50%; margin-top: 6px; }
.agent-card-body { flex: 1; }
.agent-card-head { display: flex; justify-content: space-between; margin-bottom: 4px; }
.agent-card-head span:first-child { font-size: 11px; font-weight: 700; text-transform: uppercase; }
.agent-time { font-size: 11px; color: ${T.outline}; }
.agent-card-body p { font-size: 13px; line-height: 1.4; }

.mock-pipeline {
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid ${T.outlineVariant}20;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pipe-label { font-size: 10px; font-weight: 800; color: ${T.outline}; }
.pipe-val { font-size: 24px; font-weight: 800; color: ${T.onSurface}; }

@media (max-width: 1200px) {
  .hero-h1 { font-size: 52px; }
}

@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; gap: 48px; text-align: center; }
  .hero-left { align-items: center; }
  .hero-sub { margin: 0 auto; }
  .hero-logos { justify-content: center; flex-wrap: wrap; gap: 24px; }
  .hero-right { max-width: 600px; margin: 0 auto; width: 100%; }
}

@media (max-width: 768px) {
  .hero-h1 { font-size: 40px; }
  .hero-sub { font-size: 16px; }
  .hero-ctas { width: 100%; flex-direction: column; }
  .hero-ctas button { width: 100%; }
}

/* ── Agents Grid ── */
.sec-h2 {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 16px;
}
.sec-sub {
  font-size: 17px;
  color: ${T.onSurfaceVariant};
  max-width: 600px;
  margin: 0 auto;
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.agent-tile {
  padding: 24px;
  background: #fff;
  border: 1px solid ${T.outlineVariant}30;
  border-radius: 20px;
  transition: all 0.3s ${T.ease};
}
.agent-tile:hover {
  transform: translateY(-4px);
  box-shadow: ${T.shadow};
  border-color: ${T.primaryContainer}30;
}
.tile-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.tile-title { font-size: 18px; font-weight: 800; margin-bottom: 10px; }
.tile-desc { font-size: 14px; color: ${T.onSurfaceVariant}; line-height: 1.5; margin-bottom: 20px; }
.tile-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
}

@media (max-width: 1200px) {
  .agents-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .sec-h2 { font-size: 32px; }
  .agents-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .agents-grid { grid-template-columns: 1fr; }
}

/* ── Timeline (Chain) ── */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${T.outlineVariant}40;
  transform: translateX(-50%);
}
.tl-row {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  position: relative;
}
.tl-left { flex-direction: row; }
.tl-right { flex-direction: row-reverse; }

.tl-card-wrap { flex: 1; }
.tl-spacer { flex: 1; }

.tl-card {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${T.outlineVariant}30;
  position: relative;
}
.tl-label { font-size: 11px; font-weight: 800; letter-spacing: 0.05em; margin-bottom: 8px; display: block; }
.tl-title { font-size: 18px; font-weight: 800; margin-bottom: 8px; }
.tl-desc { font-size: 14px; color: ${T.onSurfaceVariant}; line-height: 1.5; margin-bottom: 16px; }
.tl-time { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 700; }

.tl-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #fff;
  z-index: 2;
  margin: 0 32px;
}

.chain-summary {
  margin-top: 48px;
  text-align: center;
  font-size: 15px;
  color: ${T.onSurfaceVariant};
  padding: 20px;
  background: ${T.surfaceLow};
  border-radius: 12px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .timeline-line { left: 20px; transform: none; }
  .tl-row { flex-direction: row !important; padding-left: 52px; margin-bottom: 48px; }
  .tl-spacer { display: none; }
  .tl-circle { position: absolute; left: 0; margin: 0; }
  .tl-card::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 16px;
    width: 16px;
    height: 16px;
    background: #fff;
    border-left: 1px solid ${T.outlineVariant}30;
    border-bottom: 1px solid ${T.outlineVariant}30;
    transform: rotate(45deg);
  }
}

/* ── Industry ── */
.ind-grid {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 40px;
  background: #fff;
  border-radius: 24px;
  border: 1px solid ${T.outlineVariant}30;
  overflow: hidden;
  box-shadow: ${T.shadow};
}
.ind-left {
  padding: 40px;
  background: ${T.surface};
  border-right: 1px solid ${T.outlineVariant}30;
}
.ind-label { font-size: 11px; font-weight: 800; color: ${T.outline}; text-transform: uppercase; margin-bottom: 20px; display: block; }
.ind-opt {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid ${T.outlineVariant}40;
  border-radius: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  font-weight: 700;
  color: ${T.onSurfaceVariant};
  text-align: left;
}
.ind-active {
  border-color: ${T.primaryContainer};
  background: ${T.primaryContainer}08;
  color: ${T.primaryContainer};
}

.ind-controls { margin-top: 32px; }
.ind-controls-label { font-size: 11px; font-weight: 800; color: ${T.outline}; text-transform: uppercase; margin-bottom: 16px; display: block; }
.ind-toggle-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
}
.toggle {
  width: 36px;
  height: 20px;
  background: ${T.outlineVariant};
  border-radius: 100px;
  position: relative;
  transition: background 0.3s;
}
.toggle.on { background: ${T.primaryContainer}; }
.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
}
.toggle.on .toggle-thumb { transform: translateX(16px); }

.ind-right {
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.ind-morph-icon {
  width: 64px;
  height: 64px;
  background: ${T.primaryContainer}10;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
.ind-morph-title { font-size: 24px; font-weight: 800; margin-bottom: 12px; }
.ind-morph-desc { font-size: 16px; color: ${T.onSurfaceVariant}; max-width: 400px; margin-bottom: 32px; }
.ind-modules { display: flex; gap: 12px; }
.ind-mod-card {
  padding: 16px 20px;
  background: ${T.surface};
  border: 1px solid ${T.outlineVariant}30;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.ind-mod-id { font-size: 10px; font-weight: 800; color: ${T.outline}; }
.ind-mod-name { font-size: 14px; font-weight: 700; }

@media (max-width: 1024px) {
  .ind-grid { grid-template-columns: 1fr; }
  .ind-left { border-right: none; border-bottom: 1px solid ${T.outlineVariant}30; }
}

@media (max-width: 768px) {
  .ind-right { padding: 40px 20px; }
  .ind-modules { flex-direction: column; width: 100%; }
  .ind-mod-card { width: 100%; }
}

/* ── Compliance ── */
.comp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 56px;
}
.comp-badges { display: flex; gap: 12px; flex-wrap: wrap; }
.comp-badge {
  padding: 8px 16px;
  background: #fff;
  border: 1px solid ${T.outlineVariant}40;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
}

.comp-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.comp-card {
  padding: 32px;
  background: #fff;
  border: 1px solid ${T.outlineVariant}30;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}
.comp-card h4 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 16px;
}
.comp-dot { width: 6px; height: 6px; background: #059669; border-radius: 50%; }
.comp-card p { font-size: 14px; color: ${T.onSurfaceVariant}; line-height: 1.6; }
.comp-card-art {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  background: #05966908;
  border-radius: 50%;
}

@media (max-width: 1200px) {
  .comp-cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 1024px) {
  .comp-header { flex-direction: column; align-items: flex-start; gap: 32px; }
}

@media (max-width: 640px) {
  .comp-cards { grid-template-columns: 1fr; }
}

/* ── Footer ── */
.footer {
  background: ${T.surfaceLow};
  padding: 40px;
  border-top: 1px solid ${T.outlineVariant}30;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 48px;
  margin-bottom: 64px;
}
.footer-about {
  font-size: 14px;
  color: ${T.onSurfaceVariant};
  line-height: 1.6;
  max-width: 280px;
}
.footer-col-title {
  font-size: 12px;
  font-weight: 800;
  color: ${T.outline};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}
.footer-link {
  display: block;
  font-size: 14px;
  color: ${T.onSurfaceVariant};
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s;
}
.footer-link:hover { color: ${T.primaryContainer}; }

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid ${T.outlineVariant}30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: ${T.outline};
}

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
}

@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
}

`;
