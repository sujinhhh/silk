import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, SearchTwoTone, HelpOutline } from "@material-ui/icons";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLeft>
          {/* <HeaderAvatar /> */}
          {/* <AccessTime /> */}
          <img src="./aaaaa.png" alt="" />
          <h2> React Projects</h2>
        </HeaderLeft>
      </Link>
      <HeaderSearch>
        <SearchTwoTone />
        <input type="text" placeholder="search" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  z-index: 9999;
  justify-content: space-between;
  padding: 10px 0;
  background-image: linear-gradient(230deg, #434343 0%, black 100%);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.7;
  display: flex;

  align-items: center;
  margin-left: 18vw;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
  h2 {
    margin-left: 20px;
  }
  img {
    width: 40px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  margin-right: 0;
  flex: 0.2;
  opacity: 1;
  border-radius: 6px;
  background-image: linear-gradient(to left, #bdbbbe 0%, #9d9ea3 100%),
    radial-gradient(
      88% 271%,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(254, 254, 254, 0.25) 1%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    radial-gradient(
      50% 100%,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  background-blend-mode: normal, lighten, soft-light;
  text-align: left;
  display: flex;
  align-items: center;
  border: 0.5px white solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 20vw;
    outline: 0;
    color: white;
    font-size: 17px;
    padding: 5px 0;
  }
`;

const HeaderRight = styled.div`
  flex: 0.1;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
