import React from "react";
import "./MemePreview.css";

const MemePreview = ({ image }) => {
  return (
    <>
      {image && (
        <div className="image">
          <img src={image} alt="" />
        </div>
      )}
    </>
  );
};

export default MemePreview;
