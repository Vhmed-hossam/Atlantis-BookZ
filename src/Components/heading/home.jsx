import React from "react";
import style from "./home.module.css";
import Star from "../../star/starwhite/star";
import Img from "../../assets/atlantis boocz.png";
import Hometext from './hometext.jsx'
import Paragraph from './hometext.jsx'
export default function Home() {
  return (
    <>
      <div className={`${style.header}`}>
        <div
          className={`container ${style.imageContainer} d-flex justify-content-center align-items-center`}
        >
          <img
            src={Img}
            alt="Atlantis BookZ"
            className={`${style.image}`}
          />
        </div>
        <div className="text-center">
          <Hometext AB="Atlantis BookZ"/>
          <Star />
            <Paragraph text='Browse an extensive library full of books!' />
        </div>
      </div>
    </>
  )
}