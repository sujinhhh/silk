import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import { Face } from "@material-ui/icons";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="book-detail">
        <Face /> <h3> : {book.title}</h3>
      </div>
      <div className="author"> {book.author}</div>
    </li>
  );
};

export default BookDetails;
