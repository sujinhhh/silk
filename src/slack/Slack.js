import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import List from "./components/todoList/List";
import styled from "styled-components";
import AirBnb from "./components/airbnb/AirBnb";
import Footer from "./components/Footer";
import FetchData from "./components/fetchData/FetchData";

function Slack() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <SideBar style={{ flex: 1 }} />
          <Switch>
            <Main>
              <Route path="/" exact />
              <Route path="/air" component={AirBnb} />
              <Route path="/list" component={List} />
              <Route path="/fetch" component={FetchData} />
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
  flex: 2;
  display: flex;
  justify-content: center;
  padding-top: 120px;
  min-height: 100vh;
`;
