import React from "react";
import Text from "../../utils/CustomText";

const StacksCard = ({ src, title, description, onClick }) => {
  return (
    <section className={"stacksCard"} onClick={onClick}>
      <div>
        <img src={src} alt="stack" />
      </div>
      <div className={"stacksCardContentContainer"}>
        <Text tag="h3" className={"f24 boldText textCenter"} style={{ color: "#181819", padding: "0 0 16px 0" }}>
          {title}
        </Text>
        <Text tag="p" className={"f16 regularText textCenter"} style={{ color: "#181819" }}>
          {description}
        </Text>
      </div>
    </section>
  );
};

export default StacksCard;
