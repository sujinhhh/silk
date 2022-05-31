import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";

function NewPost() {
  const {
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    done,
    setDone,
  } = useContext(DataContext);

  return (
    <main className="NewPost">
      {!done ? (
        <>
          <h1>New Post</h1>
          <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <h2>Post has been Posted</h2>
          <p>
            <Link to="/blog/about">
              <button onClick={() => setDone(false)}>Go to Blog Home</button>
            </Link>
          </p>
        </>
      )}
    </main>
  );
}

export default NewPost;
