import Link from "next/link";
import { siteConfig } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>The Digital Plant</strong>
          <p>{siteConfig.tagline}</p>
          <p>Industrial AI, analytics, reliability, and automation for practical engineers.</p>
        </div>
        <div>
          <p><Link href="/articles">Articles</Link></p>
          <p><Link href="/publications">Industry Reading Room</Link></p>
          <p><Link href="/tools">Engineering Tools</Link></p>
          <p><Link href="/resources">Resources</Link></p>
          <p><Link href="/rss.xml">RSS</Link></p>
        </div>
        <div>
          <p><Link href="/contact">Contact</Link></p>
          <p><Link href="/privacy">Privacy Policy</Link></p>
          <p><Link href="/terms">Terms of Use</Link></p>
        </div>
      </div>
    </footer>
  );
}
