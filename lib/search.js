import { getAllArticles } from "./articles";

export function getSearchItems() {
  const articleItems = getAllArticles().map((article) => ({
    type: "Article",
    title: article.title,
    description: article.description,
    href: `/articles/${article.slug}`,
    category: article.category
  }));

  const toolItems = [
    {
      type: "Tool",
      title: "Downtime Analyzer",
      description: "Paste stoppage data and rank equipment by downtime impact.",
      href: "/tools/downtime-analyzer",
      category: "Manufacturing Analytics"
    },
    {
      type: "Tool",
      title: "MTBF Calculator",
      description: "Calculate mean time between failures.",
      href: "/tools/mtbf-calculator",
      category: "Reliability"
    },
    {
      type: "Tool",
      title: "MTTR Calculator",
      description: "Calculate mean time to repair.",
      href: "/tools/mttr-calculator",
      category: "Reliability"
    },
    {
      type: "Tool",
      title: "Availability Calculator",
      description: "Calculate operational availability from MTBF and MTTR.",
      href: "/tools/availability-calculator",
      category: "Reliability"
    },
    {
      type: "Tool",
      title: "Failure Cost Calculator",
      description: "Estimate production loss and direct cost caused by equipment failure.",
      href: "/tools/failure-cost-calculator",
      category: "Maintenance"
    },
    {
      type: "Tool",
      title: "OEE Calculator",
      description: "Calculate overall equipment effectiveness.",
      href: "/tools/oee-calculator",
      category: "Production"
    }
  ];

  const resourceItems = [
    {
      type: "Resource",
      title: "Maintenance KPI Worksheet",
      description: "CSV template for MTBF, MTTR, availability, downtime, and failure tracking.",
      href: "/downloads/maintenance-kpi-worksheet.csv",
      category: "Excel/CSV"
    },
    {
      type: "Resource",
      title: "Manufacturing SQL Cheat Sheet",
      description: "Common query patterns for downtime, quality, production, and maintenance data.",
      href: "/downloads/manufacturing-sql-cheat-sheet.md",
      category: "SQL"
    },
    {
      type: "Resource",
      title: "Industrial AI Project Checklist",
      description: "Checklist for deciding if an industrial AI project is ready for implementation.",
      href: "/downloads/industrial-ai-project-checklist.md",
      category: "AI"
    }
  ];

  return [...articleItems, ...toolItems, ...resourceItems];
}
