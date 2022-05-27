import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import { Face } from "@material-ui/icons";
import { ThemeContext } from "../../contexts/ThemeContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const { isDarkText } = useContext(ThemeContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div
        className="book-detail"
        style={{
          color: isDarkText ? "#000" : "#fff",
        }}
      >
        <Face /> <h3> : {book.title}</h3>
      </div>
    </li>
  );
};

export default BookDetails;
