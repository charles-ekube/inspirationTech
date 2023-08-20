import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import product from "../../assets/images/product.jpg";
import "../../assets/styles/DetailStyles.css";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineBarChart } from "react-icons/md";
import {FaRegEnvelopeOpen} from "react-icons/fa";
import {TbGift} from "react-icons/tb";
import {FcCalendar} from "react-icons/fc";
import {RiToolsLine} from "react-icons/ri";
import {AiOutlineSafetyCertificate} from "react-icons/ai"


const CourseDetails = (props) => {
  const params = useLocation();

  console.log(params.state.params);
  // const renderTab = () => {
  //   if (params?.state?.params === "1") {
  //     return "Product";
  //   }
  //   if (params?.state?.params === "2") {
  //     return "FrontEnd";
  //   }
  //   if (params?.state?.params === "3") {
  //     return "Backend";
  //   }
  // };
  return (
    <>
      <p className="productTittle">{params.state.params.courseName}</p>
      <div className="imgDoc">
        <img src={product} />
        <div className="paragraph">
          <p className="courseLearn">{params.state.params.courseLearn}</p>
          <p>{params.state.params.courseDesc}</p>
        </div>
      </div>
      {/* <p>{params.state.params.courseImage}</p> */}
      {/* {courses.map((course,index) =>{
        return course.courseImage
      })} */}
      <div className="courseEntailed">
        <p className="coursePrice">
          <i>{params.state.params.coursePrice}</i>
          <span>USD</span>
        </p>
        {/* <div className="btnLike"></div> */}

        <div className="iconMix">
          <div className="calText">
            <FiCalendar className="icon" />
            <div className="btnText">
              <p>{params.state.params.courseDays}</p>
              <p className="downBold">{params.state.params.courseWeek}</p>
            </div>
          </div>
          {/* <div className="vertical">rfg</div> */}
          <hr className="vertical"></hr>
          <div className="calText">
            <MdOutlineBarChart className="icon" />
            <div className="btnText">
              <p>{params.state.params.courseToughness}</p>
              <p className="downBold">{params.state.params.courseModerate}</p>
            </div>
          </div>
        </div>

        <div className="duration">
        <div className="both">
        <FcCalendar/>
        <p>Duration:</p>
        </div>
        <p className="durBold">{params.state.params.courseDuration}</p>
        </div>
        <div className="Certification">
          <div className="both">
          <AiOutlineSafetyCertificate/>
          <p>Certification:</p>
          </div>
          <p className="CertificationBold">{params.state.params.CourseCertification}</p>
        </div>
        <div className="tools">
         {/* <div className="toolz"> */}
         <RiToolsLine/>
        <p> Tools:</p>
         {/* </div> */}
          <ul className="toolBold">
            {params.state.params.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>  
        </div>
        <div className="enrolment" >
          <button className="enrolBtn">
          <FaRegEnvelopeOpen className="enrolBtnIcon"/>
          <p>{params.state.params.courseEnrol}</p>
          </button>
          <button className="giftBtn" style={{background:"white", border: "1px solid black"}}>
          <TbGift className="giftBtnIcon"/>
          <p style={{color:"black"}}>{params.state.params.courseGift}</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
