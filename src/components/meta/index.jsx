import Head from "next/head";

import config from "../../../config";

function Meta({ image, url }) {
  return (
    <Head>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Roboto+Mono:wght@300&display=swap');
      </style>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={config.author} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={config.siteName} />

      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;