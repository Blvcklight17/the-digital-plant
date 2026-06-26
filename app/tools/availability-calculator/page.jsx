"use client";

import { useState } from "react";

export default function AvailabilityCalculatorPage() {
  const [mtbf, setMtbf] = useState("");
  const [mttr, setMttr] = useState("");

  const b = Number(mtbf);
  const r = Number(mttr);
  const availability = b > 0 && r >= 0 ? (b / (b + r)) * 100 : null;

  return (
    <section className="section">
      <div className="container">
        <div className="article">
          <div className="card-kicker">Reliability tool</div>
          <h1>Availability Calculator</h1>
          <p>Calculate inherent availability from MTBF and MTTR.</p>

          <div className="tool-form">
            <div className="field">
              <label>MTBF hours</label>
              <input type="number" value={mtbf} onChange={(e) => setMtbf(e.target.value)} placeholder="Example: 240" />
            </div>
            <div className="field">
              <label>MTTR hours</label>
              <input type="number" value={mttr} onChange={(e) => setMttr(e.target.value)} placeholder="Example: 4" />
            </div>
          </div>

          {availability !== null && (
            <div className="result">
              <strong>Availability = {availability.toFixed(2)}%</strong>
              <p>Formula: Availability = MTBF / (MTBF + MTTR)</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
