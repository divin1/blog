import Link from "next/link";

import styles from "./header.module.css";

import ThemeChanger from "components/theme-changer";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          <div className={styles.sunset}></div>
        </Link>
        <Link href="/about">About</Link>
        <ThemeChanger />
      </nav>
    </header>
  );
};

export default Header;
