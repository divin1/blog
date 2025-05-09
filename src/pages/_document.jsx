import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      </Head>
      <body className="bg-stone-100 text-lg text-stone-500 antialiased dark:bg-stone-900 dark:text-stone-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
