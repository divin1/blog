import { RssIcon } from "@heroicons/react/outline";
import ThemeChanger from "components/theme-changer";
import Link from "next/link";

import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link className={styles.logo} href="/" passHref>
        <div className={styles.sunset} />
      </Link>
      <Link href="/about" passHref>
        About
      </Link>
      <div className={styles.spacer} />
      <a href="/rss.xml" target="_blank">
        <RssIcon className={styles.icon} />
      </a>
      <ThemeChanger />
    </nav>
  </header>
);

export default Header;
