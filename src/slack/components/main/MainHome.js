import React from "react";
import styled from "styled-components";

function MainHome() {
  return (
    <MainContainer>
      <SectionContaier>
        <img src="./ele.png" alt="" />
        <MainTitle>React Study Projects</MainTitle>
      </SectionContaier>
    </MainContainer>
  );
}

export default MainHome;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  width: 100%;
`;
const SectionContaier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 3rem;
  margin-top: -50px;
  position: relative;
`;
const MainTitle = styled.p`
  font-family: "Water Brush", cursive;
  font-size: 5rem;
  color: black;
  position: absolute;
  top: -10%;
  left: -15%;
  transform: rotate(-10deg);
  text-shadow: 2px 2px 5px #ffbcaf;
`;
