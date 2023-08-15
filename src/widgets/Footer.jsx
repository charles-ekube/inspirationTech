import React from "react";
import imaLap from "../assets/images/imaLap.png";
// import Logo from "../utils/Logo";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import FooterLogo from "../assets/styles/FooterLogo";
import "../assets/styles/WidgetStyles.css";


export default function Footer() {
	return (
		<>
{/* /////////////////////////////  preFoot  //////////////////////////// */}
			<div className="preFoot">
				<div className="text">
					<h3>Collaborate and Partner with us</h3>
					<div className="textText">
					<h4>
						By collaborating and partnering with our organizations in the tech industry,
						we can build a stronger <br /> network, share knowledge and resources, and
						work together to achieve common goals and advance <br /> the field of
						technology education.
					</h4>

					<h4 className="two">
						Collaborating and partnering with our tech school can bring many benefits,
						including access to new <br /> resources, increased visibility and
						networking opportunities, and the potential for joint projects and <br />{" "}
						initiatives.
					</h4>
					</div>
				</div>

				<img src={imaLap} alt="" />
			</div>

			{/* ...................footer.............................. */}
			<div className="footer">
				<div className="footerContent">
					<div className="first">
						<FooterLogo />
						<div className="firstContent">
						<h6>
							No: 30a Eze Street, Uwani, <br />
						</h6>
						<h6>Enugu State, Nigeria</h6>
						<h6>Tel: +236 806 559 3093</h6>
						<h6>Tel: +236 806 559 3093</h6>
						<div className="socialMedia">
							<img src={twitter} alt="" />
							<img src={linkedin} alt="" />
							<img src={facebook} alt="" />
							<img src={instagram} alt="" />
							<img src={youtube} alt="" />
						</div>

						<div className="copywrite">
							<p>&copy; 2023 Inspiration Tech. All rights reserved.</p>
						</div>
						</div>
					</div>

					<div className="second">
						<p className="top">Bootcamp</p>
						<div className="secondContent">
						<p>Product Design</p>
						<p>Software Engineering</p>
						</div>
					</div>

					<div className="third">
						<p className="top">Area of Expertise</p>
						<div className="thirdContent">
						<p>Product Design</p>
						<p>Backend Engineering</p>
						<p>Frontend Engineering</p>
						<p>Cloud Engineering</p>
						<p>Programming</p>
						</div>
					</div>

					<div className="fouth">
						<p className="top">Company</p>
						<div className="fourthContent">
						<p>Collaborate/Partner </p>
						<p>with Us</p>
						<p>Admin</p>
						</div>
					</div>

					<div className="fith">
						<p className="top">About Us</p>
						<div className="fifthContent">
						<p>Our Mission</p>
						<p>Privacy and Policy</p>
						<p>FAQs</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
