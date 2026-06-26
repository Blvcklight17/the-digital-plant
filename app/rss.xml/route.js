import { getAllArticles } from "../../lib/articles";
import { siteConfig } from "../../data/site";

export async function GET() {
  const articles = getAllArticles();

  const items = articles.map((article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${siteConfig.url}/articles/${article.slug}</link>
      <guid>${siteConfig.url}/articles/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>
  `).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${siteConfig.name}</title>
      <description>${siteConfig.description}</description>
      <link>${siteConfig.url}</link>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml"
    }
  });
}
