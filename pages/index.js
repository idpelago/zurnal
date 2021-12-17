import AdsSection from "../Sections/Ads";
import FeaturedSection from "../Sections/Featured";
import NewsFeedSection from "../Sections/NewsFeed";
import CategoriesFeedSection from "../Sections/CategoriesFeed";
import HorizontalFeedSection from "../Sections/HorizontalFeed";

import Layout from "../Components/Layout";
import WithLayout from "../Components/WithLayout";
import MetaHeader from "../Components/MetaHeader";

import { getPosts } from "../apis";
import { processSSR } from "../utils/helpers";

const Index = (props) => {
  const queryKey = `posts`;
  const params = { queryKey, ...props };

  return (
    <>
      <MetaHeader type="index" />

      {/* <FeaturedSection /> */}
      {/* <CategoriesFeedSection /> */}
      {/* <HorizontalFeedSection /> */}

      <NewsFeedSection {...params} />

      {/* <AdsSection /> */}
    </>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(Index);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { page = 1 } = query;

  const parameters = { page };

  return processSSR(userAgent, getPosts, parameters);
};
