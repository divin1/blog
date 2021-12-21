/* eslint-disable react/jsx-props-no-spreading */
import { MDXRemote } from "next-mdx-remote";
import { Chart } from "react-google-charts";

import styles from "./article-body.module.css";

// load components to pass to MDX
const components = {
  Chart,
};

function ArticleBody({ content }) {
  return (
    <div className={styles.content}>
      <MDXRemote {...content} components={components} />
    </div>
  );
}

export default ArticleBody;
