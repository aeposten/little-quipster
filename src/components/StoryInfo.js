const StoryInfo = ({ story, handleDelete, toggleVisibleModal }) => {
    return (
      <div className="story-content">
        <li>
          <h4 className="name-info">{story.name}</h4>
        </li>
        <li>
          <img src={story.image} className="small-image" alt={story.name} />
        </li>
        <li>Description: {story.description}</li>
        <li>
          <button className="delete"
            onClick={() => {
              handleDelete(story);
              toggleVisibleModal();
            }}
          >
            Delete Story
          </button>
        </li>
      </div>
    );
  };
  
  export default StoryInfo;
  