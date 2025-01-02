import React from "react";
import style from "./star.module.css";
export default function star() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 p-3">
      <div className={`${style.lines}`}></div>
      <i className={`fa-solid ${style.st} fa-star fa-xl`}></i>
      <div className={`${style.lines}`}></div>
    </div>
  );
}
