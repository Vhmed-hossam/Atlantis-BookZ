import React from "react";
import Belowftr from "./belowftr.jsx";
import style from "./style.module.css";
import Text from "./text.jsx";

export default function footer() {

  return (
    <div className={style.footer}>
      <div className={style.color}>
        <div
          className={`container d-flex align-items-top justify-content-between w-100`}
        >
          <div className="col-md-4 p-1">
            <h3 className="mb-4"><Text locationTitle={"Location"} /></h3>
            <p className="m-0"><Text addressLine1={"2215 John Daniel Drive"} /></p>
            <p><Text addressLine2={"Clark, MO 65243"} /></p>
          </div>
          <div className="col-md-4 p-1">
            <h3 className="mb-4"><Text webTitle={"Around The Web"} /></h3>
            <div className="d-flex justify-content-between align-items-center mt-5 w-75 m-auto">
              <div className={`p-3 d-flex align-items-center justify-content-center ${style.circle}`}>
                <i className="fa-brands fa-facebook-f fa-lg"></i>
              </div>
              <div className={`p-3 d-flex align-items-center justify-content-center ${style.circle}`}>
                <i className="fa-brands fa-twitter fa-lg"></i>
              </div>
              <div className={`p-3 d-flex align-items-center justify-content-center ${style.circle}`}>
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </div>
              <div className={`p-3 d-flex align-items-center justify-content-center ${style.circle}`}>
                <i className="fa-brands fa-youtube fa-lg"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
          <h3 className="mb-4"><Text Aboutfreelancer={"About Freelancer"} /></h3>
          <p className="m-0"><Text Freelancer={"Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh"} /></p>
          </div>
        </div>
      </div>

      <div></div>
        <Belowftr text={<Text copyright={'Copyright © Ahmed Hossam 2025'} />} />
      </div>
  );
}
