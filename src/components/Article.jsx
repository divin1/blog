/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { ArrowLeft } from "react-feather";
import { Chart } from "react-google-charts";

// load components to pass to MDX
const components = {
  Chart,
  img: (props) => <Image {...props} layout="responsive" loading="lazy" />,
};

function Article({ content, date }) {
  return (
    <article className="pt-16">
      <div className="mb-4">
        <Link
          href="/"
          passHref
          className="font-bold text-stone-500 transition duration-500 ease-in-out hover:text-secondary-400 dark:text-stone-300 dark:hover:text-secondary-400"
        >
          <span className="flex flex-row items-center">
            <ArrowLeft className="h4 mr-4 w-4" />
            All articles
          </span>
        </Link>
      </div>
      <span className="ml-4 text-sm">{new Date(date).toDateString()}</span>
      <div className="prose prose-stone mx-auto dark:prose-invert prose-h1:text-secondary-400 prose-p:text-lg prose-a:text-primary-400 hover:prose-a:text-primary-500 prose-img:rounded-md prose-img:shadow-md">
        <MDXRemote {...content} components={components} />
      </div>
    </article>
  );
}

export default Article;
