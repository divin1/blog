import Footer from "components/Footer";
import Header from "components/Header";
import keys from "keys";
import Script from "next/script";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const [allowAnalytics, setAllowAnalytics] = useState(true);

  useEffect(() => {
    setAllowAnalytics(localStorage.getItem("allow-analytics") !== false);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {allowAnalytics && (
        <Script
          data-host="https://microanalytics.io"
          data-dnt="false"
          src="https://microanalytics.io/js/script.js"
          id={keys.MICROANALYTICS_ID}
          async
          defer
        />
      )}
    </>
  );
}

export default Layout;
