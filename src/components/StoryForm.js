import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import { createStory } from '../actions/stories';
const StoryForm = ({ addStory, toggleVisibleForm }) => {
	const [formData, setFormData] = useState({
		title: '',
		parent: '',
		description: '',
		tags: '',
		selectedFile: '',
	});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		// e.preventDefault();
		dispatch(createStory(formData));
		// const newStory = {
		// 	title: formData.title,
		// 	image: formData.image,
		// 	description: formData.description,
		// };
		// setFormData({
		// 	title: '',
		// 	image: '',
		// 	description: '',
		// });
		//     fetch("http://localhost:5000/stories", {
		//       method: "Post",
		//       headers: {
		//         "Content-Type": "application/json",
		//       },
		//       body: JSON.stringify(newStory),
		//     })
		//       .then((response) => response.json())
		//       .then(addStory);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleTagChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.split(','),
		});
	};

	// const handleImageLoad = (base64) => {
	// 	setFormData({
	// 		...formData,
	// 		image: base64,
	// 	});
	// };

	return (
		<div className="story-content">
			<h4 className="add-story">Add New Story</h4>
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
					name="parent"
					value={formData.parent}
					placeholder="Parent Name"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="description"
					value={formData.description}
					placeholder="Story Description"
					onChange={handleChange}
				/>
				{/* <input
					type="text"
					name="tags"
					value={formData.tags}
					placeholder="Story Tags"
					onChange={handleTagChange}
				/> */}
				{/* <FileBase
					type="file"
          multiple={false}
					name={formData.image}
					placeholder="Image URL"
					onDone={handleImageLoad}
				/> */}

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
				}}
			>
				Submit
			</button>
		</div>
	);
};
export default StoryForm;
