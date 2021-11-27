import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.items}>
        <div className={styles.links}>
          <a href="https://github.com/divin1/blog" target="_blank">
            Source Code
          </a>
          <a href="/rss.xml" target="_blank">
            RSS
          </a>
          <a href="/atom.xml" target="_blank">
            Atom
          </a>
          <a href="/json.json" target="_blank">
            JSON
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
