import React from 'react';
import Star from "../../star/starblack/star.jsx";
import Inputs from './inputs.jsx';
import Maint from './alltext.jsx';

export default function Text() {
  return (
    <div className="p-5">
      <Maint contact={"Contact us"} />
      <Star />
      <Inputs />
    </div>
  );
}