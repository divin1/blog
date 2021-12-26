import Link from "next/link";

function ArticlePreview({ date, readTime, title, excerpt, slug }) {
  return (
    <article className="pt-16">
      <Link href={`/articles/${slug}`} passHref>
        <h1 className="text-stone-900 dark:text-stone-100 hover:text-secondary-400 dark:hover:text-secondary-400 font-bold text-xl cursor-pointer transition ease-in-out duration-500">
          {title}
        </h1>
      </Link>
      <p>{excerpt}</p>
      <span className="text-base">
        {new Date(date).toDateString()} &mdash; {readTime} min read
      </span>
    </article>
  );
}

export default ArticlePreview;
