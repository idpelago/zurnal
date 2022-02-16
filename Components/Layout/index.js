import HeaderSection from "../../Sections/Header";
import SidebarSection from "../../Sections/Sidebar";
import FooterSection from "../../Sections/Footer";
import FooterCategoriesSection from "../../Sections/FooterCategories";

import useThemeSetter from "../../hooks/use-theme-setter";

const Layout = ({ children }) => {
  const { props } = children;

  useThemeSetter(props);

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

            <FooterCategoriesSection />
          </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
};

export default Layout;
