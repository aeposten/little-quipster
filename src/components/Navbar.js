import StoryForm from "../components/StoryForm";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = ({ addStory }) => {
  const [formVisible, setFormVisible] = useState(false);
  const toggleVisibleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <>
      <nav>
        <ul className="nav">
          {/* <Router> */}
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
          {/* </Router> */}
          {/* <li>
            <Search search={search} handleSearch={handleSearch} />
          </li> */}
        </ul>
      </nav>
      {formVisible && (
        <>
          <div className="overlay" onClick={toggleVisibleForm}>
            {" "}
          </div>
          <StoryForm className="story-info-modal" addStory={addStory} toggleVisibleForm={toggleVisibleForm} />
        </>
      )}
    </>
  );
};

export default NavBar;
