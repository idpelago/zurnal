import HeaderSection from "../../Sections/Header";
import FooterSection from "../../Sections/Footer";

import TopBarSection from "../../Sections/TopBar";
import MainNavSection from "../../Sections/MainNav";

import useThemeSetter from "../../hooks/use-theme-setter";

const Layout = ({ children }) => {
  const { props } = children;

  useThemeSetter(props);

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
