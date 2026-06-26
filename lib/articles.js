import fs from "fs";
import path from "path";
import { categoryToSlug } from "../data/site";

const articlesDirectory = path.join(process.cwd(), "content/articles");

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { data: {}, content: raw };
  }

  const data = {};

  for (const line of match[1].split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return {
    data,
    content: raw.slice(match[0].length).trim()
  };
}

export function getAllArticles() {
  if (!fs.existsSync(articlesDirectory)) return [];

  const files = fs.readdirSync(articlesDirectory).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = parseFrontmatter(raw);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        category: data.category || "Industrial AI",
        categorySlug: categoryToSlug(data.category || "Industrial AI"),
        readingTime: data.readingTime || "6 min read",
        content
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    category: data.category || "Industrial AI",
    categorySlug: categoryToSlug(data.category || "Industrial AI"),
    readingTime: data.readingTime || "6 min read",
    content
  };
}

export function getArticlesByCategory(categorySlug) {
  return getAllArticles().filter((article) => article.categorySlug === categorySlug);
}
