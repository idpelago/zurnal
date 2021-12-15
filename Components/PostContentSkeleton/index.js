import ContentLoader from "react-content-loader";
import { useEffect, useState } from "react";

import config from "../../utils/config";

const PostContentSkeleton = () => {
  let width;

  const { minWidth } = config;
  const [mode, setMode] = useState("desktop");

  useEffect(() => {
    width = window.innerWidth;

    setMode(width < minWidth ? "mobile" : "desktop");
  });

  const DesktopSkeleton = () => {
    return (
      <>
        <rect x="0" y="17" rx="3" ry="3" width="100%" height="35" />
        <rect x="0" y="60" rx="3" ry="3" width="90%" height="35" />

        <rect x="0" y="120" rx="3" ry="3" width="100%" height="420" />
      </>
    );
  };

  const MobileSkeleton = () => {
    return (
      <>
        <rect x="0" y="17" rx="3" ry="3" width="20%" height="35" />
        <rect x="0" y="60" rx="3" ry="3" width="100%" height="25" />
        <rect x="0" y="100" rx="3" ry="3" width="80%" height="25" />

        <rect x="0" y="180" rx="3" ry="3" width="100%" height="420" />
      </>
    );
  };

  const Skeleton = () => {
    return (
      <ContentLoader
        speed={2}
        style={{ width: "100%" }}
        width={"100%"}
        height={mode == "desktop" ? 600 : 390}
        backgroundColor={"#f3f3f3"}
        foregroundColor={"#ecebeb"}
      >
        {mode == "desktop" ? <DesktopSkeleton /> : <MobileSkeleton />}
      </ContentLoader>
    );
  };
  return (
    <div className="col-lg-8 col-md-12">
      <Skeleton />
    </div>
  );
};

export default PostContentSkeleton;
