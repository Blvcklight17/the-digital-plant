"use client";

import { useMemo, useState } from "react";

const starterRows = `Kiln Main Drive,120
Cement Mill Separator,45
Cement Mill Separator,35
Raw Mill Fan,80
Packing Machine,25
Kiln Main Drive,60`;

export default function DowntimeAnalyzer() {
  const [rows, setRows] = useState(starterRows);

  const analysis = useMemo(() => {
    const parsed = rows
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [equipment, downtime] = line.split(",");
        return {
          equipment: (equipment || "Unknown").trim(),
          downtime: Number(downtime || 0)
        };
      })
      .filter((row) => row.equipment && !Number.isNaN(row.downtime));

    const byEquipment = new Map();

    for (const row of parsed) {
      const current = byEquipment.get(row.equipment) || { equipment: row.equipment, events: 0, downtime: 0 };
      current.events += 1;
      current.downtime += row.downtime;
      byEquipment.set(row.equipment, current);
    }

    const summary = Array.from(byEquipment.values()).sort((a, b) => b.downtime - a.downtime);
    const totalDowntime = summary.reduce((sum, row) => sum + row.downtime, 0);
    const totalEvents = summary.reduce((sum, row) => sum + row.events, 0);

    return { summary, totalDowntime, totalEvents };
  }, [rows]);

  return (
    <div>
      <div className="field">
        <label>Paste stoppage data as Equipment,DowntimeMinutes</label>
        <textarea rows="9" value={rows} onChange={(e) => setRows(e.target.value)} />
      </div>

      <div className="result">
        <strong>Total downtime: {analysis.totalDowntime.toFixed(0)} minutes</strong>
        <p>Total stoppage events: {analysis.totalEvents}</p>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Equipment</th>
              <th>Events</th>
              <th>Downtime minutes</th>
              <th>Share</th>
            </tr>
          </thead>
          <tbody>
            {analysis.summary.map((row) => (
              <tr key={row.equipment}>
                <td>{row.equipment}</td>
                <td>{row.events}</td>
                <td>{row.downtime.toFixed(0)}</td>
                <td>{analysis.totalDowntime > 0 ? ((row.downtime / analysis.totalDowntime) * 100).toFixed(1) : "0.0"}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="tool-note">
        This is a starter browser-based analyzer. Later versions can accept CSV uploads, Pareto charts, failure classification, and exportable reports.
      </p>
    </div>
  );
}
