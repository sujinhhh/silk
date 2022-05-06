import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import Clock from "./Clock";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>
        <Clock />
      </h1>
      <p>
        {" "}
        You have {books.length} things to do! <h1>해낼 줄 알았어!</h1>
      </p>
    </div>
  );
};

export default Navbar;
