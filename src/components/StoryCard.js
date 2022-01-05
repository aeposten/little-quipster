import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StoryInfo from './StoryInfo';

export default function StoryCard({
	story,
	handleDelete,
	toggleVisibleForm,
	formData,
	setFormData,
	currentId,
	setCurrentId,
}) {
	const [infoVisible, setInfoVisible] = useState(false);

	const toggleVisibleModal = () => {
		setInfoVisible(!infoVisible);
	};

	return (
		<div className="story-list">
			<li onClick={toggleVisibleModal}>
				<img src={story.selectedFile} alt={story.title} className="story-pic" />
				<h4 className="story-name">{story.title}</h4>
				{/* <p>{story.description}</p>
        <p>{moment(story.createdAt).fromNow()}</p>
        <p>😂{story.laughs.length}<button>Edit Story</button></p> */}
			</li>

			{infoVisible && (
				<>
					<div className="overlay" onClick={toggleVisibleModal}></div>
					<StoryInfo
						className="story-info-modal"
						story={story}
						// handleDelete={handleDelete}
						toggleVisibleModal={toggleVisibleModal}
						toggleVisibleForm={toggleVisibleForm}
						formData={formData}
						setFormData={setFormData}
						currentId={currentId}
						setCurrentId={setCurrentId}
					/>
				</>
			)}
		</div>
	);
}
