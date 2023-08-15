import React from "react";
import CustomInput from "../../utils/CustomInput";
import TextArea from "../../utils/CustomTextArea";
import Button from "../../utils/CustomButton";

const ContactForm = () => {
  return (
    <aside className={"formBox"}>
      <form>
        <div className={"flexRow alignCenter flexWrap"} style={{ gap: "20px" }}>
          <CustomInput label={"First Name"} />
          <CustomInput label={"Last Name"} />
        </div>

        <CustomInput label={"Email"} />
        <CustomInput label={"Phone Number"} />
        <TextArea label={"Message"} />
        <Button text={"Send"} style={{ border: "none", background: "#1b1d61", color: "#fff", width: "100%", marginTop: "30px" }} />
      </form>
    </aside>
  );
};

export default ContactForm;
