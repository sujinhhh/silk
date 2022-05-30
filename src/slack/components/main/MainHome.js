import React, { useState } from "react";
import styled from "styled-components";

function MainHome() {
  const [size, setSize] = useState(600);
  const createBoxStyle = () => {
    return {
      width: `${size}px`,
    };
  };
  return (
    <MainContainer>
      <SectionContaier>
        <img style={createBoxStyle()} src="./ele.png" alt="" />
        {/* <video loop autoPlay>
          <source src="./video01.mp4" type="video/mp4" />
        </video> */}
        <MainTitle>React Study Projects</MainTitle>
      </SectionContaier>
      <SizeInput>
        <p> Change Image size : </p>
        <input
          className="color-input-dark"
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          step="10"
        />
      </SizeInput>
    </MainContainer>
  );
}

export default MainHome;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  width: 100%;
  height: 100vh;
`;
const SectionContaier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 3rem;
  margin-top: -50px;
  position: relative;
  > img {
    animation: translate-element 3s linear 2s infinite alternate;
  }
  @keyframes translate-element {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.7;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;
const SizeInput = styled.div`
  display: flex;
  p {
    margin-right: 10px;
    font-size: 1.2rem;
    color: lightpink;
  }
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
