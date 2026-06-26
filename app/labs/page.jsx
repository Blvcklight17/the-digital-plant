import Link from "next/link";

export const metadata = {
  title: "Labs | The Digital Plant",
  description: "Industrial AI experiments, engineering tools, dashboards, and practical digitalization prototypes."
};

const labs = [
  {
    title: "Downtime Analyzer",
    status: "Live Tool",
    description: "Analyze stoppage events, total downtime, stoppage count, and equipment priorities.",
    href: "/tools/downtime-analyzer"
  },
  {
    title: "Industrial AI Project Checklist",
    status: "Resource",
    description: "A practical checklist for evaluating whether an Industrial AI use case is ready.",
    href: "/downloads/industrial-ai-project-checklist.md"
  },
  {
    title: "Manufacturing SQL Starter Pack",
    status: "Resource",
    description: "Reusable SQL patterns for manufacturing data analysis.",
    href: "/downloads/manufacturing-sql-cheat-sheet.md"
  },
  {
    title: "Reliability Calculator Suite",
    status: "Tool Collection",
    description: "MTBF, MTTR, availability, and failure cost calculators.",
    href: "/tools"
  }
];

export default function LabsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Labs</div>
            <h2>Industrial experiments and tools</h2>
            <p className="lead">A practical showcase of calculators, templates, prototypes, AI workflows, and data tools built for real engineering use.</p>
          </div>
        </div>

        <div className="grid two">
          {labs.map((lab) => (
            <Link href={lab.href} className="card" key={lab.title}>
              <div className="card-kicker">{lab.status}</div>
              <h3>{lab.title}</h3>
              <p>{lab.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
