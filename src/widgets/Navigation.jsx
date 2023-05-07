import React from "react";
import "../assets/styles/WidgetStyles.css";
import { FiMenu } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
// import { dropdown } from "../assets/images/Tabs/dropdown.png";
import CustomButton from "../utils/CustomButton";

const Navigation = () => {
  return (
    <>
      <nav className={"navContainer"}>
        <ul>
          <li>Home</li>
          <li>Training</li>
          <li>Contact</li>
          <li>FAQs</li>
        </ul>

        <div className={"logoContainer"}>
        <CustomButton/>       
        </div>
      </nav>

    </>
  );
};

export default Navigation;
