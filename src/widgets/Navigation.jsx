import React from "react";
import "../assets/styles/WidgetStyles.css";
import { FiMenu } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
// import { dropdown } from "../assets/images/Tabs/dropdown.png";
import CustomButton from "../utils/CustomButton";
import {FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import Logo from "../utils/Logo";

const Navigation = () => {
  const navRef = useRef();


  const ShowNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }


  return (
    <>
      <nav className={"navContainer"}>
        <Logo/>
        <ul ref={navRef}>
          <li>Home</li>
          <li>Training</li>
          <li>Contact</li>
          <li>FAQs</li>
          <div className="a">
            <CustomButton/>
          </div>
          <button className="nav-btn nav-close-btn" onClick={ShowNavbar}>
              <FaTimes/>
          </button>
        </ul>

        <button className="nav-btn"  onClick={ShowNavbar}>
        <FaBars/>
        </button>

        <div className={"NavEnrol"}>
        <CustomButton/>       
        </div>
      </nav>

    </>
  );
};

export default Navigation;
