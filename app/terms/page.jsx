import { siteConfig } from "../../data/site";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for The Digital Plant."
};

export default function TermsPage() {
  return (
    <section className="article-shell">
      <article className="article">
        <div className="card-kicker">Legal</div>
        <h1>Terms of Use</h1>
        <p>Last updated: June 25, 2026</p>

        <h2>Educational content</h2>
        <p>
          The content on {siteConfig.name} is provided for educational and informational purposes. It should not be treated as site-specific engineering, safety, legal, financial, or operational advice.
        </p>

        <h2>Engineering responsibility</h2>
        <p>
          Industrial systems are safety-critical. Always validate calculations, models, recommendations, and procedures with qualified professionals before applying them in real environments.
        </p>

        <h2>Tools and calculators</h2>
        <p>
          Calculators and tools are provided as educational aids. Results should be checked independently before being used for operational decisions.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Articles, tools, templates, and resources are owned by {siteConfig.name} unless otherwise stated.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to {siteConfig.email}.
        </p>
      </article>
    </section>
  );
}
