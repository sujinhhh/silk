import React from "react";
import Nav from "./Nav";

function Header({ title }) {
  return (
    <header className="blog-header">
      {title}
      <Nav />
    </header>
  );
}

export default Header;
