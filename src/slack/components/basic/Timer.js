import React, { useEffect, useState } from "react";

function Timer() {
  const [showTimer, setShowTimer] = useState(false);
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log("hhh");
  //     }, 1000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);
  return (
    <div>
      {/* <div>{showTimer && count}</div> */}
      <button onClick={() => setShowTimer(!showTimer)}>Toggole Timer</button>
    </div>
  );
}

export default Timer;
