/* eslint-disable react/jsx-props-no-spreading */
import "styles/main.scss";

import { plugin } from "config";
import { pageView } from "lib/analytics";
import { useRouter } from "next/router";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
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
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${plugin.GOOGLE_ANALYTICS}`}
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
                gtag('config', '${plugin.GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
    </>
  );
}

export default MyApp;
