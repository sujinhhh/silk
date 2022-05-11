import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import List from "./components/todoList/List";
import styled from "styled-components";
import AirBnb from "./components/airbnb/AirBnb";
import Footer from "./components/Footer";

function Slack() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Main>
              <Route path="/" exact />
              <Route path="/air" component={AirBnb} />
              <Route path="/list" component={List} />
            </Main>
          </Switch>
        </AppBody>
        <Footer />
      </>
    </Router>
  );
}

export default Slack;

const AppBody = styled.div`
  display: flex;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px auto;
  min-height: 100vh;
`;
