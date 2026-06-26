"use client";

import { useState } from "react";

export default function MTBFCalculatorPage() {
  const [hours, setHours] = useState("");
  const [failures, setFailures] = useState("");

  const h = Number(hours);
  const f = Number(failures);
  const mtbf = h > 0 && f > 0 ? h / f : null;

  return (
    <section className="section">
      <div className="container">
        <div className="article">
          <div className="card-kicker">Reliability tool</div>
          <h1>MTBF Calculator</h1>
          <p>Calculate Mean Time Between Failures using operating hours and number of failures.</p>

          <div className="tool-form">
            <div className="field">
              <label>Operating hours</label>
              <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="Example: 720" />
            </div>
            <div className="field">
              <label>Number of failures</label>
              <input type="number" value={failures} onChange={(e) => setFailures(e.target.value)} placeholder="Example: 3" />
            </div>
          </div>

          {mtbf !== null && (
            <div className="result">
              <strong>MTBF = {mtbf.toFixed(2)} hours</strong>
              <p>Formula: MTBF = Total operating time / Number of failures</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
