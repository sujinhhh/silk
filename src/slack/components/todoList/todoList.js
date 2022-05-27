import List from "./List.js";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext.js";
import React, { useState } from "react";

function TodoList() {
  const [isDarkText, setIsDarkText] = useState(false);
  return (
    <Container>
      <ThemeContext.Provider value={{ isDarkText, setIsDarkText }}>
        <List isDark={isDarkText} setIsDark={setIsDarkText} />
      </ThemeContext.Provider>
    </Container>
  );
}

export default TodoList;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: lightcoral;
  justify-content: center;
`;
