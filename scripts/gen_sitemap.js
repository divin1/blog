const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");
const config = require("../src/config");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "src/pages/*.jsx",
    "src/articles/**/*.mdx",
    "!src/pages/_*.jsx",
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("src/pages/", "/")
                  .replace("src/articles/", "/articles/")
                  .replace(".jsx", "")
                  .replace(".mdx", "")
                  .replace("/rss.xml", "");
                const route = path === "/index" ? "" : path;
                if (
                  page === `pages/404.js` ||
                  page === `pages/articles/[...slug].js`
                ) {
                  return;
                }
                return `
                        <url>
                            <loc>${config.siteUrl}${route}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", formatted);
})();
