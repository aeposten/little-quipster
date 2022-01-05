import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getStories } from '../actions/stories';
import StoryCard from '../components/StoryCard';

const StoryList = ({
	search,
	handleDelete,
	toggleVisibleForm,
	currentId,
	setCurrentId,
	formData,
	setFormData,
}) => {
	const allStories = useSelector((state) => state.allStories);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStories());
	}, [dispatch]);

	console.log(allStories);

	return (
		<ul className="stories">
			{allStories
				.map((story) => (
					<StoryCard
						story={story}
						key={story._id}
						toggleVisibleForm={toggleVisibleForm}
            currentId={currentId}
            setCurrentId={setCurrentId}
            formData={formData}
            setFormData={setFormData}
					/>
				))}
		</ul>
	);
};

export default StoryList;
// export const fetchStories = () => axios.get(StoryList);
