import ContentLoader from "react-content-loader";

const PostListSkeleton = () => {
  const Skeleton = () => {
    return (
      <ContentLoader
        speed={2}
        style={{ width: "100%" }}
        width={"100%"}
        height={240}
        backgroundColor={"#f3f3f3"}
        foregroundColor={"#ecebeb"}
      >
        <rect x="0" y="17" rx="3" ry="3" width="40%" height="200" />
        <rect x="42%" y="17" rx="3" ry="3" width="60%" height="25" />
        <rect x="42%" y="57" rx="3" ry="3" width="40%" height="25" />

        <rect x="42%" y="100" rx="3" ry="3" width="60%" height="115" />
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
