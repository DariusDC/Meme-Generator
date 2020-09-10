import React, { useState } from "react";
import TextInput from "./TextInput";

const Inputs = ({ nrInputs, handleChange, inputs }) => {
  const renderInputs = () => {
    if (!nrInputs) return null;
    let newInputs = [];
    for (let i = 0; i < nrInputs; i++) {
      newInputs.push(
        <TextInput
          textValue={inputs[`${i}`]}
          handleChange={handleChange}
          placeholder={`Text ${i + 1}`}
          index={i}
          key={i}
        />
      );
    }
    return newInputs;
  };
  return <>{renderInputs()}</>;
};

export default Inputs;
