import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Pagination from "@material-ui/lab/Pagination";

import PostMetaHeader from "../../Components/MetaHeader/post";

import { CategoryLink, TagLink, UserLink } from "../../utils/link-generator";

const PostContentSection = ({
  ssrData,
  isRobot,
  postSlugId,
  postSlugTitle,
}) => {
  const router = useRouter();
  const { page: currentPage = 1 } = router.query;

  const [page, setPage] = useState(currentPage);

  useEffect(() => setPage(currentPage));

  let dataItems;

  if (!isRobot) {
    const { isLoading, data } = useQuery(
      [`post/${postSlugId}/${postSlugTitle}`, { page }],
      { staleTime: 5 * 60 * 10000 }
    );

    if (isLoading) return "Loading...";

    dataItems = data;
  } else {
    dataItems = ssrData;
  }

  if (!dataItems) {
    router.push("/");
    return (
      <div className="col-lg-8 col-md-12">
        <div className="redirecting">Redirecting ....</div>
      </div>
    );
  }

  const { items: post } = dataItems;

  const handlePaginationChange = (e, value) => {
    return new Promise((resolve) => resolve()).then(() => {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          postSlugId: postSlugId,
          postSlugTitle: postSlugTitle,
          page: value,
        },
      });
    });
  };

  return (
    <>
      <PostMetaHeader elem={post} />

      <article>
        <header className="entry-header">
          <span className="meta-category">
            <CategoryLink elem={post}>{post.category.name}</CategoryLink>
          </span>

          <h1 className="entry-title">{post.title}</h1>
          <div className="entry-date">{post.published_at}</div>
        </header>

        <div className="meta-image">
          <img
            src={post.featured_image}
            className="img-fluid"
            alt={post.title}
          />
        </div>

        <div className="pagination-area">
          {post.post_paginate_total > 1 && (
            <div>
              Page {post.post_paginate_current} of {post.post_paginate_total}
            </div>
          )}
        </div>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/(<? *script)/gi, "illegalscript"),
          }}
        ></div>

        <div className="pagination-area">
          {post.post_paginate_total > 1 && (
            <>
              <h4>Halaman Berikutnya :</h4>

              <Pagination
                count={post.post_paginate_total}
                variant="outlined"
                color="primary"
                className="paging"
                page={post.post_paginate_current}
                onChange={handlePaginationChange}
              />
            </>
          )}
        </div>

        <div className="tags-area clearfix">
          <div className="post-tags">
            <span>Tagar:</span>
            {post.tags.map((tag, index) => {
              return <TagLink key={index} elem={tag}>{`#${tag.name}`}</TagLink>;
            })}
          </div>
        </div>

        <div className="author-area">
          Published by{" "}
          <UserLink elem={post.user}>{post.user.display_name}</UserLink>
        </div>
      </article>
    </>
  );
};

export default PostContentSection;
