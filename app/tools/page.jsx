import Link from "next/link";

export const metadata = {
  title: "Engineering Tools | The Digital Plant",
  description: "Interactive calculators and tools for reliability, maintenance, production, and manufacturing analytics."
};

const tools = [
  {
    href: "/tools/downtime-analyzer",
    category: "Manufacturing Analytics",
    title: "Downtime Analyzer",
    description: "Paste stoppage data and rank equipment by downtime impact."
  },
  {
    href: "/tools/mtbf-calculator",
    category: "Reliability",
    title: "MTBF Calculator",
    description: "Calculate mean time between failures."
  },
  {
    href: "/tools/mttr-calculator",
    category: "Reliability",
    title: "MTTR Calculator",
    description: "Calculate mean time to repair."
  },
  {
    href: "/tools/availability-calculator",
    category: "Reliability",
    title: "Availability Calculator",
    description: "Calculate availability from MTBF and MTTR."
  },
  {
    href: "/tools/failure-cost-calculator",
    category: "Maintenance",
    title: "Failure Cost Calculator",
    description: "Estimate downtime and repair cost impact."
  },
  {
    href: "/tools/oee-calculator",
    category: "Production",
    title: "OEE Calculator",
    description: "Calculate overall equipment effectiveness."
  }
];

export default function ToolsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Tools</div>
            <h2>Engineering tools</h2>
            <p className="lead">Interactive calculators and utilities for practical industrial work.</p>
          </div>
        </div>

        <div className="grid three">
          {tools.map((tool) => (
            <Link href={tool.href} className="card" key={tool.href}>
              <div className="card-kicker">{tool.category}</div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
