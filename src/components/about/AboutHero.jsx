import React from "react";
import Text from "../../utils/CustomText";
import { useMediaQuery } from "react-responsive";

const AboutHero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <section className={"aboutHero"}>
      <Text tag={"h2"} className={`boldText ${isDesktopOrLaptop ? "f52" : "f38"}`} style={{ color: "#fff" }}>
        About Us
      </Text>
    </section>
  );
};

export default AboutHero;
