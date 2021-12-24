import { useState, useRef } from "react";

import { ImgError } from "../../utils/helpers";
import { CategoryLink, PostLink, UserLink } from "../../utils/link-generator";

import { useIntersection } from "../../hooks/use-intersection";

const PostList = ({ elem }) => {
  const imgRef = useRef();
  const [isInView, setIsInView] = useState(false);

  useIntersection(imgRef, () => setIsInView(true));

  return (
    <div className="utf_post_block_style utf_post_float_half clearfix">
      <PostLink elem={elem}>
        <a>
          <div className="utf_post_thumb" ref={imgRef}>
            {isInView && (
              <img
                className="img-fluid"
                onError={(e) => ImgError(e)}
                src={elem.featured_image}
                alt={elem.title}
              />
            )}
          </div>
        </a>
      </PostLink>

      <CategoryLink elem={elem}>
        <a className="utf_post_cat">{elem.category.name}</a>
      </CategoryLink>

      <div className="utf_post_content">
        <h2 className="utf_post_title">
          <PostLink elem={elem}>{elem.title}</PostLink>
        </h2>

        <div className="utf_post_meta">
          <span className="utf_post_author">
            <i className="fa fa-user"></i>
            <UserLink elem={elem.user}>{elem.user.display_name}</UserLink>
          </span>
          <span className="utf_post_date">
            <i className="fa fa-clock-o"></i> {elem.published_at}
          </span>
        </div>

        <div className="utf_post_excerpt">
          <PostLink elem={elem}>
            <a>{elem.excerpt}</a>
          </PostLink>
        </div>
      </div>
    </div>
  );
};

export default PostList;
