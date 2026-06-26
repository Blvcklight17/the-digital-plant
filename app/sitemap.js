import { getAllArticles } from "../lib/articles";
import { categories, siteConfig } from "../data/site";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/articles",
    "/categories",
    "/tools",
    "/labs",
    "/resources",
    "/search",
    "/about",
    "/contact",
    "/privacy",
    "/terms"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date()
  }));

  const articles = getAllArticles().map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date || new Date())
  }));

  return [...routes, ...categoryRoutes, ...articles];
}
