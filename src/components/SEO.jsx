import config from "config.js";
import Head from "next/head";
import { useRouter } from "next/router";

function SEO({
  title = config.siteTitle,
  description = config.siteDescription,
  ogType = "website",
  ogImage = config.defaultSocialBanner,
}) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${config.siteUrl}${router.asPath}`} />
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={config.siteName} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        {typeof ogImage === "string" ? (
          <meta property="og:image" content={ogImage} key={ogImage} />
        ) : (
          ogImage.map(({ url }) => (
            <meta property="og:image" content={url} key={url} />
          ))
        )}
      </Head>
    </>
  );
}

export default SEO;
