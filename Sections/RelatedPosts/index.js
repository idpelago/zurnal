import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { CategoryLink, PostLink } from "../../utils/link-generator";

const RelatedPosts = ({ postSlugId, postSlugTitle, isRobot }) => {
  if (isRobot) return <></>;

  const router = useRouter();
  const { isLoading, data } = useQuery(
    [`related/post/${postSlugId}/${postSlugTitle}`],
    { staleTime: 5 * 60 * 10000 }
  );

  if (isLoading) return "loading...";

  const { items } = data;

  return (
    <div className="row">
      <div className="col-lg-8 col-md-12">
        <h3 className="utf_block_title">
          <span>Related Posts</span>
        </h3>
        <div id="utf_latest_news_slide">
          {items &&
            items.map((item, index) => {
              return (
                <div key={index} className="item">
                  <div className="utf_post_block_style clearfix">
                    <div className="utf_post_thumb">
                      <PostLink elem={item}>
                        <a>
                          <img
                            src={item.featured_image}
                            className="img-fluid"
                            alt={item.title}
                          />
                        </a>
                      </PostLink>
                    </div>

                    <CategoryLink elem={item}>
                      <a className="utf_post_cat">{item.category.name}</a>
                    </CategoryLink>

                    <div className="utf_post_content">
                      <h2 className="utf_post_title title-medium">
                        <PostLink elem={item}>
                          <a>{item.title}</a>
                        </PostLink>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
