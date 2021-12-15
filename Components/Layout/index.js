import HeaderSection from "../../Sections/Header";
import FooterSection from "../../Sections/Footer";

import TopBarSection from "../../Sections/TopBar";
import MainNavSection from "../../Sections/MainNav";

const Layout = ({ children }) => {
  return (
    <div className="body-inner">
      {/* <TopBarSection /> */}
      <HeaderSection />
      <MainNavSection />

      {children}

      <FooterSection />
    </div>
  );
};

export default Layout;
