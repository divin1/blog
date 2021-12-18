import styles from "./article-body.module.css";
import Button from "components/button";
import { Chart } from "react-google-charts";
import { MDXRemote } from "next-mdx-remote";

// load components to pass to MDX
const components = {
  Button: Button,
  Chart: Chart,
};

function ArticleBody({ content }) {
  return (
    <div className={styles.content}>
      <MDXRemote {...content} components={components} />
    </div>
  );
}

export default ArticleBody;
