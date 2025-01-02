import React from 'react';
import style from "./contact.module.css";

export default function BtnText({ txt }) {
  return (
    <div>
      <button className={style.btn}>{txt}</button>
    </div>
  );
}
