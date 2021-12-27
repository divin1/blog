import Article from "components/Article";
import Container from "components/Container";
import Layout from "components/Layout";
import SEO from "components/SEO";
import Share from "components/Share";
import config from "config";
import { getArticleBySlug, getArticles } from "lib/api";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

function ArticleServer({ article }) {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.abstract}
        ogType="article"
      />
      <Container>
        <Article content={article.content} date={article.date} />
        <Share
          title={article.title}
          url={`${config.siteUrl}${router.asPath}`}
        />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug, [
    "title",
    "description",
    "excerpt",
    "date",
    "readTime",
    "slug",
    "content",
  ]);

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const articles = await getArticles(["slug"]);

  return {
    paths: articles.map((a) => ({
      params: {
        slug: a.slug,
      },
    })),
    fallback: false,
  };
}

export default ArticleServer;
