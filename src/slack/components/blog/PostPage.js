import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

function PostPage() {
  const { id } = useParams();
  const { posts, handleDelete } = useContext(DataContext);
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <img src={post.img} alt="" />
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <div className="blog-buttons">
              <Link to={`/edit/${post.id}`}>
                <button className="color-button">Edit Post</button>
              </Link>
              <button
                className="color-button m-l-1"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>
            </div>
          </>
        )}
        {!post && (
          <>
            <h2>Post has not found</h2>
            <p>
              <Link to="/blog">Go to Main Page</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}

export default PostPage;
