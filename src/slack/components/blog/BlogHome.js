import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Feed from "./Feed";

function BlogHome({ posts }) {
  return (
    <BlogContainer>
      <Feed posts={posts} />
    </BlogContainer>
  );
}

export default BlogHome;

const BlogContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  display: flex;
  justify-content: center;
`;
