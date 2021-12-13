const TopBarSection = () => {
    return (
        <div id="top-bar" className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ul className="unstyled top-nav">
                            <li><a href="login-signup.html">Login & Signup</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 top-social text-lg-right text-md-center">
                        <ul className="unstyled">
                            <li> <a title="Facebook" href="#"> <span className="social-icon"><i className="fa fa-facebook"></i></span> </a> <a title="Twitter" href="#"> <span className="social-icon"><i className="fa fa-twitter"></i></span> </a> <a title="Google+" href="#"> <span className="social-icon"><i className="fa fa-google-plus"></i></span> </a> <a title="Linkdin" href="#"> <span className="social-icon"><i className="fa fa-linkedin"></i></span> </a> <a title="Rss" href="#"> <span className="social-icon"><i className="fa fa-rss"></i></span> </a> <a title="Skype" href="#"> <span className="social-icon"><i className="fa fa-skype"></i></span> </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBarSection;