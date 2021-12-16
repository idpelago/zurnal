import AdsSection from "../Sections/Ads";
import FeaturedSection from "../Sections/Featured";
import NewsFeedSection from "../Sections/NewsFeed";
import CategoriesFeedSection from "../Sections/CategoriesFeed";
import HorizontalFeedSection from "../Sections/HorizontalFeed";

import Layout from "../Components/Layout";
import WithLayout from "../Components/WithLayout";
import MetaHeader from "../Components/MetaHeader";

import { getPosts } from "../apis";
import { detectRobot } from "../utils/helpers";

const Index = (props) => {
  const queryKey = `posts`;
  console.log('props: ', props)
  return (
    <>
      <MetaHeader type="index" />

      {/* <FeaturedSection /> */}

      {/* <CategoriesFeedSection /> */}
      {/* <HorizontalFeedSection /> */}

      <NewsFeedSection queryKey={queryKey} {...props} />
      {/* <AdsSection /> */}
    </>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(Index);

export const getServerSideProps = async ({ req, query }) => {
  const response = {
    props: {},
  };

  const userAgent = req.headers["user-agent"];
  const isRobot = detectRobot(userAgent);

  if (!isRobot) return response;

  const { page = 1 } = query;
  const ssrData = await getPosts({ page });

  response.props = {
    ssrData,
    isRobot,
  };

  return response;
};
