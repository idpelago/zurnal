import { CategoryLink, PostLink, UserLink } from "../../utils/link-generator";

const PostList = ({ elem }) => {
  return (
    <div className="utf_post_block_style utf_post_float_half clearfix">
      <div className="utf_post_thumb">
        <PostLink elem={elem}>
          <img className="img-fluid" src={elem.featured_image} alt={elem.title} />
        </PostLink>
      </div>

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

        <p>{elem.excerpt}</p>
      </div>
    </div>
  );
};

export default PostList;
