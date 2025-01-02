import React from "react";
import Images from "../Portofolio/images.jsx";
import Star from "../../star/starblack/star.jsx";
import Text from './text.jsx'
export default function heading() {
  return (
    <div className="p-5">
      <div className="container">
        <h1><Text Desc='Our lastest books'/></h1>
        <Star />
        <div>
          <div className="p-1">
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
}