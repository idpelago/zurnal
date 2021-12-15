import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Pagination from "@material-ui/lab/Pagination";

import PostList from "../../../Components/PostList";
import PostListSkeleton from "../../../Components/PostListSkeleton";

const NewsFeedLeftSection = () => {
  const router = useRouter();
  const { page: currentPage = 1 } = router.query;

  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const { isLoading, error, data } = useQuery(["posts", { page }], {
    staleTime: 5 * 60 * 1000,
    keepPreviousData: false,
  });

  if (isLoading) return <PostListSkeleton />;

  if (error) return "An error has occurred: " + error.message;

  const { items } = data;
  const { data: posts } = items;

  const handlePaginationChange = (e, value) => {
    setPage(value);
    router.push(`?page=${value}`, undefined, {
      scroll: true,
    });
  };

  return (
    <div className="col-lg-8 col-md-12">
      <div className="utf_more_news block color-default">
        {/* <h3 className="utf_block_title"><span>View More News</span></h3> */}

        <div id="utf_more_news_slide" className="utf_more_news_slide">
          <div className="item">
            {posts &&
              posts.map((post, index) => <PostList key={index} elem={post} />)}
          </div>
        </div>

        <Pagination
          count={items.last_page}
          variant="outlined"
          color="primary"
          className="paging"
          page={items.current_page}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default NewsFeedLeftSection;
