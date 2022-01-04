import { useState } from 'react';

const StoryForm = ({ addStory, toggleVisibleForm }) => {
	const [formData, setFormData] = useState({
		title: '',
		parent: '',
		description: '',
		tags: '',
		image: '',
	});

	const handleSubmit = (e) => {
		// e.preventDefault();
		const newStory = {
			title: formData.title,
			image: formData.image,
			description: formData.description,
		};
		setFormData({
			title: '',
			image: '',
			description: '',
		});
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

  const handleImageLoad = (base64) => {
		setFormData({
			...formData,
			image: base64,
		});
	};

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
				<input
					type="file"
					name="tags"
          value={formData.tags}
					placeholder="Story Tags"
					onChange={handleTagChange}
				/>
				<input
					type="text"
					name="image"
					placeholder="Image URL"
					onChange={handleImageLoad}
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
