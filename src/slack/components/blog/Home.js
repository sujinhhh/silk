import React from "react";
import Feed from "./Feed";

function Home({ posts }) {
  return (
    <main>
      {posts.length ? (
        <p>
          <Feed posts={posts} />
        </p>
      ) : (
        <p style={{ marginTop: "2rem" }}> No posts to display</p>
      )}
    </main>
  );
}

export default Home;
