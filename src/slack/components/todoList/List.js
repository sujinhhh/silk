import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import BookContextProvider from "../../contexts/BookContext";
import BookList from "./BookList";
import NewBookFoam from "./BookFoam";
import { ThemeContext } from "../../contexts/ThemeContext";
import styled from "styled-components";
import Input from "./Input";
import colorNames from "colornames";
// import FetchList from "./FetchList";
// import apiRequest from "../todoList/apiRequest";

function List() {
  // const API_URL = "http://localhost:3500/items";
  // const [list, setList] = useState([]);
  const [colorValue, setColorValue] = useState([]);
  const [hexValue, setHexValue] = useState("");
  const { isDarkText, setIsDarkText } = useContext(ThemeContext);
  // const [isDarkText, setIsDarkText] = useState(true);
  // const [fetchError, setFetchError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setColorValue(JSON.parse(localStorage.getItem("setcolor")));
    // const fetchItems = async () => {
    //   try {
    //     const response = await fetch(API_URL);
    //     if (!response.ok) throw Error("Did not received data");
    //     const data = await response.json();
    //     setList(data);
    //     setFetchError(null);
    //   } catch (err) {
    //     console.log(err.message);
    //     setFetchError(err.message);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // setTimeout(() => {
    //   (async () => await fetchItems())();
    // }, 3000);
  }, []);

  const setColor = (e) => {
    setColorValue(e.target.value);
    setHexValue(colorNames(e.target.value));
    localStorage.setItem("setcolor", JSON.stringify(e.target.value));
  };

  return (
    <Container
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <BookContextProvider>
        <Navbar />

        <Section>
          <BookList />
          <NewBookFoam />
        </Section>
        <Input
          colorValue={colorValue}
          setColorValue={setColorValue}
          hexValue={hexValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
          setColor={setColor}
        />
      </BookContextProvider>

      {/* <main>
          {isLoading && <p> Loading Time... </p>}
          {!fetchError && !isLoading && <FetchList list={list} />}
          {fetchError && (
            <p style={{ color: "red" }}> {`Error:${fetchError}`} </p>
          )}
        </main> */}
    </Container>
  );
}

export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: auto;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 2rem;
`;
