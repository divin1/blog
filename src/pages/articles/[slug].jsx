import ArticleBody from "components/article-body";
import ArticleHeader from "components/article-header";
import Layout from "components/layout";
import { getArticleBySlug, getArticles } from "lib/api";
import { mdxToHtml } from "lib/util";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "styles/article.module.css";

function Article({ article }) {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
      </Head>
      <article className={styles.article}>
        <ArticleHeader
          title={article.title}
          date={article.date}
          readTime={article.readTime}
        />
        <ArticleBody content={article.content} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug, [
    "title",
    "description",
    "excerpt",
    "date",
    "readTime",
    "slug",
    "content",
  ]);
  // parse content
  const content = await mdxToHtml(article.content);

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const articles = getArticles(["slug"]);

  return {
    paths: articles.map((a) => {
      return {
        params: {
          slug: a.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Article;
