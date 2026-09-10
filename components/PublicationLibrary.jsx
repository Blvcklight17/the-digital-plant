"use client";

import { useState } from "react";
import PublicationCard from "./PublicationCard";
import { filterPublications } from "../lib/publications.mjs";

export default function PublicationLibrary({ publications }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All topics");
  const [publisher, setPublisher] = useState("All publishers");
  const topics = ["All topics", ...new Set(publications.flatMap((item) => item.topics))];
  const publishers = [...new Set(publications.map((item) => item.publisher))].sort();
  const results = filterPublications(publications, { query, topic, publisher });
  const filtered = Boolean(query || topic !== "All topics" || publisher !== "All publishers");

  function reset() {
    setQuery("");
    setTopic("All topics");
    setPublisher("All publishers");
  }

  return (
    <>
      <div className="publication-controls">
        <div className="publication-fields">
          <label htmlFor="publication-query">Find a publication
            <input id="publication-query" type="search" placeholder="Try digital twins, Siemens, workforce…" value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
          <label htmlFor="publication-publisher">Publisher
            <select id="publication-publisher" value={publisher} onChange={(event) => setPublisher(event.target.value)}>
              <option>All publishers</option>
              {publishers.map((name) => <option key={name}>{name}</option>)}
            </select>
          </label>
        </div>
        <fieldset className="publication-topics">
          <legend>Explore a topic</legend>
          <div>{topics.map((name) => (
            <button type="button" key={name} aria-pressed={topic === name} onClick={() => setTopic(name)}>{name}</button>
          ))}</div>
        </fieldset>
      </div>
      <div className="publication-result-bar">
        <p role="status" aria-live="polite" aria-atomic="true">{results.length} publication{results.length === 1 ? "" : "s"} <span>· Newest first</span></p>
        {filtered && <button type="button" onClick={reset}>Clear filters</button>}
      </div>
      {results.length ? (
        <div className="publication-grid">{results.map((publication) => <PublicationCard key={publication.id} publication={publication} />)}</div>
      ) : (
        <div className="publication-empty">
          <h2>No publications match these filters.</h2>
          <p>Try a broader search or return to the full reading room.</p>
          <button className="button" type="button" onClick={reset}>Show all publications</button>
        </div>
      )}
    </>
  );
}
