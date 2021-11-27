import fs from "fs";
import matter from "gray-matter";
import { getReadTime } from "lib/util";
import { join } from "path";


const articlesDir = join(process.cwd(), "src/articles");

export function getArticleSlugs() {
  return fs.readdirSync(articlesDir);
}

export function getArticleBySlug(slug, fields = []) {
  const realSlug = slug.replace(".mdx", "");
  const fullPath = join(articlesDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const article = {};

  fields.forEach((field) => {
    if (field === "slug") {
      article[field] = realSlug;
    }
    if (field === "content") {
      article[field] = content;
    }
    if (field === "readTime") {
      article[field] = getReadTime(content);
    }
    if (data[field]) {
      article[field] = data[field];
    }
  });

  return article;
}

export function getArticles(fields = []) {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return articles;
}

export const articles = getArticles();
