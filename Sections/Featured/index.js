const FeaturedSection = () => {
    return (
        <section className="utf_featured_post_area pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 pad-r">
                        <div id="utf_featured_slider" className="owl-carousel owl-theme utf_featured_slider content-bottom">
                            <div className="item" style={{ backgroundImage: "url('images/news/lifestyle/health5.jpg')" }}>
                                <div className="utf_featured_post">
                                    <div className="utf_post_content"> <a className="utf_post_cat" href="#">Health</a>
                                        <h2 className="utf_post_title title-extra-large"> <a href="#">Zhang social media pop also known when smart innocent...</a> </h2>
                                        <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">John Wick</a></span>
                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 20 Jan, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 pad-l">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="utf_post_overaly_style text-center first clearfix">
                                    <div className="utf_post_thumb"> <a href="#"><img className="img-fluid" src="images/news/tech/gadget2.jpg" alt="" /></a> </div>
                                    <div className="utf_post_content"> <a className="utf_post_cat" href="#">Lifestyle</a>
                                        <h2 className="utf_post_title title-medium"> <a href="#">Samsung Gear S3 review: A whimper, when…</a> </h2>
                                        <div className="utf_post_meta"> <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">John Wick</a></span> <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span> </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="utf_post_overaly_style text-center clearfix">
                                    <div className="utf_post_thumb"> <a href="#"><img className="img-fluid" src="images/news/tech/game1.jpg" alt="" /></a> </div>
                                    <div className="utf_post_content"> <a className="utf_post_cat" href="#">Games</a>
                                        <h2 className="utf_post_title title-medium"> <a href="#">Historical heroes and robot dinosaurs: New games...</a> </h2>
                                        <div className="utf_post_meta"> <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">John Wick</a></span> <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;