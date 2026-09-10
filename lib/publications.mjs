export function filterPublications(publications, { query = "", topic = "All topics", publisher = "All publishers" } = {}) {
  const terms = query.trim().toLocaleLowerCase("en").split(/\s+/).filter(Boolean);
  return publications.filter((publication) => {
    const text = [publication.title, publication.publisher, publication.type, publication.summary, ...publication.topics].join(" ").toLocaleLowerCase("en");
    return (topic === "All topics" || publication.topics.includes(topic))
      && (publisher === "All publishers" || publication.publisher === publisher)
      && terms.every((term) => text.includes(term));
  }).sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function publicationDate(date) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
