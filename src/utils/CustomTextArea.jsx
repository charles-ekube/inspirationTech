import React, { useState } from "react";
import Text from "./CustomText";

const TextArea = ({ label }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxCharacters) {
      setText(inputValue);
    }
  };

  const characterCount = text.length;
  const maxCharacters = 500; // You can change this value to your desired limit

  return (
    <div>
      {label && (
        <label className={`f14 semiBoldText`} style={{ paddingBottom: "16px !important" }}>
          {label}
        </label>
      )}
      <textarea value={text} onChange={handleChange} placeholder="Enter your text..." rows={4} cols={50} className={"input"} style={{ height: "auto", padding: "10px" }} />
      <div style={{ textAlign: "right", marginTop: "5px" }}>
        <Text tag={"p"} className={"f12 boldText"}>
          {characterCount}/{maxCharacters}
        </Text>
      </div>
    </div>
  );
};

export default TextArea;
