import Link from "next/link";

const PostLink = ({ elem, children }) => {
  return (
    <Link
      href={{
        pathname: `/post/${elem.post_slug_id}/${elem.post_slug_title}`,
      }}
      as={`/post/${elem.post_slug_id}/${elem.post_slug_title}`}
      shallow
      passHref
    >
      {children}
    </Link>
  );
};

const UserLink = ({ elem, children }) => {
  return (
    <Link
      href={{
        pathname: `/user/${elem.username}`,
      }}
      as={`/user/${elem.username}`}
      shallow
      passHref
    >
      {children}
    </Link>
  );
};

const PostList = ({ elem, index }) => {
  return (
    <div
      key={index}
      className="utf_post_block_style utf_post_float_half clearfix"
    >
      <div className="utf_post_thumb">
        <PostLink elem={elem}>
          <img className="img-fluid" src={elem.featured_image} alt="" />
        </PostLink>
      </div>

      <a className="utf_post_cat" href="#">
        {elem.category.name}
      </a>

      <div className="utf_post_content">
        <h2 className="utf_post_title">
          <PostLink elem={elem}>{elem.title}</PostLink>
        </h2>

        <div className="utf_post_meta">
          <span className="utf_post_author">
            <i className="fa fa-user"></i>{" "}
            <UserLink elem={elem.user}>{elem.user.display_name}</UserLink>
          </span>
          <span className="utf_post_date">
            <i className="fa fa-clock-o"></i> {elem.published_at}
          </span>
        </div>

        <p>{elem.excerpt}</p>
      </div>
    </div>
  );
};

export default PostList;
