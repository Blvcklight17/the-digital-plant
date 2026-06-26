import Link from "next/link";
import { categories } from "../../data/site";
import { getAllArticles } from "../../lib/articles";

export const metadata = {
  title: "Categories | The Digital Plant",
  description: "Browse The Digital Plant by industrial AI, analytics, reliability, automation, manufacturing analytics, and digital transformation."
};

export default function CategoriesPage() {
  const articles = getAllArticles();

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Browse</div>
            <h2>Categories</h2>
            <p className="lead">Explore The Digital Plant knowledge base by topic.</p>
          </div>
        </div>

        <div className="grid three">
          {categories.map((category) => {
            const count = articles.filter((article) => article.categorySlug === category.slug).length;
            return (
              <Link href={`/categories/${category.slug}`} className="card" key={category.slug}>
                <div className="card-kicker">{count} article{count === 1 ? "" : "s"}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
