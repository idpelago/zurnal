import Script from "next/script";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../../../Components/Layout";
import WithLayout from "../../../../Components/WithLayout";

import PostContentSection from "../../../../Sections/PostContent";
import NewsFeedRightSection from "../../../../Sections/NewsFeed/RightSide";

import { getPost } from "../../../../apis";
import { processSSR, processThemeCookie } from "../../../../utils/helpers";
import config from "../../../../utils/config";

const PostContent = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

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

  const handleRouteChange = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    calWidth();
    handleRouteChange();

    setTimeout(() => {
      setIsLoaded(true);

      window.FB.XFBML.parse();
    }, 1000);
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
          <div className="row">
            <PostContentSection {...params} />

            {mode == "desktop" ? <NewsFeedRightSection /> : ""}
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12">
              {!isLoaded ? (
                <>Loading Comments...</>
              ) : (
                <>
                  <div id="fb-root"></div>
                  <div
                    id="comments"
                    className="fb-comments"
                    data-href={`https://www.zurnal.co/post/${postSlugId}/${postSlugTitle}`}
                    data-colorscheme="light"
                    data-width="100%"
                    data-numposts="5"
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WithLayout((children) => (props) => {
  const Component = <Layout {...props}>{children}</Layout>;

  return Component;
})(PostContent);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { postSlugId, postSlugTitle, page = 1 } = query;
  const theme = processThemeCookie(req);

  const parameters = {
    postSlugId,
    postSlugTitle,
    page,
    theme,
  };

  return processSSR(userAgent, getPost, parameters);
};
