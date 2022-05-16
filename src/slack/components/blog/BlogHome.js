import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import "./blog.css";
import BlogContainer from "./BlogContainer";

function BlogHome() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Life lessons with Katie Zaferes",
      img: "./mountain-bike.png",
      checked: true,
      body: "loagkljakdkljglkdjgkld",
      rate: "⭐️ 5.0",
    },
    {
      id: 2,
      title: "Learn wedding photography",
      img: "./wedding-photography.png",
      checked: false,
      body: "loagkljakdkljglkdjgkld",
      rate: "⭐️ 3.0",
    },
    {
      id: 3,
      title: "Learn wedding photography",
      img: "./image 12.png",
      body: "loagkljakdkljglkdjgkld",
      checked: true,
      rate: "⭐️ 3.8",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleDelete = () => {};

  return (
    <div className="blog-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <Home posts={posts} />
          </Route>
          <Route exact path="/post" component={NewPost} />
          <Route path="/post/:id">
            <PostPage posts={posts} handleDelete={handleDelete} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default BlogHome;
