/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import NavMenu from "components/NavMenu";
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

function Header() {
  const isTop = isScrollTop();

  return (
    <header
      className={clsx({
        "firefox:bg-surface/100 dark:firefox:bg-surface/100 sticky top-0 z-20 w-full bg-stone-100 bg-stone/30 backdrop-blur-sm backdrop-saturate-150 backdrop-filter dark:bg-stone-900 dark:bg-stone/30": true,
        "border-none": isTop,
        "border-b border-stone-200 dark:border-stone-800": !isTop,
      })}
    >
      <nav className="flex items-center space-x-4 p-6">
        <Link href="/" passHref>
          <div className="h-8 w-8 cursor-pointer rounded-full bg-linear-90 from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r hover:shadow-lg hover:shadow-indigo-500/20" />
        </Link>
        <div className="grow" />
        <NavMenu />
      </nav>
    </header>
  );
}

export default Header;
