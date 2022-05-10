import React from "react";
import { useState } from "react";

function AirImg({ title, img }) {
  const handleClick2 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <div>
      <button onClick={(e) => handleClick2(e)}> {title}</button>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default AirImg;
