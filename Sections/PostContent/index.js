import { useQuery } from "react-query";

const PostContentSection = ({ postSlugId, postSlugTitle }) => {
    const { isLoading, data } = useQuery([`post/${postSlugId}/${postSlugTitle}`]);
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    const { items: post } = data;

    return (
        <div className="col-lg-8 col-md-12">
            <div className="single-post">
                <div className="utf_post_title-area"> <a className="utf_post_cat" href="#">{post.category.name}</a>
                    <h2 className="utf_post_title">{post.title}</h2>

                    <div className="utf_post_meta">
                        <span className="utf_post_author"> By <a href="#">John Wick</a> </span>
                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 15 Jan, 2021</span>
                        <span className="post-hits"><i className="fa fa-eye"></i> 21</span>
                        <span className="post-comment">
                            <i className="fa fa-comments-o"></i><a href="#" className="comments-link"><span>01</span></a>
                        </span>
                    </div>
                </div>

                <div className="utf_post_content-area">
                    <div className="post-media post-featured-image">
                        <a href="images/news/lifestyle/health5.jpg" className="gallery-popup cboxElement">
                            <img src="images/news/lifestyle/health5.jpg" className="img-fluid" alt="" />
                        </a>
                    </div>

                    <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.content.replace(/(<? *script)/gi, 'illegalscript') }} ></div>

                    <div className="tags-area clearfix">
                        <div className="post-tags">
                            <span>Tags:</span>
                            <a href="#"># Business</a>
                            <a href="#"># Corporate</a>
                            <a href="#"># Services</a>
                            <a href="#"># Customer</a>
                        </div>
                    </div>

                    <div className="share-items clearfix">
                        <ul className="post-social-icons unstyled">
                            <li className="facebook"> <a href="#"> <i className="fa fa-facebook"></i> <span className="ts-social-title">Facebook</span></a> </li>
                            <li className="twitter"> <a href="#"> <i className="fa fa-twitter"></i> <span className="ts-social-title">Twitter</span></a> </li>
                            <li className="gplus"> <a href="#"> <i className="fa fa-google-plus"></i> <span className="ts-social-title">Google +</span></a> </li>
                            <li className="pinterest"> <a href="#"> <i className="fa fa-pinterest"></i> <span className="ts-social-title">Pinterest</span></a> </li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className="post-navigation clearfix">
                <div className="post-previous">
                    <a href="#">
                        <span><i className="fa fa-angle-left"></i>Previous Post</span>
                        <h3>Zhang social media pop also known when smart innocent...</h3>
                    </a>
                </div>
                <div className="post-next">
                    <a href="#"> <span>Next Post <i className="fa fa-angle-right"></i></span>
                        <h3>Zhang social media pop also known when smart innocent...</h3>
                    </a>
                </div>
            </nav>

            <div className="author-box">
                <div className="author-img pull-left"> <img src="images/news/author.png" alt="" /> </div>
                <div className="author-info">
                    <h3>Miss Lisa Doe</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since It has survived not only five centuries, but also the leap into electronic type setting, remaining essentially unchanged.</p>
                </div>
            </div>
        </div>
    );
}

export default PostContentSection;