const MainNavSection = () => {
  return (
    <div className="utf_main_nav_area clearfix utf_sticky">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg col">
            <div className="utf_site_nav_inner float-left">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                id="navbarSupportedContent"
                className="collapse navbar-collapse navbar-responsive-collapse"
              >
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="utf_nav_search">
            <span id="search">
              <i className="fa fa-search"></i>
            </span>
          </div>
          <div className="utf_search_block" style={{ display: "none" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Type what you want and enter"
            />
            <span className="utf_search_close">&times;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavSection;
