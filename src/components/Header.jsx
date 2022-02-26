/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useEffect, useState } from "react";

function isScrollTop() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0);
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isTop;
}

const Header = () => {
  const isTop = isScrollTop();

  return (
    <header
      className={`firefox:bg-opacity-100 dark:firefox:bg-opacity-100 sticky top-0 z-20 w-full bg-stone-100 bg-opacity-30 backdrop-blur-sm backdrop-saturate-150 backdrop-filter dark:bg-stone-900 dark:bg-opacity-30 ${
        isTop
          ? "border-none"
          : "border-b border-stone-200 dark:border-stone-800"
      }`}
    >
      <nav className="flex items-center space-x-4 p-6">
        <Link href="/" passHref>
          <div className="h-8 w-8 cursor-pointer rounded-full bg-gradient-to-r from-rose-400 to-indigo-500 hover:animate-pulse" />
        </Link>
        <div className="grow" />
        <Link href="/" passHref>
          <a className="text-stone-500 hover:text-secondary-400 dark:text-stone-300 dark:hover:text-secondary-400">
            Articles
          </a>
        </Link>
        <Link href="/about" passHref>
          <a className="text-stone-500 hover:text-secondary-400 dark:text-stone-300 dark:hover:text-secondary-400">
            About
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
