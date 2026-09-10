const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedigitalplant.org";

export const siteConfig = {
  name: "The Digital Plant",
  tagline: "Where Industrial Intelligence Meets AI",
  url: siteUrl.replace(/\/$/, ""),
  description:
    "Practical industrial AI, manufacturing analytics, reliability engineering, automation, and digital transformation resources for engineers.",
  author: "The Digital Plant Editorial Team",
  email: "hello@thedigitalplant.com"
};

export const categories = [
  {
    slug: "industrial-ai",
    name: "Industrial AI",
    description: "AI, machine learning, agents, anomaly detection, and applied intelligence for factories."
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    description: "SQL, Python, Power BI, dashboards, time-series analysis, and industrial data workflows."
  },
  {
    slug: "reliability",
    name: "Reliability",
    description: "MTBF, MTTR, availability, downtime, RCA, FMEA, and reliability improvement."
  },
  {
    slug: "automation",
    name: "Automation",
    description: "PLC, SCADA, DCS, OPC UA, MQTT, data acquisition, and control system integration."
  },
  {
    slug: "manufacturing-analytics",
    name: "Manufacturing Analytics",
    description: "OEE, production KPIs, bottlenecks, quality, energy, and performance analysis."
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    description: "Roadmaps, governance, implementation, adoption, and industrial digitalization strategy."
  }
];

export function categoryToSlug(category) {
  return category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
