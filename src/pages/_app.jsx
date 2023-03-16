/* eslint-disable react/jsx-props-no-spreading */
import "styles/main.scss";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
