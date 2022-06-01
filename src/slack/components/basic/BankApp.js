import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withraw":
      return state - action.payload;
    default:
      return state;
  }
};

function BankApp() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>useReduce 은행에 오신것을 환영</h1>
      <p>잔고 : {money} 원</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({
            type: "deposit",
            payload: number,
          });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "withraw",
            payload: number,
          });
        }}
      >
        출금
      </button>
    </div>
  );
}

export default BankApp;
