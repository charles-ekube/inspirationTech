import React from "react";
import Text from "../../utils/CustomText";
import { useMediaQuery } from "react-responsive";
import StacksCard from "./StacksCard";
import Product from "../../assets/images/product.png";
import Frontend from "../../assets/images/frontend.jpg";
import Backend from "../../assets/images/backend.jpg";
import { useNavigate } from "react-router-dom";

const Stacks = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const navigate = useNavigate();

  const goToCourseDetails = (val) => {
    navigate("courseDetails", { state: { params: val } });
  };

  return (
    <>
      <section className={"stackSection"}>
        <div>
          <Text tag={"h2"} className={`boldText textCenter  ${isDesktopOrLaptop ? "f48" : "32"}`} style={{ padding: "0 0 40px 0" }}>
            Courses
          </Text>
        </div>
        <div className={"stacksGrid"}>
          <StacksCard title={"Product Design"} description={" Learn the principles, processes, and tools for designing successful products. Identify user needs, conduct research, create prototypes, and iterate on designs. Gain practical skills in user-centered, interaction, and visual design through hands-on projects. Equip yourself with the knowledge and techniques to create compelling and user-friendly products."} src={Product} onClick={() => goToCourseDetails("1")} />
          <StacksCard title={"Frontend Development"} description={"Master frontend development by learning core languages and technologies used in modern web applications. Build a solid foundation in HTML, CSS, JavaScript, and responsive design. Discover popular frameworks like React for dynamic and interactive user interfaces. Work on real-world projects to gain hands-on experience and hone your frontend development skills. Become capable of creating visually stunning and functional websites by the end of the course."} src={Frontend} onClick={() => goToCourseDetails("2")} />
          <StacksCard title={"Backend Development"} description={`Gain expertise in backend development through this all-inclusive bootcamp. Covering server-side programming, database management, and more, it encompasses all aspects of backend development. Learn popular programming languages like Node.js, and explore frameworks such as Express.js. Master API design, database handling, security, and performance optimizations. Develop scalable and efficient backend systems through hands-on projects and exercises. By the end of the bootcamp, you'll possess the knowledge and skills to build robust and scalable web applications.`} src={Backend} onClick={() => goToCourseDetails("3")} />
        </div>
      </section>
    </>
  );
};

export default Stacks;
