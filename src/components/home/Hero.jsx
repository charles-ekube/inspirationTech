import React from "react";
import Text from "../../utils/CustomText";
import { useMediaQuery } from "react-responsive";
import CustomInput from "../../utils/CustomInput";
import Button from "../../utils/CustomButton";

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <section className="heroSection">
        <Text tag={"h1"} className={`boldText textCenter ${isDesktopOrLaptop ? "f52" : "f38"}`} style={{ width: isDesktopOrLaptop ? "950px" : "100%", paddingBottom: isDesktopOrLaptop ? "48px" : "24px" }}>
          Learning the best part of Design and Development
        </Text>
        <Text tag={"h5"} className={`regularText textCenter ${isDesktopOrLaptop ? "f20" : "f16"}`} style={{ width: isDesktopOrLaptop ? "800px" : "100%", paddingBottom: isDesktopOrLaptop ? "54px" : "32px" }}>
          Welcome to our tech website, where you can learn everything about UI/UX design and coding, and take your skills to the next level.
        </Text>
        <Text tag={"h5"} className={`regularText textCenter ${isDesktopOrLaptop ? "f20" : "f16"}`} style={{ width: isDesktopOrLaptop ? "800px" : "100%", paddingBottom: "16px" }}>
          Get notified when we kick-off activities
        </Text>

        <div className={`flexRow ${isDesktopOrLaptop ? "noWrap" : "flexWrap"}`} style={{ width: isDesktopOrLaptop ? "900px" : "100%" }}>
          <div style={{ width: isDesktopOrLaptop ? "685px" : "100%", marginRight: isDesktopOrLaptop ? "16px" : "0" }}>
            <CustomInput placeholder={"Enter your email"} />
          </div>
          <div style={{ width: isDesktopOrLaptop ? "166px" : "100%" }}>
            <Button text={"Get Notified"} style={{ border: "none", background: "#1b1d61", color: "#fff", width: "100%" }} className={"addToCartBtn"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
