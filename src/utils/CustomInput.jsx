import React from "react";

const CustomInput = (props) => {
  const { label, type, name, value, onChange, placeholder, disabled, maxLength, customLabel, inputStyle, customInputContainer, multiple, ref, key } = props;

  return (
    <>
      <div className={`inputContainer ${customInputContainer}`}>
        {label && (
          <label className={`f14 semiBoldText ${customLabel}`} style={{ paddingBottom: "8px" }}>
            {label}
          </label>
        )}
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={`input ${inputStyle}`} disabled={disabled} maxLength={maxLength} multiple={multiple} ref={ref} key={key} />
      </div>
    </>
  );
};

export default CustomInput;
