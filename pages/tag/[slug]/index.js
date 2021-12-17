import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getTag } from "../../../apis";
import { detectRobot } from "../../../utils/helpers";

const Tag = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  const queryKey = `tag/${slug}`;

  return (
    <>
      <MetaHeader
        title={slug}
        description={`cari semua artikel dengan tagar ${slug} hanya di Zurnal.co`}
        type="tag"
      />

      <NewsFeedSection pageType={`# ${slug}`} queryKey={queryKey} {...props} />
    </>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(Tag);

export const getServerSideProps = async ({ req, query }) => {
  const response = {
    props: {},
  };

  const userAgent = req.headers["user-agent"];
  const isRobot = detectRobot(userAgent);

  if (!isRobot) return response;

  const { slug, page = 1 } = query;
  const ssrData = await getTag({ slug, page });

  response.props = {
    ssrData,
    isRobot,
  };

  return response;
};
