import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import List from "./components/List";
import styled from "styled-components";
import AirBnb from "./components/projects/AirBnb";
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
  height: 100vh;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px auto;
`;
