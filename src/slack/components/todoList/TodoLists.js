import List from "./List.js";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext.js";
import React, { useState } from "react";

function TodoLists() {
  const [isDarkText, setIsDarkText] = useState(false);
  return (
    <Container>
      <ThemeContext.Provider value={{ isDarkText, setIsDarkText }}>
        <List isDark={isDarkText} setIsDark={setIsDarkText} />
      </ThemeContext.Provider>
    </Container>
  );
}

export default TodoLists;

const Container = styled.div`
  display: flex;
  width: 100%;

  background-image: linear-gradient(to top, lightcoral 50%, #fee140 100%);
  /* background-image: linear-gradient(
    to right,
    #f78ca0 0%,
    #f9748f 19%,
    #fd868c 60%,
    #fe9a8b 100%
  ); */
  justify-content: center;
  height: 100vh;
`;
