import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Pagination from "@material-ui/lab/Pagination";

import PostList from "../../../Components/PostList";
import PostListSkeleton from "../../../Components/PostListSkeleton";

const NewsFeedLeftSection = ({ queryKey = 'posts', pageType = 'index' }) => {
  const router = useRouter();
  const { page: currentPage = 1 } = router.query;

  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const { isLoading, error, data } = useQuery([`${queryKey}`, { page }], {
    staleTime: 5 * 60 * 1000,
    keepPreviousData: false,
  });

  if (isLoading) return <PostListSkeleton />;

  if (error) return "An error has occurred: " + error.message;

  const { items } = data;

  if (!items) return (
    <div className="col-lg-8 col-md-12">
      <div className="utf_more_news block color-default">
        Something is wrong...
      </div>
    </div>
  );

  const { data: posts } = items;

  const handlePaginationChange = (e, value) => {
    setPage(value);
    router.push(`?page=${value}`, undefined, {
      scroll: true,
    });
  };

  const PageTypeSection = () => {
    return (
      <>
        {(pageType != 'index') ? <h3 class="utf_block_title"><span>{pageType} News</span></h3> : null}
      </>
    );
  }

  return (
    <div className="col-lg-8 col-md-12">
      <div className="utf_more_news block color-default">
        <PageTypeSection />

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
