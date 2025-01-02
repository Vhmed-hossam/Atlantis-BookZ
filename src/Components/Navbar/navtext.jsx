import React from "react";

export default function navtext({ Main, fir, sec, thi }) {
  return (
    <>
      {Main ? <h2>{Main}</h2> : null}
      {fir ? <a className="nav-link">{fir}</a> : null}
      {sec ? <a className="nav-link">{sec}</a> : null}
      {thi ? <a className="nav-link">{thi}</a> : null}
    </>
  );
}
