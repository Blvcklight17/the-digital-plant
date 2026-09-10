import Link from "next/link";
import { publicationDate } from "../lib/publications.mjs";

export default function PublicationCard({ publication }) {
  return (
    <article className="publication-card" id={publication.id}>
      <div className="publication-source">
        <strong>{publication.publisher}</strong>
        <time dateTime={publication.date}>{publicationDate(publication.date)}</time>
      </div>
      <div className="publication-type">{publication.type}</div>
      <h2><a href={publication.url}>{publication.title}<span aria-hidden="true"> ↗</span></a></h2>
      <p>{publication.summary}</p>
      <div className="publication-takeaway">
        <h3>Our engineering takeaway</h3>
        <p>{publication.takeaway}</p>
      </div>
      <details className="publication-context">
        <summary>About this source</summary>
        <p>{publication.context}</p>
        <p>Source checked <time dateTime={publication.verifiedOn}>{publicationDate(publication.verifiedOn)}</time>.</p>
        {publication.supportingUrl && <a href={publication.supportingUrl}>Read the publisher&apos;s release announcement ↗</a>}
      </details>
      <div className="publication-links">
        <a className="publication-read" href={publication.url}>Read at {publication.publisher}<span aria-hidden="true"> ↗</span></a>
        <Link href={publication.relatedHref}>{publication.relatedLabel} <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
