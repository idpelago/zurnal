import { parseSitemaps } from "../helpers";
import { getPostsByIdSitemap } from "../../../apis";

export const getServerSideProps = async ({ res, query }) => {
  const { id } = query;
  const items = await getPostsByIdSitemap(id);

  const sitemap = parseSitemaps(items);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default () => {};
