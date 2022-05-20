import React, { useState, useEffect } from "react";
import "./blog.css";
import Feed from "./Feed";

function BlogHome({ posts }) {
  return (
    <>
      <Feed posts={posts} />
    </>
  );
}

export default BlogHome;
