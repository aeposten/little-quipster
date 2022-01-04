import {
	BrowserRouter as Router,
	Route,
	// Link,
	// Switch,
} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


import Header from "../components/Header";
import StoryList from "./StoryList";
import About from "./About";
import Login from '../components/Login';
import Register from '../components/Register';

function App() {
  const allStories = useSelector((state) => state.posts);
  return (
    <div className="App">
      <header className="App-header">
        <Header  />
      </header>
      {/* <Router> */}
      {/* <Switch> */}
      <main>
        <Route path="/" exact>
          <StoryList
            allStories={allStories}
            // handleDelete={handleDelete}
          />
        </Route>
        <p>
          <Route path="/about" exact component={About} />
        </p>
        <p>
          <Route path="/login" exact component={Login} />
        </p>
        <p>
          <Route path="/register" exact component={Register} />
        </p>
      </main>
      {/* </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;

//above return
  // const [allStories, setAllStories] = useState([]);
  // const [user, setUser] = useState(null);
  // const [search, setSearch] = useState("");

  // const handleSearch = (e) => {
  //   setSearch(e.target.value.toLowerCase());
  // };

  // const addStory = (newStory) => {
  //   setAllStories([...allStories, newStory]);
  // };

  // useEffect(() => {
    // fetch("http://localhost:5000/stories")
      // .then((response) => response.json())
      // .then((allStories) => {
      //   setAllStories(allStories);
      // });
  //     dispatch(getAllStories())
  // }, [dispatch]);

  // const handleDelete = (deletedStory) => {
    // fetch(`http://localhost:5000/stories/${deletedStory.id}`, {
    //   method: "Delete",
    //   headers: { "Content-Type": "application/json" },
    // }).then(() => {
    //   const updatedStories = allStories.filter((story) => story.id !== deletedStory.id);
    //   setAllStories(updatedStories);
    // });
  // };
