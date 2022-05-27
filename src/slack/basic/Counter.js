import React, { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };
  return (
    <div>
      <h1>State : {count}</h1>
      <h1>Ref : {countRef.current}</h1>

      <button onClick={increaseCount}>Increament</button>
      <button onClick={countRef}>Increament</button>
    </div>
  );
}

export default Counter;
