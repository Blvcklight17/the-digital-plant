import Link from "next/link";
import ArticleCard from "../components/ArticleCard";
import NewsletterSignup from "../components/NewsletterSignup";
import HeroVisual from "../components/HeroVisual";
import { getAllArticles } from "../lib/articles";
import publications from "../data/publications.json";

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      <section className="hero hero-minimal hero-interactive">
        <div className="container hero-grid hero-minimal-grid">
          <div className="hero-copy">
            <div className="badge"><span className="badge-dot" /> Industrial AI • Analytics • Reliability</div>

            <h1>Engineering knowledge that builds smarter factories.</h1>

            <p>
              Practical guides, calculators, templates, and industrial AI workflows for engineers turning plant data into better decisions.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/articles">Start Learning</Link>
              <Link className="button secondary" href="/tools">Explore Tools</Link>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reading-room-promo">
          <div>
            <div className="eyebrow">New · Industry Reading Room</div>
            <h2>Big ideas. Original sources.</h2>
            <p>Explore selected publications from Siemens, Microsoft, NVIDIA, Rockwell Automation, and the World Economic Forum, with practical takeaways for your plant.</p>
            <Link className="button" href="/publications">Explore the reading room →</Link>
          </div>
          <ul aria-label="Selected publications">
            {publications.slice(0, 3).map((publication) => (
              <li key={publication.id}><Link href={`/publications#${publication.id}`}><span>{publication.publisher}</span>{publication.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Start here</div>
              <h2>Featured articles</h2>
            </div>
            <Link href="/articles" className="button">View all</Link>
          </div>
          <div className="grid three">
            {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Engineering tools</div>
              <h2>Calculators engineers can actually use.</h2>
              <p className="lead">Start with reliability and production calculations. More industrial AI tools will be added into the same system.</p>
            </div>
          </div>
          <div className="grid three">
            <Link href="/tools/downtime-analyzer" className="card">
              <div className="card-kicker">Manufacturing Analytics</div>
              <h3>Downtime Analyzer</h3>
              <p>Paste stoppage data and rank equipment by downtime impact.</p>
            </Link>
            <Link href="/tools/mtbf-calculator" className="card">
              <div className="card-kicker">Reliability</div>
              <h3>MTBF Calculator</h3>
              <p>Calculate mean time between failures from operating hours and failure count.</p>
            </Link>
            <Link href="/tools/oee-calculator" className="card">
              <div className="card-kicker">Production</div>
              <h3>OEE Calculator</h3>
              <p>Calculate availability, performance, quality, and overall equipment effectiveness.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container newsletter">
          <div>
            <div className="eyebrow">Newsletter</div>
            <h2 style={{color: "white"}}>The Digital Plant Weekly</h2>
            <p>One practical email for engineers: industrial AI, analytics, reliability, automation, and tools.</p>
          </div>
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
