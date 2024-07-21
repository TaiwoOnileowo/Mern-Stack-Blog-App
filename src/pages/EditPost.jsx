import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const EditPost = () => {
  const [category, setCategory] = useState("uncategorised");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const POST_CATEGORIES = [
    "uncategorised",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Weather",
    "Agriculture",
  ];
  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className="form_error-message">This is an error message</p>
        <form action="" className="create-post_form form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            value={category}
            id=""
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="jpg, png, jpeg"
          />
          <button className="btn primary">Update</button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
