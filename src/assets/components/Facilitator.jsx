import React from "react";
import Bobby from "../images/Bobby (1).png";
import Deking from "../images/Deking.png";
import Gilbert from "../images/Gilbert.png";
import Jumie from "../images/Jumie.png";
import "./Facilitator.css";

function Facilitator() {
	return (
		<div className="Facilitator">
			<p>
				We bring a wealth of skills and experience <br />
				from a wide range of backgrounds
			</p>

			<div className="intro-facilitator">
				<div className="Imgcards">
					<div className="card">
						<img src={Bobby} alt="" />
						<div className="facilitorDetails">
							<h5 className="nickName">Bobby_the_creatr</h5>
							<h3 className="name">Charles Ekube</h3>
							<h4 className="track">SOFTWARE ENGINEER/TEAM LEAD/FRONTEND TUTOR</h4>
						</div>
					</div>

					<div className="card">
						<img src={Deking} alt="" />
						<div className="facilitorDetails">
							<h5 className="nickName">deking.uix</h5>
							<h3 className="name">Appolos Kingsley</h3>
							<h4 className="track">PRODUCT DESIGNER/ASSISTING TEAM LEAD/DESIGN TUTOR</h4>
						</div>
					</div>

					<div className="card">
						<img src={Gilbert} alt="" />
						<div className="facilitorDetails">
							<h5 className="nickName">Inspiration_son</h5>
							<h3 className="name">Victor Gilbert</h3>
							<h4 className="track">BACKEND ENGINEER/TEAM MEMBER/BACKEND TUTOR</h4>
						</div>
					</div>

						<div className="card">
							<img src={Jumie} alt="" />
							<div className="facilitorDetails">
								<h5 className="nickName">BabyTech</h5>
								<h3 className="name">Ojumoola Akinyode</h3>
								<h4 className="track">SOFTWARE ENGINEER/TEAM LEAD/FRONTEND TUTOR</h4>
							</div>
						</div>


					</div>
				</div>
			</div>
	);
}

export default Facilitator;
