/* eslint-disable react/jsx-props-no-spreading */
import "styles/main.scss";

import Cookies from "components/Cookies";
import keys from "keys";
import analytics from "lib/analytics";
import { useRouter } from "next/router";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // init analytics service
    analytics.init(localStorage);

    const handleRouteChange = (url) => {
      analytics.pageView(url);
    };
    // subscribe on mount
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      // unsubscribe on unmount
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${keys.GOOGLE_ANALYTICS}`}
      />
      {/* eslint-disable react/no-danger */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${keys.GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
      <ThemeProvider attribute="class" defaultTheme="system">
        <Cookies />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
