import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getCategory } from "../../../apis";
import { processSSR, processThemeCookie } from "../../../utils/helpers";

const Category = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  const queryKey = `category/${slug}`;

  const params = {
    pageType: slug,
    queryKey,
    ...props,
  };

  return (
    <>
      <MetaHeader
        title={slug}
        description={`cari semua artikel dari kategori ${slug} hanya di Zurnal.co`}
        type="category"
      />

      <NewsFeedSection {...params} />
    </>
  );
};

export default WithLayout((children) => (props) => {
  const Component = <Layout {...props}>{children}</Layout>;

  return Component;
})(Category);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { slug, page = 1 } = query;
  const theme = processThemeCookie(req);

  const parameters = { slug, page, theme };

  return processSSR(userAgent, getCategory, parameters);
};
