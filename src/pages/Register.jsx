import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className="form register_form">
          <p className="form_error-message">This is an error message</p>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            autoFocus
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            autoFocus
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            autoFocus
          />
          <button className="btn primary">Register</button>
        </form>
        <small>
          Already have an account? <Link to="/login">Sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
