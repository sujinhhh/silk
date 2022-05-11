import React, { useState } from "react";
import Navbar from "./Navbar";
import BookContextProvider from "../../contexts/BookContext";
import BookList from "./BookList";
import NewBookFoam from "./BookFoam";
import styled from "styled-components";
import Input from "./Input";

function List() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <Container
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <div>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookFoam />
          <Input
            colorValue={colorValue}
            setColorValue={setColorValue}
            hexValue={hexValue}
            setHexValue={setHexValue}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
          />
        </BookContextProvider>
      </div>
    </Container>
  );
}

export default List;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  align-items: center;
  padding: 3rem;
`;
