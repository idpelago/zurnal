import { useState, useEffect } from "react";

import config from "../../utils/config";

import DesktopMenu from "../../Components/Menus/DesktopMenu";
import MobileMenu from "../../Components/Menus/MobileMenu";

const HeaderSection = () => {
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
      {mode == 'mobile' && <MobileMenu />}
      {mode == 'desktop' && <DesktopMenu />}
    </>
  );
};

export default HeaderSection;
