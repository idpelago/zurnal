import { useRouter } from "next/router";

import Layout from "../../../../Components/Layout";
import WithLayout from "../../../../Components/WithLayout";

import PostContentSection from "../../../../Sections/PostContent";
import NewsFeedRightSection from "../../../../Sections/NewsFeed/RightSide";

import { getPost } from "../../../../apis";
import { detectRobot } from "../../../../utils/helpers";

const PostContent = (props) => {
  const router = useRouter();
  const { postSlugId, postSlugTitle } = router.query;

  return (
    <section className="utf_block_wrapper">
      <div className="container">
        <div className="row">
          <PostContentSection
            {...props}
            postSlugId={postSlugId}
            postSlugTitle={postSlugTitle}
          />

          <NewsFeedRightSection />
        </div>
      </div>
    </section>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(PostContent);

export const getServerSideProps = async ({ req, query }) => {
  const response = {
    props: {},
  };

  const userAgent = req.headers["user-agent"];
  const isRobot = detectRobot(userAgent);

  if (!isRobot) return response;

  const { postSlugId, postSlugTitle, page = 1 } = query;
  const ssrData = await getPost({ postSlugId, postSlugTitle, page });

  response.props = {
    ssrData,
    isRobot,
  };

  return response;
};
