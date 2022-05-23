import React, { useState, useEffect } from "react";

import Feed from "./Feed";

function BlogHome({ posts }) {
  return (
    <>
      <Feed posts={posts} />
    </>
  );
}

export default BlogHome;
