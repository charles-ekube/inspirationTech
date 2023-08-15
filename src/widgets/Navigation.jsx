import React, { Component } from "react";
import "../assets/styles/WidgetStyles.css";
import "../assets/styles/Responsiveness.css"
import { FiMenu } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
// import { dropdown } from "../assets/images/Tabs/dropdown.png";
import CustomButton from "../utils/CustomButton";
import {FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import Logo from "../utils/Logo";

class Navigation  extends Component  {
  // const navRef = useRef();


  // const ShowNavbar = () => {
  //   navRef.current.classList.toggle("responsive-nav");
  // }

  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked : !this.state.clicked });
  }

  render() {
  return (
    <>
      <nav className={"navContainer"}>
        <Logo/>
        <ul  id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
          <li><a className="active" href="index.html">Home</a></li>
          <li><a href="index.html">Training</a></li>
          <li><a href="index.html">Contact</a></li>
          <li><a href="index.html">FAQs</a></li>
          <div className="a">
            <CustomButton/>
          </div>
        </ul>

        <div className={"NavEnrol"}>
        <CustomButton/>       
        </div>

        <div className="mobile" onClick= {this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        
        </nav>

        {/* <button className="nav-btn"  onClick={ShowNavbar}>
        <FaBars/>
        </button>

        <button className="nav-btn nav-close-btn" onClick={ShowNavbar}>
              <FaTimes/>
          </button> */}

       

        {/* <div className="mobile">
        <i className="fa fa-bars" aria-hidden="true"></i>
        <i class="fa fa-times" aria-hidden="true"></i>
        </div> */}
    </>
  );
      }
};

export default Navigation;
