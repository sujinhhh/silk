import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import List from "./components/List";
import styled from "styled-components";
import Air from "./components/projects/Air";

function Slack() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          {/* <SideBar /> */}

          {/* <List /> */}
          <Switch>
            <Route path="/" exact></Route>
            <Route path="/air" component={Air} />
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
