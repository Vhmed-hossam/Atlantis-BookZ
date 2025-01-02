import React from "react";
import Heat from "./heat";
import Paragraph from "./paragraph";
import Style from "./style.module.css";
import Star from "../../star/starwhite/star";
export default function frame() {
  return (
    <div className={`${Style.bg}`}>
      <div className={` container`}>
        <Heat About={"About"} />
        <Star />
      </div>
      <div className="d-flex justify-content-center p-3 gap-5"> 
      <div className="d-flex col-md-3 p-1">
        <Paragraph Paragraph1={" Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization."}/>
      </div>
      <div className="d-flex col-md-3 p-1">
        <Paragraph Paragraph2={"Simplify your book journey! Explore trending titles, grab exclusive deals, and manage your personal collection with ease!"}/>
    </div></div></div>
  );
}