import React from "react";
// import CustomButton from "../../utils/CustomButton";
import "./Hero.css";
import Notify from "../../utils/Notify";
import EmailBtn from "./EmailBtn";
import Bobby from "../images/Bobby (1).png";
// import Arrowside from "../images/arrowSide.png"
import "../styles/Responsiveness.css";

const Hero = () => {
	return (
		<>
			<div className="upHero">
				<h1>
					Learning the best part of <br />
					<span className="design">Design</span> and 
					<span className="development">Development</span>
				</h1>
				<h5>
					Welcome to our tech website, where you can learn everything about UI/UX design{" "}
					<br />
					and coding, and take your skills to the next level.
				</h5>
				<h6>Get notified when we kick-off activities</h6>
				<div className="form">
					<input type="text" placeholder="Enter your email" className="formInput" />
					<button className="getNotified">Get Notified</button>
				</div>
			</div>

{/* /////////////////////////////////////DownHero/////////////////////////////// */}

			<div className="downHero">
				<h4>Find the best skill for you</h4>
				<h2>Tech competencies</h2>
				<div className="cards">
					<div className="trackCard">
						<div className="trackImg1"></div>
						<h3>Product Design Bootcamp</h3>
						<h6 className="textSize">
							Get to learn the basics of product design, to help you develop the
							skills needed <br />
							to create user experiences for products or digital properties.
						</h6>
						<div className="slide">
							<h4>Enroll Here</h4>
							{/* <img src={Arrowside} alt=""	/> */}
						</div>
						
					</div>

					<div className="trackCard">
						<div className="trackImg2"></div>
						<h3>Software Engineering Bootcamp</h3>
						<h6>
							Get to learn the basics of product design, to help you develop the
							skills needed <br />
							to create user experiences for products or digital properties.
						</h6>
						<div className="slide">
							<h4>Enroll Here</h4>
							{/* <img src={Arrowside}  alt=""/> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
