import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createStory, updateStory } from '../actions/stories';
const StoryForm = ({
	toggleVisibleForm,
	currentId,
	setCurrentId,
	formData,
	setFormData,
}) => {
	const dispatch = useDispatch();
	// const story = useSelector((state) =>
	// 	currentId ? state.allStories.find((description) => description._id === currentId) : null
	// );
	// useEffect(() => {
	// 	if (story) setFormData(story);
	// }, [story]);

	const parent = JSON.parse(localStorage.getItem('profile'));

	const handleSubmit = () => {
		if (currentId === 0) {
			dispatch(createStory({ ...formData, name: parent?.result?.name }));
		} else {
			dispatch(updateStory({ ...formData, name: parent?.result?.name }));
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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
			<h4 className="add-story">
				{currentId ? 'Edit Story' : 'Add New Story'}
			</h4>
			<form onSubmit={handleSubmit} className="story-form">
				<input
					type="text"
					name="title"
					value={formData.title}
					placeholder="Story Title"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="description"
					value={formData.description}
					placeholder="Story Description"
					onChange={handleChange}
				/>

				<FileBase
					type="file"
					multiple={false}
					onDone={({ base64 }) =>
						setFormData({ ...formData, selectedFile: base64 })
					}
				/>
			</form>
			<button
				onClick={() => {
					handleSubmit();
					toggleVisibleForm();
					setCurrentId();
					resetForm();
				}}
			>
				Submit
			</button>
			<button
				className="delete"
				onClick={() => {
					resetForm();
					toggleVisibleForm();
				}}
			>
				Exit
			</button>
		</div>
	);
};
export default StoryForm;
