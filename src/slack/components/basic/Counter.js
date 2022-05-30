import React, { useState, useCallback, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const sumFunc = useCallback(() => {
    console.log(`someFunc:Num ${number}`);
  }, []);
  useEffect(() => {}, [sumFunc]);

  return (
    <div className="counter-container ">
      <div className="momo-top">
        <h2>use callback</h2>
        <h3> Test</h3>
        <input
          taco="hh"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={sumFunc}>Call sumFunc</button>
        <button style={{ width: "100px" }} onClick={() => setToggle(!toggle)}>
          {toggle.toString()}
        </button>
      </div>
    </div>
  );
}

export default Counter;
