import React, { useContext, useState } from "react";
import { BookContext } from "../../contexts/BookContext";

const NewBookFoam = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    // setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="color-input-dark"
        type="text"
        placeholder="Things to do"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      {/* <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      /> */}
      <input className="color-button-dark" type="submit" value="Add Tasks" />
    </form>
  );
};

export default NewBookFoam;
