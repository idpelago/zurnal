const baseUrl = process.env.SITE_URL;

const formatUrl = (target) => {
  let newUrl = target.replace("&", "%26");

  return newUrl;
};
const sitemapSkeleton = (children, type) => {
  let skeletonHeader = type == "index" ? "sitemapindex" : "urlset";

  return `<?xml version="1.0" encoding="UTF-8"?>
    <${skeletonHeader} xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${children}</${skeletonHeader}>`;
};

export const createSitemap = (staticUrls, type = "index") => {
  let skeletonHeader = type == "index" ? "sitemap" : "url";

  const staticPages = staticUrls.map((url) => {
    return `${baseUrl}/${url}`;
  });

  const items = staticPages
    .map((url) => {
      return `
        <${skeletonHeader}>
            <loc>${formatUrl(url)}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </${skeletonHeader}>
        `;
    })
    .join("");

  return sitemapSkeleton(items, type);
};

export const parseSitemaps = (sitemaps, type = "index") => {
  let skeletonHeader = type == "index" ? "sitemap" : "url";

  const items = sitemaps
    .map((target) => {
      let hasLastMod = target.hasOwnProperty("lastMod");
      let renderLocation = `<loc>${formatUrl(target.location)}</loc>`;

      let renderTarget = hasLastMod
        ? `<lastmod>${target.lastMod}</lastmod>`
        : ``;

      let renderItem = `
        <${skeletonHeader}>
          ${renderLocation}
          ${renderTarget}
        </${skeletonHeader}>
      `;

      return renderItem;
    })
    .join("");

  return sitemapSkeleton(items, type);
};

export default () => {};
