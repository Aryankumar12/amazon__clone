import React from "react";
import "./SmallSection.css";

function SmallSection({ img1, img2, img3, img4, title , heading1, heading2 , heading3 , heading4 }) {
  return (
    <div className="small__section">
      <div className="small__section__heading">{title}</div>
      <div className="small__section__image">
        <div className="section1">
          <img src={img1} alt="" />
          <h5>{heading1}</h5>
          <img src={img2} alt="" />
          <h5>{heading2}</h5>
        </div>
       
        <div className="section3">
          <img src={img3} alt="" />
          <h5>{heading3}</h5>
          <img src={img4} alt="" />
          <h5>{heading4}</h5>
        </div>
        
      </div>
    </div>
  );
}

export default SmallSection;
