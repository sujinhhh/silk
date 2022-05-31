import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import Feed from "./Feed";

function BlogHome() {
  const { searchResults, posts } = useContext(DataContext);

  return (
    <BlogContainer>
      {posts.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p>Sorry. No posts to display</p>
      )}
    </BlogContainer>
  );
}

export default BlogHome;

const BlogContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  display: flex;
  justify-content: center;
  height: 100vh;
`;
