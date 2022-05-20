import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import List from "./components/todoList/List";
import styled from "styled-components";
import AirBnb from "./components/airbnb/AirBnb";
import Footer from "./components/Footer";
import FetchData from "./components/fetchData/FetchData";
import BlogHome from "./components/blog/BlogHome";
import PostPage from "./components/blog/PostPage";

function Slack() {
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

  let history = useHistory();
  const handleDelete = (id) => {
    const postLists = posts.filter((post) => post.id !== id);
    setPosts(postLists);
    // history.push("/");
  };
  return (
    <Router>
      <Header />
      <AppBody>
        <SideBar style={{ flex: 1 }} />
        <Switch>
          <Main>
            <Route path="/" exact />
            <Route path="/air" component={AirBnb} />
            <Route path="/list" component={List} />
            <Route path="/fetch" component={FetchData} />
            <Route path="/blog">
              <BlogHome posts={posts} />
            </Route>
            <Route path="/post/:id">
              <PostPage posts={posts} handleDelete={handleDelete} />
            </Route>
          </Main>
        </Switch>
      </AppBody>
      <Footer />
    </Router>
  );
}

export default Slack;

const AppBody = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  padding-top: 120px;
  min-height: 100vh;
`;
