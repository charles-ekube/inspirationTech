import React from "react";
import "../assets/styles/WidgetStyles.css";
import { FiMenu } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <>
      <nav className={"navContainer"}>
        <div className={"logoContainer"}>
          <p>Logo</p>
        </div>

        <div>
          {isBigScreen && isDesktopOrLaptop && <p>fvnjkfknv</p>}
          {isTabletOrMobile && <FiMenu size={26} />}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
