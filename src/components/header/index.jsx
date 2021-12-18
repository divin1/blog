import Link from "next/link";

import styles from "./header.module.css";

import ThemeChanger from "components/theme-changer";
import { RssIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          <div className={styles.sunset}></div>
        </Link>
        <Link href="/about">About</Link>
        <div className={styles.spacer}></div>
        <a href="/rss.xml" target="_blank">
          <RssIcon className={styles.icon} />
        </a>
        <ThemeChanger />
      </nav>
    </header>
  );
};

export default Header;
