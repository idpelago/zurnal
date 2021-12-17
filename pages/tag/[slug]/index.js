import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getTag } from "../../../apis";
import { processSSR } from "../../../utils/helpers";

const Tag = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  const queryKey = `tag/${slug}`;
  const params = {
    pageType: `# ${slug}`,
    queryKey,
    ...props,
  };

  return (
    <>
      <MetaHeader
        title={slug}
        description={`cari semua artikel dengan tagar ${slug} hanya di Zurnal.co`}
        type="tag"
      />

      <NewsFeedSection {...params} />
    </>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(Tag);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { slug, page = 1 } = query;

  const parameters = { slug, page };

  return processSSR(userAgent, getTag, parameters);
};
