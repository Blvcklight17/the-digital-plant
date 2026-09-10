import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { filterPublications, publicationDate } from "../lib/publications.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const publications = JSON.parse(fs.readFileSync(path.join(root, "data/publications.json"), "utf8"));
const allowedHosts = new Set(["www.microsoft.com", "news.microsoft.com", "www.weforum.org", "www.rockwellautomation.com", "nvidianews.nvidia.com", "press.siemens.com"]);

test("entries have unique identifiers, verified publisher links, and real internal destinations", () => {
  assert.equal(new Set(publications.map((item) => item.id)).size, publications.length);
  assert.equal(new Set(publications.map((item) => item.url)).size, publications.length);
  for (const item of publications) {
    for (const key of ["id", "title", "publisher", "date", "verifiedOn", "type", "summary", "takeaway", "context", "url", "relatedHref", "relatedLabel"]) assert.ok(item[key], `${item.id} needs ${key}`);
    assert.match(item.id, /^[a-z0-9-]+$/);
    assert.ok(item.topics.length);
    assert.match(item.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(new Date(item.date).toISOString().slice(0, 10), item.date);
    assert.ok(item.date <= item.verifiedOn, `${item.id} published after verification`);
    for (const link of [item.url, item.supportingUrl].filter(Boolean)) {
      const url = new URL(link);
      assert.equal(url.protocol, "https:");
      assert.ok(allowedHosts.has(url.hostname), `Unexpected publisher: ${url.hostname}`);
    }
    const article = item.relatedHref.startsWith("/articles/");
    const destination = article
      ? path.join(root, "content", `${item.relatedHref.slice(1)}.md`)
      : path.join(root, "app", item.relatedHref.slice(1), "page.jsx");
    assert.ok(fs.existsSync(destination), `Broken internal destination ${item.relatedHref}`);
  }
});

test("search handles casing, whitespace, and multiple words across fields", () => {
  assert.deepEqual(filterPublications(publications, { query: "  SIEMENS   digital  " }).map((item) => item.id), ["siemens-nanjing-lighthouse"]);
  assert.equal(filterPublications(publications, { query: "  " }).length, publications.length);
});

test("topic, publisher and text filters intersect; impossible combinations are empty", () => {
  assert.deepEqual(filterPublications(publications, { topic: "Plant operations", publisher: "Microsoft", query: "agentic" }).map((item) => item.id), ["microsoft-agentic-plant-operations"]);
  assert.equal(filterPublications(publications, { topic: "Workforce", publisher: "Siemens" }).length, 0);
  assert.equal(filterPublications(publications, { query: "no-such-publication" }).length, 0);
});

test("newest-first ordering does not mutate the catalogue and is independent of input order", () => {
  const input = [...publications].reverse();
  const before = input.map((item) => item.id);
  const result = filterPublications(input);
  assert.deepEqual(input.map((item) => item.id), before);
  for (let index = 1; index < result.length; index++) assert.ok(result[index - 1].date >= result[index].date);
  assert.equal(result[0].id, "microsoft-agentic-plant-operations");
});

test("publication dates stay on the publisher's day across time zones", () => {
  assert.equal(publicationDate("2026-01-15"), "15 Jan 2026");
});
