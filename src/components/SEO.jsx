import config from "config";
import Head from "next/head";
import { useRouter } from "next/router";

function SEO({
  title = config.siteTitle,
  description = config.siteDescription,
  keywords = [],
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
        <meta name="keywords" content={keywords.join(", ")} />
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={config.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}/${config.defaultSocialBanner}`}
        />
      </Head>
    </>
  );
}

export default SEO;
