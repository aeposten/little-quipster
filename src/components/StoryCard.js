import React, { useState } from "react";
import StoryInfo from "./StoryInfo";

export default function StoryCard({ story, handleDelete }) {
  const [infoVisible, setInfoVisible] = useState(false);


  const toggleVisibleModal = () => {
    setInfoVisible(!infoVisible);
  };


  return (
    <div className="story-list">
      <li onClick={toggleVisibleModal}>
        <img src={story.image} alt={story.name} className="story-pic" />
        <h4 className="story-name">{story.name}</h4>
      </li>

      {infoVisible && (
        <>
          <div className="overlay" onClick={toggleVisibleModal}></div>
          <StoryInfo
            className="story-info-modal"
            story={story}
            handleDelete={handleDelete}
            toggleVisibleModal={toggleVisibleModal}
          />
        </>
      )}
    </div>
  );
}
