import { useState, useRef } from "react";

import { ImgError } from "../../utils/helpers";
import { CategoryLink, PostLink, UserLink } from "../../utils/link-generator";

import { useIntersection } from "../../hooks/use-intersection";

const PostList = ({ elem }) => {
  const imgRef = useRef();
  const [isInView, setIsInView] = useState(false);

  useIntersection(imgRef, () => setIsInView(true));

  return (
    <article>
      <div className="meta-image" ref={imgRef}>
        <PostLink elem={elem}>
          <a>
            {isInView && (
              <img
                className="img-fluid"
                onError={(e) => ImgError(e)}
                src={elem.featured_image}
                alt={elem.title}
              />
            )}
          </a>
        </PostLink>
      </div>

      <header className="entry-header">
        <span className="meta-category">
          <CategoryLink elem={elem}>{elem.category.name}</CategoryLink>
        </span>

        <span className="entry-date">{elem.published_at}</span>

        <h2 className="entry-title">
          <PostLink elem={elem}>{elem.title}</PostLink>
        </h2>
      </header>
    </article>
  );
};

export default PostList;
