import React from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
const Header = () => {
  const [isNavShowing, setIsNavShowing] = React.useState(
    window.innerWidth > 800 ? true : false
  );
  const closeNav = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/">
          <img src={logo} alt="" className="nav_logo" />
        </Link>
        {isNavShowing && (
          <ul className="nav_menu">
            <li>
              <Link to="/profile/dreed" onClick={closeNav}>
                Tee Drex
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNav}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNav}>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNav}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
