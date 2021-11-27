import ArticlePreview from "components/article-preview";
import Layout from "components/layout";
import { getArticles } from "lib/api";
import Head from "next/head";

function Home({ articles }) {
  return (
    <>
      <Layout>
        <Head>
          <title>ndv</title>
          <meta name="description" content="ndv's blog" />
          <meta property="og:title" content="ndv's blog" />
          <meta property="og:description" content="personal blog about stuff" />
        </Head>
        {articles.map((article) => (
          <ArticlePreview
            key={article.slug}
            date={article.date}
            readTime={article.readTime}
            title={article.title}
            excerpt={article.excerpt}
            slug={article.slug}
          />
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const articles = getArticles([
    "date",
    "title",
    "description",
    "excerpt",
    "date",
    "readTime",
    "slug",
    "content",
  ]);

  return {
    props: { articles },
  };
}

export default Home;
