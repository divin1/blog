import Footer from "components/footer";
import Header from "components/header";
import Head from "components/meta";

import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Head />
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
