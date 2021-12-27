/* eslint-disable react/jsx-props-no-spreading */
import "styles/main.scss";

import { pageView } from "lib/analytics";
import { useRouter } from "next/router";
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
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
