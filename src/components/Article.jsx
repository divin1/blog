/* eslint-disable react/jsx-props-no-spreading */
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { Chart } from "react-google-charts";

// load components to pass to MDX
const components = {
  Chart,
  img: (props) => <Image {...props} layout="responsive" loading="lazy" />,
};

function Article({ content, date }) {
  return (
    <article className="pt-16">
      <span className="text-sm ml-4">{new Date(date).toDateString()}</span>
      <div className="mx-auto prose prose-stone prose-img:rounded-md prose-img:shadow-md prose-h1:text-secondary-400 prose-a:text-primary-400 hover:prose-a:text-primary-500 dark:prose-invert prose-p:text-lg">
        <MDXRemote {...content} components={components} />
      </div>
    </article>
  );
}

export default Article;
