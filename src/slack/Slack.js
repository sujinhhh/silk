import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import AirBnb from "./components/airbnb/AirBnb";
import Footer from "./components/Footer";
import FetchData from "./components/fetchData/FetchData";
import BlogHome from "./components/blog/BlogHome";
import PostPage from "./components/blog/PostPage";
import NewPost from "./components/blog/NewPost";
import "./blog.css";
import EditPost from "./components/blog/EditPost";
// import TodoList from "./components/todoList/TodoList";
import MainHome from "./components/main/MainHome";
import BasicHome from "./components/basic/BasicHome";
import { DataProvider } from "./contexts/DataContext";

function Slack() {
  return (
    <Router>
      <Header />
      <AppBody>
        <SideBar />
        <Switch>
          <DataProvider>
            <Main>
              <Route exact path="/" component={MainHome} />
              <Route path="/air" component={AirBnb} />
              {/* <Route path="/list" component={TodoList} /> */}
              <Route path="/fetch" component={FetchData} />
              <Route path="/basic" component={BasicHome} />
              <Route path="/blog" component={BlogHome} />
              <Route exact path="/post" component={NewPost} />
              <Route path="/post/:id" component={PostPage} />
              <Route path="/edit/:id" component={EditPost} />
            </Main>
          </DataProvider>
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
  /* height: 100vh; */
  overflow-y: auto;
`;
