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
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => setColor(e)}
      />
      <button type="button" onClick={(e) => setIsDarkText(!isDarkText)}>
        Toggle text color
      </button>
    </ColorForm>
  );
}

const ColorForm = styled.form`
  margin-top: 3rem;
`;
