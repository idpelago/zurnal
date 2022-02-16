import Link from "next/link";
import { Sun, Moon } from "react-feather";
import { useTheme, useThemeUpdate } from "../../context/theme-context";

const FooterSection = () => {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  const year = new Date().getFullYear();
  const FooterTextFirst = `Copyright © ${year} `;
  const FooterTextSecond = ` All Rights Reserved`;

  const FooterLink = () => {
    return (
      <Link
        href={{
          pathname: `/`,
        }}
      >
        Zurnal.co
      </Link>
    );
  };

  return (
    <footer id="footer" className="site-footer">
      <div className="container-full site-info">
        <div className="container">
          <div className="vce-wrap-left">
            <p>
              <span id="copyRightFooter">
                Copyright © 2017 <a href="#">Zurnal</a> All Rights Reserved.
                </span>
            </p>
          </div>

          <div className="vce-wrap-right">
            <ul id="vce_footer_menu" className="bottom-nav-menu">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7283">
                <a href="#about-us/">About Us</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7294">
                <a href="#term-of-services/">Term of Services</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7282">
                <a href="#privacy-policy/">Privacy Policy</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7290">
                <a href="#end-user-license-agreement/">EULA</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7291">
                <a href="#contact-us/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
