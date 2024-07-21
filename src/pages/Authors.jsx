import React, { useState } from "react";
import { authorsData } from "../data";
import { Link } from "react-router-dom";
const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors_container">
          {authors.map(({ id, avatar, name, posts }) => (
            <Link to={`posts/users/${id}`} key={id} className="author">
              <div className="author_avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author_info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="center">No Users/Authors Found</h2>
      )}
    </section>
  );
};

export default Authors;
