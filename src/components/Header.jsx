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
      className={`sticky w-full top-0 z-20 bg-stone-100 dark:bg-stone-900 bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-sm firefox:bg-opacity-100 dark:firefox:bg-opacity-100 ${
        isTop
          ? "border-none"
          : "border-b border-stone-200 dark:border-stone-800"
      }`}
    >
      <nav className="flex items-center p-6 space-x-4">
        <Link href="/" passHref>
          <div className="bg-gradient-to-r from-rose-400 to-indigo-500 h-8 w-8 rounded-full cursor-pointer hover:animate-pulse" />
        </Link>
        <div className="grow" />
        <Link href="/" passHref>
          <a className="text-stone-500 dark:text-stone-300 hover:text-secondary-400 dark:hover:text-secondary-400">
            Articles
          </a>
        </Link>
        <Link href="/about" passHref>
          <a className="text-stone-500 dark:text-stone-300 hover:text-secondary-400 dark:hover:text-secondary-400">
            About
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
