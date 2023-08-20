import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Component } from "react";
import {navRef} from "react"


const Navigation = ()=> {
  // const navRef = useRef();

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
      <button className="mobileBtn" >
        <FaBars size="22px" />
      </button>
    </section>
  </nav>
  </>
  )
      
 }

export default Navigation;






















