import moment from 'moment';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateStory, deleteStory, addLaughs } from '../actions/stories';
const StoryInfo = ({
	story,
	toggleVisibleForm,
	toggleVisibleModal,
	currentId,
	setCurrentId,
	formData,
	setFormData,
}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (story) setFormData(story);
	}, [story]);

	return (
		<div className="story-content">
			<li>
				<h4 className="name-info">{story.title}</h4>
			</li>
			<li>
				<img
					src={story.selectedFile}
					className="small-image"
					alt={story.title}
				/>
			</li>
			<li>Description: {story.description}</li>
			<li>Submitted by: {story.parent}</li>
			<p>{moment(story.createdAt).fromNow()}</p>
			<p onClick={() => dispatch(addLaughs(story._id))}>
				😂{story.laughs}
				<button
					onClick={() => {
						setCurrentId(story._id);
						dispatch(updateStory(currentId, formData));
						toggleVisibleModal();
						toggleVisibleForm();
					}}
				>
					Edit Story
				</button>
			</p>
			<li>
				<button
					className="delete"
					onClick={() => {
						dispatch(deleteStory(story._id))
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
