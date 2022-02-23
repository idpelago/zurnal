import Script from "next/script";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../../../Components/Layout";
import WithLayout from "../../../../Components/WithLayout";
import PostShare from "../../../../Components/PostShare";

import PostContentSection from "../../../../Sections/PostContent";

// import RelatedPostsSection from "../../../../Sections/RelatedPosts";
import PostCommentSection from "../../../../Sections/PostComment";

import { getPost } from "../../../../apis";

import { processSSR, processThemeCookie, loadScript } from "../../../../utils/helpers";
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

  const loadAddthis = () => {
    const scripts = [
      "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6209f866f185a6e6",
    ];

    scripts.map((script) => loadScript(false, script));
  }

  const refreshAddthis = () => {
    if (
      window.addthis !== undefined &&
      window.addthis.layers.refresh !== undefined
    ) {
      window.addthis.init();
      window.addthis.layers.refresh();
    }
  };

  useEffect(() => {
    return new Promise((resolve) => resolve())
      .then(() => loadAddthis())
      .then(() => refreshAddthis())
      .then(() => calWidth())
      .then(() => handleRouteChange())
      .then(() => setIsLoaded(true))
      .then(() => window.FB?.XFBML.parse());
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
  }, [router.events]);

  useEffect(() => {
    handleRouteChange();
  });

  return (
    <>
      <Script
        src="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=396954390897339&version=v2.0"
        strategy="afterInteractive"
      />

      <div className="main-box main-content post-content col-12">
        <PostContentSection {...params} />
        <PostShare />

        <PostCommentSection isLoaded={isLoaded} {...params} />
      </div>
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
