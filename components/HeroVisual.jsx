"use client";

import { useMemo, useState } from "react";

export default function HeroVisual() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 24;
    setOffset({ x, y });
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const style = useMemo(() => ({
    transform: `perspective(1200px) rotateY(${offset.x * 0.18}deg) rotateX(${offset.y * -0.18}deg) translateY(-2px)`
  }), [offset]);

  return (
    <div className="hero-visual-shell" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="hero-visual-board" style={style}>
        <div className="hero-ambient one" />
        <div className="hero-ambient two" />

        <div className="hero-grid-overlay" />

        <div className="hero-ring one" />
        <div className="hero-ring two" />
        <div className="hero-ring three" />

        <div className="hero-node n1" />
        <div className="hero-node n2" />
        <div className="hero-node n3" />
        <div className="hero-node n4" />
        <div className="hero-node n5" />

        <div className="hero-link l1" />
        <div className="hero-link l2" />
        <div className="hero-link l3" />
        <div className="hero-link l4" />

        <div className="hero-panel hero-panel-main">
          <span className="hero-panel-label">The Digital Plant</span>
          <strong>Industrial Intelligence Hub</strong>
          <p>Knowledge, tools, and applied analytics for modern factories.</p>
        </div>

        <div className="hero-panel hero-panel-chart">
          <span className="hero-panel-label">Insights</span>
          <strong>Actionable Signals</strong>
          <div className="mini-bars">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="hero-panel hero-panel-tags">
          <span className="hero-chip">AI</span>
          <span className="hero-chip">Reliability</span>
          <span className="hero-chip">SQL</span>
          <span className="hero-chip">Dashboards</span>
        </div>

        <div className="hero-panel hero-panel-kpi">
          <span className="hero-panel-label">Platform</span>
          <strong>Guides + Tools</strong>
          <small>Built for engineers</small>
        </div>
      </div>
    </div>
  );
}
