import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard_container">
          {posts.map((post) => {
            const { id, thumbnail, category, title, desc, authorID } = post;
            return (
              <article key={id} className="dashboard_post">
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumbnail">
                    <img src={thumbnail} alt={title} />
                  </div>
                  <h5>{title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${id}`} className="btn sm">
                    View
                  </Link>
                  <Link to={`/posts/${id}/edit`} className="btn sm primary">
                   Edit
                  </Link>
                  <Link to={`/posts/${id}/delete`} className="btn sm danger">
                    Delete
                  </Link>
                </div>
               
              </article>
            );
          })}
        </div>
      ) : (
        <div className="container">
          <h1>You have no posts yet</h1>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
