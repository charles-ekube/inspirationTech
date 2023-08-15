import React from "react";
import Navigation from "../../widgets/Navigation";
import { useMediaQuery } from "react-responsive";
import Text from "../../utils/CustomText";
import CustomInput from "../../utils/CustomInput";
import Button from "../../utils/CustomButton";
import TextArea from "../../utils/CustomTextArea";
import LinksBox from "../../components/contact/LinksBox";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <Navigation />
      <main className={"contactSection"}>
        <header>
          <Text tag={"h2"} className={`boldText textCenter ${isDesktopOrLaptop ? "f52" : "f38"}`}>
            Contact Us
          </Text>
          <Text tag={"p"} className={`regularText f16 textCenter`} style={{ color: "#9897A9" }}>
            Any questions or remarks? Just write us a message.
          </Text>
        </header>
        <section className={"contactBox"}>
          <LinksBox />
          <ContactForm />
        </section>
      </main>
    </>
  );
};

export default Contact;
