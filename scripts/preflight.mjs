import fs from "fs";
import path from "path";

const root = process.cwd();
const articlesDir = path.join(root, "content", "articles");

let errors = [];

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function frontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const data = {};
  for (const line of match[1].split("\n")) {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) continue;
    data[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
  }
  return data;
}

if (!fs.existsSync(articlesDir)) {
  errors.push("Missing content/articles directory.");
} else {
  const files = fs.readdirSync(articlesDir).filter((file) => file.endsWith(".md"));

  if (files.length < 10) {
    errors.push(`Expected at least 10 articles for launch candidate, found ${files.length}.`);
  }

  for (const file of files) {
    const full = path.join(articlesDir, file);
    const raw = read(full);
    const fm = frontmatter(raw);

    if (!fm) {
      errors.push(`${file}: missing frontmatter.`);
      continue;
    }

    for (const key of ["title", "description", "date", "category", "readingTime"]) {
      if (!fm[key]) errors.push(`${file}: missing ${key}.`);
    }

    const body = raw.replace(/^---\n[\s\S]*?\n---/, "").trim();
    if (body.length < 800) {
      errors.push(`${file}: article body is short (${body.length} characters).`);
    }
  }
}

const requiredFiles = [
  "app/layout.jsx",
  "app/page.jsx",
  "app/sitemap.js",
  "app/robots.js",
  "app/rss.xml/route.js",
  "vercel.json",
  ".env.example",
  "public/favicon.svg",
  "public/og.svg"
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

if (errors.length) {
  console.error("\nPreflight failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Preflight passed. The project is ready for build/deployment checks.");
