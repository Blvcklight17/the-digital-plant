import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">
          <span className="logo-mark" />
          <span>The Digital Plant</span>
        </Link>

        <nav className="nav-links">
          <Link href="/articles">Articles</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/labs">Labs</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/search">Search</Link>
          <Link href="/resources" className="cta">Free Resources</Link>
        </nav>
      </div>
    </header>
  );
}
