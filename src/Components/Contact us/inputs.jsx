import React from "react";
import style from "./contact.module.css";
import Button from './button.jsx';

export default function inputs() {
  return (
    <div className="row ">
      <div className=" mx-auto col-md-7 mt-5">
        <div className={`${style.textinput}`}>
          <input
            className="p-3 mb-3 border-none width-100 form-control"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className={`${style.textinput}`}>
          <input
            className="p-3 mb-3 border-none width-100 form-control"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={`${style.textinput}`}>
          <input
            className="p-3 mb-3 border-none width-100 form-control"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className={`${style.textinput}`}>
          <textarea
            className="p-3 mb-3 border-none width-100 form-control"
            type="text"
            placeholder="Message"
          />
        </div>
        <Button />
      </div>
    </div>
  );
}
