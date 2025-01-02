import React from "react";
import style from "./img.module.css";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import Img4 from "../../assets/4.jpg";
import Img5 from "../../assets/5.jpg";
import Img6 from "../../assets/6.jpg";

export default function images() {
  return (
    <div className="d-flex align-items-center justify-content-center pb-5 pt-5" id="OurPortofolio">
      <div
        className={`d-flex justify-content-between align-items-center gap-5 flex-wrap`}
      >
        <div className={style.imageContainer}>
          <img src={Img1} alt="img1" className={style.image} />
          <div className={`${style.overlay}`}>
            <i class="fa-sharp fa-solid fa-plus fa-2xl"></i>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={Img2} alt="img2" className={style.image} />
          <div className={`${style.overlay}`}>
            <i class="fa-sharp fa-solid fa-plus fa-2xl"></i>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={Img3} alt="img3" className={style.image} />
          <div className={`${style.overlay}`}>
            <i class="fa-sharp fa-solid fa-plus fa-2xl"></i>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={Img4} alt="img4" className={style.image} />
          <div className={`${style.overlay}`}>
            <i class="fa-sharp fa-solid fa-plus fa-2xl"></i>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={Img5} alt="img5" className={style.image} />
          <div className={`${style.overlay}`}>
            <i class="fa-sharp fa-solid fa-plus fa-2xl"></i>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={Img6} alt="img6" className={style.image} />
          <div className={`${style.overlay}`}>
            <i class="fa-sharp fa-solid fa-plus fa-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
