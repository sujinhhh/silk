import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, SearchTwoTone, HelpOutline } from "@material-ui/icons";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        {/* <AccessTime /> */}
        <h2>My React Projects</h2>
      </HeaderLeft>
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

  justify-content: space-between;
  padding: 10px 0;
  background-image: linear-gradient(230deg, #434343 0%, black 100%);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.7;
  display: flex;

  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
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
  background-image: linear-gradient(
    25deg,
    #bdc2e8 0%,
    #bdc2e8 1%,
    #e6dee9 100%
  );
  text-align: left;
  display: flex;
  align-items: center;
  border: 1px white solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
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
