import styles from "./article-body.module.css";

function ArticleBody({ content }) {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default ArticleBody;
