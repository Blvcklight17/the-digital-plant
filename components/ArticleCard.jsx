import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <Link className="card" href={`/articles/${article.slug}`}>
      <div className="card-kicker">{article.category}</div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div className="article-meta">
        <span>{article.date}</span>
        <span>{article.readingTime}</span>
      </div>
    </Link>
  );
}
