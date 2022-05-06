import React from "react";
import Navbar from "./Navbar";
import BookContextProvider from "../contexts/BookContext";
import BookList from "./BookList";
import NewBookFoam from "./BookFoam";

function List() {
  return (
    <div className="list">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookFoam />
      </BookContextProvider>
    </div>
  );
}

export default List;
