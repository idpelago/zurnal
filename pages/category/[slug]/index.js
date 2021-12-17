import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getCategory } from "../../../apis";
import { processSSR } from "../../../utils/helpers";

const Category = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  const queryKey = `category/${slug}`;

  return (
    <>
      <MetaHeader
        title={slug}
        description={`cari semua artikel dari kategori ${slug} hanya di Zurnal.co`}
        type="category"
      />

      <NewsFeedSection pageType={`${slug}`} queryKey={queryKey} {...props} />
    </>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(Category);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { slug, page = 1 } = query;

  const parameters = { slug, page };

  return processSSR(userAgent, getCategory, parameters);
};
