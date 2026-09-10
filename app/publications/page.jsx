import PublicationLibrary from "../../components/PublicationLibrary";
import publications from "../../data/publications.json";
import { siteConfig } from "../../data/site";

const title = "Industry Reading Room";
const description = "Explore industrial AI and digital transformation publications from Siemens, Microsoft, NVIDIA, Rockwell Automation, and the World Economic Forum, with practical engineering takeaways.";

export const metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/publications` },
  openGraph: { title, description, url: `${siteConfig.url}/publications`, type: "website" },
  twitter: { card: "summary", title, description }
};

export default function PublicationsPage() {
  return (
    <div className="reading-room">
      <section className="reading-room-heading">
        <div className="container">
          <div className="reading-room-edition"><span>THE DIGITAL PLANT / READING ROOM</span><span>SELECTION 01 · SEPTEMBER 2026</span></div>
          <h1>Industrial intelligence.<br /><span>From the source.</span></h1>
          <p>Research, factory stories, and industry perspectives worth your time. Read our brief, take an idea back to your plant, and explore the original publication.</p>
          <div className="reading-room-counts"><span><strong>{publications.length}</strong> selected publications</span><span><strong>{new Set(publications.map((item) => item.publisher)).size}</strong> publishers</span></div>
        </div>
      </section>
      <section className="reading-room-body" aria-label="Publication library">
        <div className="container">
          <PublicationLibrary publications={publications} />
          <aside className="reading-room-note">
            <h2>How we curate</h2>
            <p>We link to publications on their publishers&apos; websites and write short original summaries. Engineering takeaways are The Digital Plant&apos;s interpretation. Source notes distinguish research, customer stories, and announcements. Inclusion does not imply a partnership or endorsement.</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
