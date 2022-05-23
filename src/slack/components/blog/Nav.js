import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="blog-nav">
      <ul>
        <li>
          <Link to="/blog">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
