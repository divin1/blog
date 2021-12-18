import fs from "fs";
import matter from "gray-matter";
import { getReadTime } from "lib/util";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";

const articlesDir = join(process.cwd(), "src/articles");

export function getArticleSlugs() {
  return fs.readdirSync(articlesDir);
}

export async function getArticleBySlug(slug, fields = []) {
  const realSlug = slug.replace(".mdx", "");
  const fullPath = join(articlesDir, `${realSlug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const article = {};

  fields.forEach((field) => {
    if (field === "slug") {
      article[field] = realSlug;
    }
    if (field === "content") {
      article[field] = mdxSource;
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

export async function getArticles(fields = []) {
  const slugs = getArticleSlugs();
  const articles = [];
  for (const slug of slugs) {
    const article = await getArticleBySlug(slug, fields);
    articles.push(article);
  }
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  return articles;
}

export const articles = getArticles();
