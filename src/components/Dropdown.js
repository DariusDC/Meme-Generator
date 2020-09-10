import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./drop.css";

const DropdownSelect = ({ handleChange, meme, items }) => {
  return (
    <Dropdown
      options={items}
      onChange={handleChange}
      value={meme}
      placeholder="Select a meme"
      className="dropdown"
    />
  );
};

export default DropdownSelect;
