import { useState, useEffect } from "react";

import config from "../../utils/config";

import HeaderSection from "../../Sections/Header";
import SidebarSection from "../../Sections/Sidebar";
import FooterSection from "../../Sections/Footer";
import FooterCategoriesSection from "../../Sections/FooterCategories";

import useThemeSetter from "../../hooks/use-theme-setter";

const Layout = ({ children }) => {
  const { props } = children;

  useThemeSetter(props);

  const [mode, setMode] = useState();

  const { minWidth } = config;

  const calWidth = () =>
    setMode(window.innerWidth < minWidth ? "mobile" : "desktop");

  useEffect(() => calWidth(), [])
  useEffect(() => {
    window.addEventListener("resize", calWidth, false);

    return () => {
      window.removeEventListener("resize", calWidth);
    }
  })

  return (
    <>
      <HeaderSection />

      <div id="main-container">
        <div id="main-wrapper">
          <div className="container">
            <div className="row">
              {children}

              <SidebarSection />
            </div>

            {mode == 'desktop' && <FooterCategoriesSection />}
          </div>
        </div>
      </div>

      {mode == 'desktop' && <FooterSection />}
    </>
  );
};

export default Layout;
