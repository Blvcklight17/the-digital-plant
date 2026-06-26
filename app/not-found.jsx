import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="article">
          <div className="card-kicker">404</div>
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist or has moved.</p>
          <Link className="button" href="/">Return home</Link>
        </div>
      </div>
    </section>
  );
}
