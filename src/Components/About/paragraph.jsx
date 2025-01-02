import React from "react";
import Style from "./style.module.css";

export default function paragraph({ Paragraph1, Paragraph2 }) {
  return (
<>
        <h5 className={`${Style.wwhite} fw-normal`}>{Paragraph1}</h5>
        <h5 className={`${Style.wwhite} fw-normal`}>{Paragraph2}</h5>
</>
  );
}