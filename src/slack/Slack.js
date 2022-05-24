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
import EditPost from "./components/blog/EditPost";
import useWindowSize from "../hooks/useWindowSize";
import todoList from "./components/todoList/todoList";
import MainHome from "./components/main/MainHome";

function Slack() {
  const history = useHistory();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "1st post",
      datetime: "July 16, 2021 11:47:39 AM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      title: "Second post",
      datetime: "July 16, 2021 11:47:48 AM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two",
    },
    {
      id: 3,
      title: "3rd post",
      datetime: "July 16, 2021 11:47:39 AM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      title: "4th post",
      datetime: "July 16, 2021 11:47:48 AM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two",
    },
  ]);
  const { width } = useWindowSize();
  const [postTitle, setPostTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editBody, setEditBody] = useState("");
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

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.date } : post))
      );
      setEditBody("");
      setEditTitle("");
      history.push("/blog");
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
        width={width}
      />
      <AppBody>
        <SideBar style={{ flex: 1 }} />
        <Switch>
          <Main>
            <Route exact path="/" component={MainHome} />
            <Route path="/air" component={AirBnb} />
            <Route path="/list" component={todoList} />
            <Route path="/fetch" component={FetchData} />
            <Route exact path="/blog" width={width}>
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
            <Route path="/edit/:id">
              <EditPost
                handleEdit={handleEdit}
                posts={posts}
                setPostTitle={setPostTitle}
                editBody={editBody}
                setEditBody={setEditBody}
                setEditTitle={setEditTitle}
                editTitle={editTitle}
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
  margin-top: 100px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;
