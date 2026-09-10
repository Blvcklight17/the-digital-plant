import Link from "next/link";

const resources = [
  {
    title: "Maintenance KPI Worksheet",
    type: "CSV Template",
    description: "A starter worksheet for MTBF, MTTR, availability, downtime, production loss, and repair cost tracking.",
    href: "/downloads/maintenance-kpi-worksheet.csv"
  },
  {
    title: "Manufacturing SQL Cheat Sheet",
    type: "Markdown",
    description: "Common SQL query patterns for production, downtime, quality, and maintenance datasets.",
    href: "/downloads/manufacturing-sql-cheat-sheet.md"
  },
  {
    title: "Industrial AI Project Checklist",
    type: "Markdown",
    description: "A practical checklist to assess whether an Industrial AI project is ready for implementation.",
    href: "/downloads/industrial-ai-project-checklist.md"
  },
  {
    title: "Root Cause Analysis Template",
    type: "Markdown",
    description: "A structured RCA template for failure events, evidence, causes, actions, and follow-up.",
    href: "/downloads/rca-template.md"
  },
  {
    title: "OEE Loss Tree",
    type: "Markdown",
    description: "A simple breakdown of availability, performance, and quality losses.",
    href: "/downloads/oee-loss-tree.md"
  }
];

export const metadata = {
  title: "Resources | The Digital Plant",
  description: "Free engineering resources, templates, calculators, checklists, and industrial analytics assets."
};

export default function ResourcesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Library</div>
            <h2>Free resources</h2>
            <p className="lead">Templates, checklists, and references for engineers building smarter industrial systems.</p>
          </div>
        </div>
        <p className="lead">Looking for industry research? <Link href="/publications" style={{textDecoration: "underline"}}>Visit the Industry Reading Room →</Link></p>
        <div className="grid three">
          {resources.map((resource) => (
            <div className="card" key={resource.title}>
              <div className="card-kicker">{resource.type}</div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a className="download-link" href={resource.href} download>Download</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
