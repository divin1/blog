import styles from "./article-header.module.css";

function ArticleHeader({ title, date, readTime }) {
  return (
    <div className={styles.container}>
      <span className={styles.date}>
        {new Date(date).toLocaleDateString()} &mdash; {readTime} min read
      </span>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default ArticleHeader;
