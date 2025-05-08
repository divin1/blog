/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";

function ErrorPageLayout({ statusCode }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="prose prose-stone mx-auto flex flex-col items-center text-center dark:prose-invert prose-h1:text-secondary-400">
        <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-indigo-500 text-center hover:animate-pulse">
          {statusCode}
        </div>

        <h2>
          {statusCode === "404"
            ? "The page does not exist."
            : "Something went wrong. Not your fault so don't stress it."}
        </h2>
        <Link href="/" passHref>
          <a>Back home</a>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPageLayout;
