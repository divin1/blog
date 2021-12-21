import Link from "next/link";

import styles from "./article-preview.module.css";

function ArticlePreview({ date, readTime, title, excerpt, slug }) {
  return (
    <article className={styles.article}>
      <Link href={`/articles/${slug}`} passHref>
        <h1 className={styles.article__title}>{title}</h1>
      </Link>
      <div className={styles.article__excerpt}>{excerpt}</div>
      <div className={styles.article__footer}>
        {new Date(date).toLocaleDateString()} &mdash; {readTime} min read
      </div>
    </article>
  );
}

export default ArticlePreview;
