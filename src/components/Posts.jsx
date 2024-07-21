import React, { useState } from "react";

import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../data";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const ipAddress = window.location.hostname;
console.log(ipAddress);
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts_container">
          {posts.map(({ id, thumbnail, category, title, authorID, desc }) => (
            <PostItem
              key={id}
              postId={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              body={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No Posts Found</h2>
      )}
    </section>
  );
};

export default Posts;
