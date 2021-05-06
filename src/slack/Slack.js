import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styled from "styled-components";

function Slack() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/" exact></Route>
          </Switch>
        </AppBody>
      </>
    </Router>
  );
}

export default Slack;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
