import Link from "next/link";

function ArticlePreview({ date, readTime, title, abstract, slug }) {
  return (
    <article className="pt-16">
      <Link href={`/articles/${slug}`} passHref>
        <h1 className="cursor-pointer text-xl font-bold text-stone-900 transition duration-500 ease-in-out hover:text-secondary-400 dark:text-stone-100 dark:hover:text-secondary-400">
          {title}
        </h1>
      </Link>
      <p>{abstract}</p>
      <span className="text-base">
        {new Date(date).toDateString()} &mdash; {readTime} min read
      </span>
    </article>
  );
}

export default ArticlePreview;
