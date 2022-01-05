import moment from 'moment';
import React, { useState,  useEffect } from 'react';
import { addLaughs, updateStory } from '../api/requests';
import { useSelector, useDispatch } from 'react-redux';
import StoryInfo from './StoryInfo';

export default function StoryCard({
	story,
	toggleVisibleForm,
	formData,
	setFormData,
	currentId,
	setCurrentId,
}) {

  const dispatch = useDispatch();
	const [infoVisible, setInfoVisible] = useState(false);

	const toggleVisibleModal = () => {
		setInfoVisible(!infoVisible);
	};


	return (
		<div className="story-list">
			<li onClick={toggleVisibleModal}>
				<img src={story.selectedFile} alt={story.title} className="story-pic" />
				<h4 className="story-name">{story.title}</h4>
        			</li>
        <p>😂{story.laughs}</p>

			{infoVisible && (
				<>
					<div className="overlay" onClick={toggleVisibleModal}></div>
					<StoryInfo
						className="story-info-modal"
						story={story}
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
