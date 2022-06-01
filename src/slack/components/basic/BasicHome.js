import React from "react";
import Timer from "./Timer";
import "./basic.css";
import Counter from "./Counter";
import Componet01 from "./Componet01";
import NumberGame from "./NumberGame";
import BankApp from "./BankApp";

function BasicHome() {
  return (
    <div className="basic-container">
      <div className="flex-container">
        {/* <Counter /> */}
        <Componet01 />
      </div>
      <div className="grid-container">
        <div className="grid01">
          <NumberGame />
        </div>
        <div className="grid02">
          <BankApp />
        </div>
        <div className="grid03">3</div>
        <div className="grid04">4</div>
        <div className="grid05">5</div>
        <div className="grid06">6</div>
      </div>
      {/* <Timer /> */}
    </div>
  );
}

export default BasicHome;
