import axios from "axios";
import { useSelector } from "react-redux";
import StoryCard from "../components/StoryCard";

const StoryList = ({ allStories, search, handleDelete }) => {


  return (
    <ul className="stories">
      {allStories
        // .filter((story) => story.name.toLowerCase().includes(search))
        .map((story) => (
          <StoryCard story={story} key={story.id} handleDelete={handleDelete}/>
        ))}
    </ul>
  );
};

export default StoryList;
