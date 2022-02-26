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
      <span className="ml-4 text-sm">{new Date(date).toDateString()}</span>
      <div className="prose prose-stone mx-auto prose-h1:text-secondary-400 prose-p:text-lg prose-a:text-primary-400 hover:prose-a:text-primary-500 prose-img:rounded-md prose-img:shadow-md dark:prose-invert">
        <MDXRemote {...content} components={components} />
      </div>
    </article>
  );
}

export default Article;
