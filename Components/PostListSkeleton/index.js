import ContentLoader from "react-content-loader";
import { useEffect, useState } from "react";

import config from "../../utils/config";

const PostListSkeleton = () => {
  const { minWidth } = config;
  const [mode, setMode] = useState("mobile");

  useEffect(() => {
    const width = window.innerWidth;

    setMode(width < minWidth ? "mobile" : "desktop");
  });

  const DesktopSkeleton = () => {
    return (
      <>
        <rect x="0" y="0" rx="3" ry="3" width="40%" height="200" />
        <rect x="42%" y="0" rx="3" ry="3" width="60%" height="25" />
        <rect x="42%" y="40" rx="3" ry="3" width="40%" height="25" />

        <rect x="42%" y="83" rx="3" ry="3" width="60%" height="115" />
      </>
    );
  };

  const MobileSkeleton = () => {
    return (
      <>
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="240" />
        <rect x="0" y="263" rx="3" ry="3" width="100%" height="25" />
        <rect x="0" y="303" rx="3" ry="3" width="100%" height="50" />
      </>
    );
  };

  const Skeleton = () => {
    return (
      <ContentLoader
        speed={2}
        style={{ width: "100%" }}
        width={"100%"}
        height={mode == "desktop" ? 223 : 383}
        backgroundColor={"#f3f3f3"}
        foregroundColor={"#ecebeb"}
      >
        {mode == "desktop" ? <DesktopSkeleton /> : <MobileSkeleton />}
      </ContentLoader>
    );
  };

  return (
    <div className="col-lg-8 col-md-12">
      <div className="utf_more_news block color-default">
        <div id="utf_more_news_slide" className="utf_more_news_slide">
          <div className="item">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListSkeleton;
