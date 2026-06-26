"use client";

import { useState } from "react";

export default function FailureCostCalculatorPage() {
  const [downtimeHours, setDowntimeHours] = useState("");
  const [lostProductionPerHour, setLostProductionPerHour] = useState("");
  const [marginPerUnit, setMarginPerUnit] = useState("");
  const [repairCost, setRepairCost] = useState("");

  const d = Number(downtimeHours);
  const p = Number(lostProductionPerHour);
  const m = Number(marginPerUnit);
  const r = Number(repairCost);
  const cost = d >= 0 && p >= 0 && m >= 0 && r >= 0 ? (d * p * m) + r : null;

  return (
    <section className="section">
      <div className="container">
        <div className="article">
          <div className="card-kicker">Maintenance tool</div>
          <h1>Failure Cost Calculator</h1>
          <p>Estimate the cost of an equipment failure using downtime, lost production, contribution margin, and repair cost.</p>

          <div className="tool-form">
            <div className="field">
              <label>Downtime hours</label>
              <input type="number" value={downtimeHours} onChange={(e) => setDowntimeHours(e.target.value)} placeholder="Example: 6" />
            </div>
            <div className="field">
              <label>Lost production per hour</label>
              <input type="number" value={lostProductionPerHour} onChange={(e) => setLostProductionPerHour(e.target.value)} placeholder="Example: 120" />
            </div>
            <div className="field">
              <label>Margin per unit</label>
              <input type="number" value={marginPerUnit} onChange={(e) => setMarginPerUnit(e.target.value)} placeholder="Example: 8" />
            </div>
            <div className="field">
              <label>Direct repair cost</label>
              <input type="number" value={repairCost} onChange={(e) => setRepairCost(e.target.value)} placeholder="Example: 1500" />
            </div>
          </div>

          {cost !== null && (
            <div className="result">
              <strong>Estimated failure cost = {cost.toFixed(2)}</strong>
              <p>Formula: Downtime × Lost production/hour × Margin/unit + Repair cost</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
