import StoryForm from "../components/StoryForm";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = ({ toggleVisibleForm }) => {

  return (
    <>
      <nav>
        <ul className="nav">
          <Link className="title" to="/">
            <li className="title">Little Quipster</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li onClick={toggleVisibleForm}>Add a Story </li>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/Register">
            <li>Register</li>
          </Link>

        </ul>
      </nav>
    </>
  );
};

export default NavBar;
