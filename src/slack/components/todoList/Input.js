import React from "react";
import styled from "styled-components";

export default function Input({
  colorValue,
  setColorValue,
  setIsDarkText,
  isDarkText,
  setHexValue,
  setColor,
}) {
  return (
    <ColorForm onSubmit={(e) => e.preventDefault()}>
      <label> Change Background Color : </label>
      <TodoInput
        className="todo-input"
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => setColor(e)}
      />
      <button
        className="color-button"
        type="button"
        onClick={(e) => setIsDarkText(!isDarkText)}
      >
        Toggle text color
      </button>
    </ColorForm>
  );
}

const ColorForm = styled.form`
  margin-top: 3rem;
  label {
    font-size: 1.2rem;
  }
`;

const TodoInput = styled.input`
  font-size: 1.5rem;
  color: lightblue;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: 0.1px solid #e57373;
  padding: 0px 20px;
  margin-right: 10px;
  background-color: #e57373;
  box-shadow: inset 0.2rem 0.2rem 0.5rem rgb(128, 0, 0, 0.5),
    inset -0.2rem -0.2rem 0.5rem ;
`;
