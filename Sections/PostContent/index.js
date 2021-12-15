import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import Pagination from "@material-ui/lab/Pagination";

import PostContentSkeleton from "../../Components/PostContentSkeleton";

const PostContentSection = ({ postSlugId, postSlugTitle }) => {
  const router = useRouter();
  const { page: currentPage = 1 } = router.query;

  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [page]);

  const { isLoading, data } = useQuery(
    [`post/${postSlugId}/${postSlugTitle}`, { page }],
    { staleTime: 5 * 60 * 1000 }
  );

  if (isLoading) return <PostContentSkeleton />;

  const { items: post } = data;

  const handlePaginationChange = (e, value) => {
    setPage(value);

    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        postSlugId: postSlugId,
        postSlugTitle: postSlugTitle,
        page: value
      }
    });
  };

  return (
    <div className="col-lg-8 col-md-12">
      <div className="single-post">
        <div className="utf_post_title-area">
          <a className="utf_post_cat" href="#">
            {post.category.name}
          </a>
          <h2 className="utf_post_title">{post.title}</h2>
          <div className="utf_post_meta">
            <span className="utf_post_author">
              By <a href="#">{post.user.display_name}</a>
            </span>
            <span className="utf_post_date">
              <i className="fa fa-clock-o"></i> {post.published_at}
            </span>
          </div>
        </div>

        <div className="utf_post_content-area">
          <div className="post-media post-featured-image">
            <a href={post.featured_image} className="gallery-popup cboxElement">
              <img
                src={post.featured_image}
                className="img-fluid"
                alt={post.title}
              />
            </a>
          </div>

          <div
            className="entry-content"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/(<? *script)/gi, "illegalscript"),
            }}
          ></div>

          {post.post_paginate_total > 1 ? <h2>Halaman Berikutnya :</h2> : null}
          <Pagination
            count={post.post_paginate_total}
            variant="outlined"
            color="primary"
            className="paging"
            page={post.post_paginate_current}
            onChange={handlePaginationChange}
          />

          <div className="tags-area clearfix">
            <div className="post-tags">
              <span>Tags:</span>
              {post.tags.map((tag, index) => {
                return (
                  <a key={index} href="#">
                    # {tag.name}
                  </a>
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

      <nav className="post-navigation clearfix">
        <div className="post-previous">
          <a href="#">
            <span>
              <i className="fa fa-angle-left"></i>Previous Post
            </span>
            <h3>Zhang social media pop also known when smart innocent...</h3>
          </a>
        </div>
        <div className="post-next">
          <a href="#">
            <span>
              Next Post <i className="fa fa-angle-right"></i>
            </span>
            <h3>Zhang social media pop also known when smart innocent...</h3>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default PostContentSection;
