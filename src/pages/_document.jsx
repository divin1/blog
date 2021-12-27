import keys from "keys";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
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

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${keys.GOOGLE_ANALYTICS}`}
          />
          {/* eslint-disable react/no-danger */}
          <script
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
        </Head>
        <body className="antialiased bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-300 text-lg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
