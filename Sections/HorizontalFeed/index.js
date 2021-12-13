const HorizontalFeedSection = () => {
    return (
        <section className="utf_block_wrapper solid-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="utf_post_overaly_style text-center first clearfix mb-3 mb-md-0">
                            <div className="utf_post_thumb"> <a href="#"><img className="img-fluid" src="images/news/tech/gadget2.jpg" alt="" /></a> </div>
                            <div className="utf_post_content"> <a className="utf_post_cat" href="#">Lifestyle</a>
                                <h2 className="utf_post_title"> <a href="#">Samsung Gear S3 review: A whimper, when…</a> </h2>
                                <div className="utf_post_meta"> <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">John Wick</a></span> <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="utf_post_overaly_style text-center clearfix mb-3 mb-md-0">
                            <div className="utf_post_thumb"> <a href="#"><img className="img-fluid" src="images/news/lifestyle/health5.jpg" alt="" /></a> </div>
                            <div className="utf_post_content"> <a className="utf_post_cat" href="#">Health</a>
                                <h2 className="utf_post_title"> <a href="#">Netcix cuts out the chill with an integrated personal...</a> </h2>
                                <div className="utf_post_meta"> <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">John Wick</a></span> <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="utf_post_overaly_style text-center clearfix">
                            <div className="utf_post_thumb"> <a href="#"><img className="img-fluid" src="images/news/tech/game1.jpg" alt="" /></a> </div>
                            <div className="utf_post_content"> <a className="utf_post_cat" href="#">Games</a>
                                <h2 className="utf_post_title"> <a href="#">Historical heroes and robot dinosaurs: New games...</a> </h2>
                                <div className="utf_post_meta"> <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">John Wick</a></span> <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HorizontalFeedSection;