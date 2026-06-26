"use client";

import { useState } from "react";

export default function MTTRCalculatorPage() {
  const [repairTime, setRepairTime] = useState("");
  const [repairs, setRepairs] = useState("");

  const totalRepairTime = Number(repairTime);
  const numberOfRepairs = Number(repairs);
  const mttr = totalRepairTime > 0 && numberOfRepairs > 0 ? totalRepairTime / numberOfRepairs : null;

  return (
    <section className="section">
      <div className="container">
        <div className="article">
          <div className="card-kicker">Reliability tool</div>
          <h1>MTTR Calculator</h1>
          <p>Calculate Mean Time To Repair using total repair time and number of repairs.</p>

          <div className="tool-form">
            <div className="field">
              <label>Total repair time</label>
              <input type="number" value={repairTime} onChange={(e) => setRepairTime(e.target.value)} placeholder="Example: 12" />
            </div>
            <div className="field">
              <label>Number of repairs</label>
              <input type="number" value={repairs} onChange={(e) => setRepairs(e.target.value)} placeholder="Example: 3" />
            </div>
          </div>

          {mttr !== null && (
            <div className="result">
              <strong>MTTR = {mttr.toFixed(2)} hours</strong>
              <p>Formula: MTTR = Total repair time / Number of repairs</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
