import Link from "next/link";
import { useQuery } from "react-query";

const NewsFeedLeftSection = () => {
  const { isLoading, error, data } = useQuery("posts");

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const { items } = data;
  const { data: posts } = items;

  return (
    <div className="col-lg-8 col-md-12">
      <div className="utf_more_news block color-default">
        <h3 className="utf_block_title">
          <span>View More News</span>
        </h3>
        <div
          id="utf_more_news_slide"
          className="owl-carousel owl-theme utf_more_news_slide"
        >
          <div className="item">
            {posts &&
              posts.map((post, index) => {
                return (
                  <div
                    key={index}
                    className="utf_post_block_style utf_post_float_half clearfix"
                  >
                    <div className="utf_post_thumb">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src={post.featured_image}
                          alt={post.title}
                        />
                      </a>
                    </div>

                    <a className="utf_post_cat" href="#">
                      {post.category.name}
                    </a>

                    <div className="utf_post_content">
                      <h2 className="utf_post_title">
                        <Link
                          href={{
                            pathname: `/posts/${post.post_slug_id}/${post.post_slug_title}`,
                          }}
                          as={`/posts/${post.post_slug_id}/${post.post_slug_title}`}
                          shallow
                          passHref
                        >
                          {post.title}
                        </Link>
                      </h2>

                      <div className="utf_post_meta">
                        <span className="utf_post_author">
                          <i className="fa fa-user"></i>{" "}
                          <a href="#">{post.user.display_name}</a>
                        </span>
                        <span className="utf_post_date">
                          <i className="fa fa-clock-o"></i> {post.published_at}
                        </span>
                      </div>

                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedLeftSection;
