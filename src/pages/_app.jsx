/* eslint-disable react/jsx-props-no-spreading */
import "styles/main.scss";

import Cookies from "components/Cookies";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Cookies />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
