import { notFound } from "next/navigation";
import ArticleCard from "../../../components/ArticleCard";
import { categories } from "../../../data/site";
import { getArticlesByCategory } from "../../../lib/articles";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) return {};
  return {
    title: `${category.name} | The Digital Plant`,
    description: category.description
  };
}

export default function CategoryPage({ params }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Category</div>
            <h2>{category.name}</h2>
            <p className="lead">{category.description}</p>
          </div>
        </div>

        <div className="grid three">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </div>
    </section>
  );
}
