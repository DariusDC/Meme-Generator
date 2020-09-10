import React from "react";
import "./TextInput.css";

const TextInput = ({ placeholder, handleChange, textValue, index }) => {
  return (
    <div className="input">
      <input
        placeholder={placeholder}
        onChange={handleChange}
        value={textValue}
        index={index}
      />
    </div>
  );
};

export default TextInput;
