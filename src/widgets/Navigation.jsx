import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navRef = useRef();

  const ShowNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      <nav className={"navContainer"}>
        <section>
          <img src={Logo} alt="logo" style={{ width: "150px", height: "auto" }} />
        </section>
        <section>
          <ul ref={navRef} className={"webNavLinks"}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            {/* <li>FAQs</li> */}
          </ul>
          <button className="mobileBtn" onClick={ShowNavbar}>
            <FaBars size="22px" />
          </button>
        </section>
      </nav>
    </>
  );
};

export default Navigation;
