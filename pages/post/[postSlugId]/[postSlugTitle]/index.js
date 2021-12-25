import Script from "next/script";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../../../Components/Layout";
import WithLayout from "../../../../Components/WithLayout";

import PostContentSection from "../../../../Sections/PostContent";
import NewsFeedRightSection from "../../../../Sections/NewsFeed/RightSide";

import { getPost } from "../../../../apis";
import { processSSR } from "../../../../utils/helpers";
import config from "../../../../utils/config";

const PostContent = (props) => {
  const router = useRouter();
  const { postSlugId, postSlugTitle } = router.query;
  const params = {
    postSlugId,
    postSlugTitle,
    ...props,
  };

  const { minWidth } = config;
  const [mode, setMode] = useState();

  const calWidth = () =>
    setMode(window.innerWidth < minWidth ? "mobile" : "desktop");

  useEffect(() => {
    calWidth();

    setTimeout(() => window.FB?.XFBML.parse(), 1000);
  }, [postSlugId, postSlugTitle]);

  useEffect(() => {
    const handleChange = () => window.scrollTo({ top: 0, behavior: "smooth" });

    router.events.on("routeChangeComplete", handleChange);

    // Watch resize event
    window.addEventListener("resize", calWidth, false);

    return () => window.removeEventListener("resize", calWidth);
  }, []);

  return (
    <>
      <Script
        src="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=396954390897339&version=v2.0"
        strategy="afterInteractive"
      />

      <section className="utf_block_wrapper">
        <div className="container">
          <div className="row">
            <PostContentSection {...params} />

            {mode == "desktop" ? <NewsFeedRightSection /> : ""}
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div id="fb-root"></div>
              <div
                id="comments"
                className="fb-comments"
                data-href={`https://www.zurnal.co/post/${postSlugId}/${postSlugTitle}`}
                data-colorscheme="light"
                data-width="100%"
                data-numposts="5"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(PostContent);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { postSlugId, postSlugTitle, page = 1 } = query;
  const parameters = {
    postSlugId,
    postSlugTitle,
    page,
  };

  return processSSR(userAgent, getPost, parameters);
};
