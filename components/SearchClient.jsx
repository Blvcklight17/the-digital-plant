"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function SearchClient({ items }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;

    return items.filter((item) => {
      return [
        item.title,
        item.description,
        item.type,
        item.category
      ].join(" ").toLowerCase().includes(q);
    });
  }, [query, items]);

  return (
    <>
      <div className="search-box">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AI, MTBF, OEE, SQL, reliability..."
          autoFocus
        />
      </div>

      <p className="lead">{results.length} result{results.length === 1 ? "" : "s"} found.</p>

      <div className="grid three">
        {results.map((item) => (
          <Link key={`${item.type}-${item.title}`} className="card" href={item.href}>
            <div className="card-kicker">{item.type} • {item.category}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
