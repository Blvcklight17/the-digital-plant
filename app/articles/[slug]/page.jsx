import { getAllArticles, getArticleBySlug } from "../../../lib/articles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | The Digital Plant`,
    description: article.description
  };
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function extractHeadings(markdown) {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "").trim();
      return { text, id: slugify(text) };
    });
}

function markdownToHtml(markdown) {
  let html = markdown;

  html = html.replace(/```([\s\S]*?)```/gim, (_, code) => {
    return `<pre><code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;
  });

  html = html
    .replace(/^### (.*$)/gim, (_, text) => `<h3 id="${slugify(text)}">${text}</h3>`)
    .replace(/^## (.*$)/gim, (_, text) => `<h2 id="${slugify(text)}">${text}</h2>`)
    .replace(/^# (.*$)/gim, (_, text) => `<h1 id="${slugify(text)}">${text}</h1>`)
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/`([^`]+)`/gim, "<code>$1</code>")
    .replace(/^\- (.*)$/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gims, "<ul>$1</ul>");

  return html
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<h") || trimmed.startsWith("<ul") || trimmed.startsWith("<pre")) return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join("");
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const headings = extractHeadings(article.content);

  return (
    <section className="article-shell">
      <article className="article">
        <div className="card-kicker">{article.category}</div>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <div className="article-meta">
          <span>{article.date}</span>
          <span>{article.readingTime}</span>
        </div>

        {headings.length > 0 && (
          <div className="toc">
            <strong>In this guide</strong>
            {headings.map((heading) => (
              <a key={heading.id} href={`#${heading.id}`}>{heading.text}</a>
            ))}
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }} />
      </article>
    </section>
  );
}
