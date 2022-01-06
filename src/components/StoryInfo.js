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

	const parent = JSON.parse(localStorage.getItem('profile'))
	const resetForm = () => {
		setCurrentId(0);
		setFormData({
			title: '',
			description: '',
			selectedFile: '',
			laughs: '',
		});
	};

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
			<li>Submitted by: {story.name}</li>
			<p>{moment(story.createdAt).fromNow()}</p>
			<p onClick={() => dispatch(addLaughs(story._id))}>😂{story.laughs} </p>
			{/* <button
				onClick={() => {
					setCurrentId(story._id);
					dispatch(updateStory(currentId, formData));
					toggleVisibleModal();
					toggleVisibleForm();
					// resetForm();
				}}
			>
				Edit Story
			</button> */}

			<li>
				<button
					className="delete"
					onClick={() => {
						dispatch(deleteStory(story._id));
						toggleVisibleModal();
						resetForm();
					}}
				>
					Delete Story
				</button>
			</li>
			<li>
				<button
					className="delete"
					onClick={() => {
						resetForm();
						toggleVisibleModal();
					}}
				>
					Exit
				</button>
			</li>
		</div>
	);
};

export default StoryInfo;
