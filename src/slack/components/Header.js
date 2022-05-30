import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";

import {
  FiberManualRecord,
  SearchTwoTone,
  HelpOutline,
} from "@material-ui/icons";

const Header = ({ search, setSearch, width }) => {
  return (
    <>
      {width < 768 ? (
        <HeaderMobileContainer>
          <Link to="/">
            <HeaderLeft>
              <img src="./aaaaa.png" alt="" />
              <h3>Projects</h3>
            </HeaderLeft>
          </Link>
          <HeaderRight>
            <Nav className="blog-nav">
              <ul>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/post">Add Post</Link>
                </li>
              </ul>
            </Nav>

            <HeaderSearch onSubmit={(e) => e.preventDefault()}>
              <SearchTwoTone />
              <label htmlFor="search">Search Posts</label>
              <input
                id="search"
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </HeaderSearch>
          </HeaderRight>
        </HeaderMobileContainer>
      ) : (
        <HeaderContainer>
          <Link to="/">
            <HeaderLeft>
              {/* <HeaderAvatar /> */}
              {/* <AccessTime /> */}
              <img src="./aaaaa.png" alt="" />
              <h1>Projects</h1>
            </HeaderLeft>
          </Link>
          <HeaderRight>
            <Nav className="blog-nav">
              <ul>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/post">Add Post</Link>
                </li>
              </ul>
            </Nav>

            <HeaderSearch onSubmit={(e) => e.preventDefault()}>
              <SearchTwoTone />
              <label htmlFor="search">Search Posts</label>
              <input
                id="search"
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </HeaderSearch>
            <SidbarHeader>
              <SidbarInfor>
                <h2>Web Developer</h2>
                <h3>
                  <FiberManualRecord />
                  Sujin Lee
                </h3>
              </SidbarInfor>
              <CreateIcon />
            </SidbarHeader>
            <HelpOutline />
          </HeaderRight>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;

const HeaderMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 9999;
  padding: 10px 0;
  background-image: linear-gradient(230deg, #434343 0%, black 100%);
  color: white;
  > li {
    padding: 1rem;
    color: white;
  }
`;

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
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
  h1 {
    font-size: 2.7rem;
    margin-left: 10px;
    bottom: 30%;
    right: -60px;
    background: -webkit-linear-gradient(#ff0844, #ffb199);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Pangolin", cursive;
  }
  img {
    width: 100px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  margin: 0 2%;
  place-content: left;
  max-width: 400px;
  > ul {
    padding: 0;
  }
  > h2 {
    color: white;
  }
`;

const HeaderSearch = styled.form`
  margin-right: 0;
  flex: 0.3;
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
  text-align: center;
  display: flex;
  align-items: center;
  border: 0.5px white solid;
  > label {
    position: absolute;
    left: -99999px;
  }
  > input {
    background-color: transparent;
    border: none;
    /* text-align: center; */
    min-width: 20vw;
    outline: 0;
    color: white;
    font-size: 17px;
    padding: 5px 0;
  }
  > .MuiSvgIcon-root {
    padding-left: 5px;
  }
`;

const SidbarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #311b92;
  border-top: 1px solid #311b92;
  padding-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: wheat;
    border-radius: 999px;
  }
`;
const SidbarInfor = styled.div`
  padding: 0 1rem;
  > h2 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  > h3 {
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 13px;
    margin-top: 1px;
    margin-right: 2px;
    color: #512da8;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
