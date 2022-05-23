import React, { useEffect, useState } from "react";
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
import Missing from "./components/blog/Missing";
import PostPage from "./components/blog/PostPage";
import NewPost from "./components/blog/NewPost";
import { format } from "date-fns";
import "./blog.css";
import api from "../api/posts";

function Slack() {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [done, setDone] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(` Error : ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      setDone(true);
      // history.go("/blog");
    } catch (err) {
      console.log(` Error : ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postLists = posts.filter((post) => post.id !== id);
      setPosts(postLists);
      // history.go("/blog");
    } catch (err) {
      console.log(` Error : ${err.message}`);
    }
  };
  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <AppBody>
        <SideBar style={{ flex: 1 }} />
        <Switch>
          <Main>
            <Route exact path="/" />
            <Route path="/air" component={AirBnb} />
            <Route path="/list" component={List} />
            <Route path="/fetch" component={FetchData} />
            <Route exact path="/blog">
              {searchResults && <BlogHome posts={searchResults} />}
              {!searchResults && <Missing />}
            </Route>
            <Route exact path="/post">
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                done={done}
                setDone={setDone}
              />
            </Route>
            <Route path="/post/:id">
              <PostPage posts={posts} handleDelete={handleDelete} />
            </Route>
            {/* <Route path="*" component={Missing} /> */}
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
  height: 100vh;
  overflow-y: auto;
`;
