import React from "react";
import styled from "styled-components";
import colorNames from "colornames";

export default function Input({
  colorValue,
  setColorValue,
  setIsDarkText,
  isDarkText,
  setHexValue,
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
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle text color
      </button>
    </ColorForm>
  );
}

const ColorForm = styled.form`
  margin-top: 3rem;
`;
