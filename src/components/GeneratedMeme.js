import React from "react";

const GeneratedMeme = ({ image }) => {
  return (
    <div>
      {image && (
        <div className="image-container">
          <img src={image} alt="" className="image" />
        </div>
      )}
    </div>
  );
};

export default GeneratedMeme;
