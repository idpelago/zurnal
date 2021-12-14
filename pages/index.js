import AdsSection from "../Sections/Ads";
import FeaturedSection from "../Sections/Featured";
import NewsFeedSection from "../Sections/NewsFeed";
import CategoriesFeedSection from "../Sections/CategoriesFeed";
import HorizontalFeedSection from "../Sections/HorizontalFeed";

import Layout from "../Components/Layout";
import WithLayout from "../Components/WithLayout";

const Index = () => {
  return (
    <>
      {/* <FeaturedSection /> */}

      {/* <CategoriesFeedSection /> */}
      {/* <HorizontalFeedSection /> */}

      <NewsFeedSection />
      {/* <AdsSection /> */}
    </>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(Index);
