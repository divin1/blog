import Link from "next/link";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          <div className={styles.sunset}></div>
        </Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
