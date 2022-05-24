import List from "./List.js";
import React from "react";
import styled from "styled-components";

function todoList() {
  return (
    <Container>
      <List />
    </Container>
  );
}

export default todoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: lightcoral;
`;
