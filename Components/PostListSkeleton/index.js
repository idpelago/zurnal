import ContentLoader from "react-content-loader";
import { useContext } from "react";

import AppContext from "../../context/AppContext";
import { useTheme } from "../../context/theme-context";

function PostListSkeleton() {
  const theme = useTheme();

  const value = useContext(AppContext);
  const mode = value.state.mode;

  const DesktopSkeleton = () => {
    return (
      <>
        <rect x="0" y="0" rx="3" ry="3" width="49%" height="300" />
        <rect x="52%" y="0" rx="3" ry="3" width="49%" height="300" />
      </>
    );
  };

  const MobileSkeleton = () => {
    return (
      <>
        <rect x="3%" y="0" rx="3" ry="3" width="94%" height="300" />
        <rect x="3%" y="330" rx="3" ry="3" width="94%" height="300" />
      </>
    );
  };

  const Skeleton = () => {
    const isLight = theme == "light";

    return (
      <ContentLoader
        speed={2}
        style={{ width: "100%" }}
        width={"100%"}
        height={mode == "desktop" ? 380 : 650}
        backgroundColor={isLight ? "#f3f3f3" : "#272727"}
        foregroundColor={isLight ? "#ecebeb" : "#272727"}
      >
        {mode == "desktop" ? <DesktopSkeleton /> : <MobileSkeleton />}
      </ContentLoader>
    );
  };

  return (
    <div className="main-box main-content col-12">
      <div className="main-box-inside">
        <Skeleton />
      </div>
    </div>
  );
}

export default PostListSkeleton;
