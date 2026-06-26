import ArticleCard from "../../components/ArticleCard";
import { getAllArticles } from "../../lib/articles";

export const metadata = {
  title: "Articles | The Digital Plant",
  description: "Industrial AI, reliability, automation, analytics, and manufacturing digitalization articles."
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Knowledge base</div>
            <h2>Articles</h2>
            <p className="lead">Implementation-focused guides for industrial engineers, reliability teams, automation teams, and manufacturing data professionals.</p>
          </div>
        </div>
        <div className="grid three">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </div>
    </section>
  );
}
