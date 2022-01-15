import Script from "next/script";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

import Layout from "../../../../Components/Layout";
import WithLayout from "../../../../Components/WithLayout";

import PostContentSection from "../../../../Sections/PostContent";
import NewsFeedRightSection from "../../../../Sections/NewsFeed/RightSide";

import { useIntersection } from "../../../../hooks/use-intersection";

import { getPost } from "../../../../apis";
import { processSSR } from "../../../../utils/helpers";
import config from "../../../../utils/config";

const PostContent = (props) => {
  const domRef = useRef();
  const [isInView, setIsInView] = useState(false);

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

  useIntersection(domRef, () => {
    setIsInView(true);

    () => window.FB.XFBML.parse();
  });

  const handleRouteChange = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    calWidth();
    handleRouteChange();
  }, [postSlugId, postSlugTitle]);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);

    // Watch resize event
    window.addEventListener("resize", calWidth, false);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);

      window.removeEventListener("resize", calWidth);
    };
  }, []);

  useEffect(() => {
    handleRouteChange();
  });

  return (
    <>
      <Script
        src="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=396954390897339&version=v2.0"
        strategy="afterInteractive"
      />

      <section className="utf_block_wrapper">
        <div className="container">
          <div ref={domRef} className="row">
            <PostContentSection {...params} />

            {mode == "desktop" ? <NewsFeedRightSection /> : ""}
          </div>

          <div className="row">
            {isInView && (
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
            )}
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
