import Link from "next/link";

import Menus from "../../Menus";

const DesktopMenu = () => {
  return (
    <header id="header" className="main-header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-8 f-left">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Term of Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">EULA</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-4 f-right">
              <ul className="soc-nav-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="site-brand">
                <Link href={{ pathname: `/` }}>
                  <img src="https://www.zurnal.co/images/zurnal_logo.png" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-wrapper">
        <div className="container">
          <div className="row">
            <Menus />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopMenu;
