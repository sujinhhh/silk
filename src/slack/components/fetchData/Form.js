import React from "react";
import "./fetch-data.css";
import Button from "./Button";

function Form({ reqType, setReqType }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="fetch-form">
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
}

export default Form;
