import Head from "next/head";
import getConfig from "next/config";
import { getPostUrl } from "../../utils/url-path";

const { publicRuntimeConfig } = getConfig();
const { SITE_URL: siteUrl } = publicRuntimeConfig;

function PostMetaHeader({ elem }) {
  const brandName = `Zurnal`;
  const brandSlogan = `Entertain, Inspire & Educate`;

  const { title, excerpt } = elem;
  const normalizedTitle =
    title !== null
      ? `${title} | ${brandName}`
      : `${brandName} | ${brandSlogan}`;

  const normalizedDescription = excerpt !== null ? excerpt : brandSlogan;

  const postUrl = getPostUrl(elem);
  const normalizedUrl = `${siteUrl}${postUrl}`;

  const ogImage = elem.featured_image;

  return (
    <Head>
      <title key="title">{normalizedTitle}</title>
      <meta key="og:title" property="og:title" content={normalizedTitle} />
      <meta
        key="twitter:title"
        name="twitter:title"
        content={normalizedTitle}
      />
      <meta name="author" content={brandName} />
      <meta name="description" content={normalizedDescription} />
      <meta name="twitter:site" content="@zurnal" />
      <meta name="twitter:creator" content="@zurnal" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={normalizedDescription} />
      <meta name="twitter:image" content={ogImage} />

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:description" content={normalizedDescription} />
      <meta property="og:url" content={normalizedUrl} />

      <link rel="canonical" href={normalizedUrl} />
    </Head>
  );
}

export default PostMetaHeader;
