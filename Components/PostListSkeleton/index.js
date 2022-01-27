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
        <rect x="0" y="0" rx="3" ry="3" width="36%" height="110" />
        <rect x="40%" y="0" rx="3" ry="3" width="60%" height="20" />
        <rect x="40%" y="30" rx="3" ry="3" width="60%" height="20" />
        <rect x="40%" y="60" rx="3" ry="3" width="60%" height="20" />
        <rect x="40%" y="90" rx="3" ry="3" width="30%" height="20" />
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
        height={mode == "desktop" ? 223 : 130}
        backgroundColor={isLight ? "#f3f3f3" : "#272727"}
        foregroundColor={isLight ? "#ecebeb" : "#272727"}
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
}

export default PostListSkeleton;
