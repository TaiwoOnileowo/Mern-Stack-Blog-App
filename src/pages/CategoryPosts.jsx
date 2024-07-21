import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import PostItem from "../components/PostItem";
const CategoryPosts = () => {
  const [posts, setPosts]= useState(DUMMY_POSTS)
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

export default CategoryPosts;
