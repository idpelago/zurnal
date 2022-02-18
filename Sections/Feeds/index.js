import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Pagination from "@material-ui/lab/Pagination";

import PostList from "../../Components/PostList";
import PostListSkeleton from "../../Components/PostListSkeleton";

const Feeds = ({
  isRobot,
  ssrData,
  queryKey = "posts",
  pageType = "index",
}) => {
  const router = useRouter();
  const { page: currentPage = 1 } = router.query;

  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  let dataItems;

  if (!isRobot) {
    const { isLoading, data } = useQuery([`${queryKey}`, { page }], {
      staleTime: 5 * 60 * 10000,
      keepPreviousData: false,
    });

    if (isLoading) return <PostListSkeleton />;
    dataItems = data;
  } else {
    dataItems = ssrData;
  }

  if (dataItems.items.length == 0) {
    router.push("/");
    return (
      <div className="col-lg-8 col-md-12">
        <div className="redirecting">Redirecting ....</div>
      </div>
    );
  }

  const { items } = dataItems;

  if (!items)
    return (
      <div className="col-lg-8 col-md-12">
        <div className="utf_more_news block color-default">
          Something is wrong...
        </div>
      </div>
    );

  const { data: posts } = items;

  const handlePaginationChange = (e, value) => {
    return new Promise((resolve) => resolve()).then(() => {
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            page: value,
          },
        },
        undefined,
        { scroll: true }
      );
    });
  };

  const PageTypeSection = () => {
    return (
      <>
        {pageType != "index" ? (
          <h2 className="utf_block_title">
            <span>{pageType}</span>
          </h2>
        ) : null}
      </>
    );
  };

  return (
    <>
      <PageTypeSection />

      <div className="main-box main-content col-12">
        <div className="main-box-inside">
          {posts &&
            posts.map((post, index) => <PostList key={index} elem={post} />)}
        </div>

        <div className="pagination-wrapper d-flex justify-content-center">
          {items.last_page > 1 && (
            <Pagination
              count={items.last_page}
              variant="outlined"
              color="primary"
              className="paging"
              page={items.current_page}
              onChange={handlePaginationChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Feeds;
