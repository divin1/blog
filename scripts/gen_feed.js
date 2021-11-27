const Feed = require('feed').Feed;
const config = require('../config');
const matter = require('gray-matter');
const fs = require('fs');
const join = require('path').join;

const articlesDir = join(process.cwd(), "/src/articles");

function getArticleSlugs() {
  return fs.readdirSync(articlesDir);
}

function getArticleBySlug(slug, fields = []) {
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
    if (data[field]) {
      article[field] = data[field];
    }
  });

  return article;
}

function getArticles(fields = []) {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
      config.owner
    }`,
    feedLinks: {
      rss: `${config.siteUrl}/rss.xml`,
      atom: `${config.siteUrl}/atom.xml`,
    },
    author: {
      name: config.author,
      email: config.email,
      link: `${config.siteUrl}/about`,
    },
  });

  const articles = getArticles([
    "date",
    "title",
    "description",
    "content",
    "excerpt",
    "date",
    "slug",
  ]);

  articles.forEach((article) => {
    feed.addItem({
      title: article.title,
      id: article.slug,
      link: `${config.siteUrl}/articles/${article.slug}`,
      description: article.exceprt,
      content: article.content,
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

  const atomPath = join(process.cwd(), "/public/atom.xml");
  fs.writeFileSync(atomPath, feed.atom1());

  const jsonPath = join(process.cwd(), "/public/json.json");
  fs.writeFileSync(jsonPath, feed.json1());
})();
