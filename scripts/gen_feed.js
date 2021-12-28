const Feed = require("feed").Feed;
const config = require("../src/config");
const matter = require("gray-matter");
const fs = require("fs");
const join = require("path").join;

const articlesDir = join(process.cwd(), "/src/articles");

function getArticleSlugs() {
  return fs.readdirSync(articlesDir);
}

async function getArticleBySlug(slug, fields = []) {
  const realSlug = slug.replace(".mdx", "");
  const fullPath = join(articlesDir, `${realSlug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf-8");
  const { content, data } = matter(source);

  const article = {};

  fields.forEach((field) => {
    if (field === "slug") {
      article[field] = realSlug;
    }
    if (data[field]) {
      article[field] = data[field];
    }
  });

  return article;
}

async function getArticles(fields = []) {
  const slugs = getArticleSlugs();
  let articles = [];
  slugs.forEach((slug) => {
    articles.push(getArticleBySlug(slug, fields));
  });
  articles = await Promise.all(articles);
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  return articles;
}

(async function genFeed() {
  const feed = new Feed({
    title: config.siteName,
    description: "All articles of the blog.",
    id: config.siteUrl,
    link: config.siteUrl,
    language: "en",
    image: `${config.siteUrl}/banner.jpg`,
    favicon: `${config.siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      config.author
    }`,
    generator: "https://github.com/divin1/blog/blob/main/scripts/gen_feed.js",
    feedLinks: {
      rss: `${config.siteUrl}/rss.xml`,
    },
    author: {
      name: config.author,
      email: config.email,
      link: `${config.siteUrl}/about`,
    },
  });

  const articles = await getArticles([
    "date",
    "title",
    "description",
    "content",
    "abstract",
    "date",
    "slug",
  ]);

  articles.forEach((article) => {
    feed.addItem({
      title: article.title,
      id: article.slug,
      link: `${config.siteUrl}/articles/${article.slug}`,
      description: article.exceprt,
      author: [
        {
          name: config.author,
          email: config.email,
          link: `${config.siteUrl}/about`,
        },
      ],
      date: new Date(article.date),
    });
  });

  const rssPath = join(process.cwd(), "/public/rss.xml");
  fs.writeFileSync(rssPath, feed.rss2());
})();
