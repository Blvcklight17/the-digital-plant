import { siteConfig } from "../../data/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Digital Plant."
};

export default function PrivacyPage() {
  return (
    <section className="article-shell">
      <article className="article">
        <div className="card-kicker">Legal</div>
        <h1>Privacy Policy</h1>
        <p>Last updated: June 25, 2026</p>

        <h2>Overview</h2>
        <p>
          {siteConfig.name} is an educational website focused on industrial AI, analytics, reliability, automation, and digital transformation.
        </p>

        <h2>Information we collect</h2>
        <p>
          We may collect information you voluntarily submit, such as your email address when joining the newsletter or your contact details when sending a message.
        </p>

        <h2>Analytics</h2>
        <p>
          The website may use privacy-conscious analytics or Google Analytics after configuration. Analytics help us understand which pages are useful and how the website can be improved.
        </p>

        <h2>Downloads and resources</h2>
        <p>
          Free downloads may be tracked at an aggregate level to understand which resources are valuable.
        </p>

        <h2>Third-party services</h2>
        <p>
          We may use third-party services for hosting, analytics, email newsletters, and contact forms. These providers process data according to their own policies.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to {siteConfig.email}.
        </p>
      </article>
    </section>
  );
}
