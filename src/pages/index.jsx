import ArticlePreview from "components/ArticlePreview";
import Container from "components/Container";
import Layout from "components/Layout";
import SEO from "components/SEO";
import { getArticles } from "lib/api";

function Home({ articles }) {
  return (
    <>
      <Layout>
        <SEO />
        <Container>
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
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const articles = await getArticles([
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
