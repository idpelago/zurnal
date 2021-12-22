import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

import MetaHeader from "../../Components/MetaHeader";
import PostContentSkeleton from "../../Components/PostContentSkeleton";

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

  useEffect(() => {
    setPage(currentPage);
  });

  let dataItems;
  let contentLoading = true;

  if (!isRobot) {
    const { isLoading, data } = useQuery(
      [`post/${postSlugId}/${postSlugTitle}`, { page }],
      { cacheTime: 5 * 60 * 1000 }
    );

    contentLoading = isLoading;

    if (contentLoading) return <PostContentSkeleton />;

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
    contentLoading = true;

    setPage(value);

    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        postSlugId: postSlugId,
        postSlugTitle: postSlugTitle,
        page: value,
      },
    });
  };

  return (
    <>
      <MetaHeader title={post.title} description={post.excerpt} type="post" />

      <div className="col-lg-8 col-md-12">
        <div className="single-post">
          <div className="utf_post_title-area">
            <CategoryLink elem={post}>
              <a className="utf_post_cat">{post.category.name}</a>
            </CategoryLink>

            <h2 className="utf_post_title">{post.title}</h2>
            <div className="utf_post_meta">
              <span className="utf_post_author">
                By{" "}
                <UserLink elem={post.user}>{post.user.display_name}</UserLink>
              </span>
              <span className="utf_post_date">
                <i className="fa fa-clock-o"></i> {post.published_at}
              </span>
            </div>
          </div>

          <div className="utf_post_content-area">
            <div className="post-media post-featured-image">
              <img
                src={post.featured_image}
                className="img-fluid"
                alt={post.title}
              />
            </div>

            {post.post_paginate_total > 1 && post.post_paginate_current > 1 ? (
              <div>
                Page {post.post_paginate_current} of {post.post_paginate_total}
              </div>
            ) : null}

            <div
              className="entry-content"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/(<? *script)/gi, "illegalscript"),
              }}
            ></div>

            {post.post_paginate_total > 1 ? (
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
            ) : null}

            <div className="tags-area clearfix">
              <div className="post-tags">
                <span>Tags:</span>
                {post.tags.map((tag, index) => {
                  return (
                    <TagLink key={index} elem={tag}>{`# ${tag.name}`}</TagLink>
                  );
                })}
              </div>
            </div>

            <div className="share-items clearfix">
              <ul className="post-social-icons unstyled">
                <li className="facebook">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                    <span className="ts-social-title">Facebook</span>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                    <span className="ts-social-title">Twitter</span>
                  </a>
                </li>
                <li className="gplus">
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                    <span className="ts-social-title">Google +</span>
                  </a>
                </li>
                <li className="pinterest">
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                    <span className="ts-social-title">Pinterest</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <nav className="post-navigation clearfix">
          <>
            <div className="post-previous">
              {post.previous_post && (
                <PostLink elem={post.previous_post}>
                  <a>
                    <span>
                      <i className="fa fa-angle-left"></i> Previous Post
                    </span>
                    <h3>{post.previous_post.title}</h3>
                  </a>
                </PostLink>
              )}
            </div>

            <div className="post-next">
              {post.next_post && (
                <PostLink elem={post.next_post}>
                  <a>
                    <span>
                      Next Post <i className="fa fa-angle-right"></i>
                    </span>
                    <h3>{post.next_post.title}</h3>
                  </a>
                </PostLink>
              )}
            </div>
          </>
        </nav> */}
      </div>
    </>
  );
};

export default PostContentSection;
