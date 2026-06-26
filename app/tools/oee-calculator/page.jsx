"use client";

import { useState } from "react";

export default function OEECalculatorPage() {
  const [availability, setAvailability] = useState("");
  const [performance, setPerformance] = useState("");
  const [quality, setQuality] = useState("");

  const a = Number(availability);
  const p = Number(performance);
  const q = Number(quality);
  const oee = a > 0 && p > 0 && q > 0 ? (a / 100) * (p / 100) * (q / 100) * 100 : null;

  return (
    <section className="section">
      <div className="container">
        <div className="article">
          <div className="card-kicker">Production tool</div>
          <h1>OEE Calculator</h1>
          <p>Calculate Overall Equipment Effectiveness from availability, performance, and quality.</p>

          <div className="tool-form">
            <div className="field">
              <label>Availability %</label>
              <input type="number" value={availability} onChange={(e) => setAvailability(e.target.value)} placeholder="Example: 90" />
            </div>
            <div className="field">
              <label>Performance %</label>
              <input type="number" value={performance} onChange={(e) => setPerformance(e.target.value)} placeholder="Example: 85" />
            </div>
            <div className="field">
              <label>Quality %</label>
              <input type="number" value={quality} onChange={(e) => setQuality(e.target.value)} placeholder="Example: 98" />
            </div>
          </div>

          {oee !== null && (
            <div className="result">
              <strong>OEE = {oee.toFixed(2)}%</strong>
              <p>Formula: OEE = Availability × Performance × Quality</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
