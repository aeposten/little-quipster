import { getStories } from '../actions/stories';

export default (allStories = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...allStories, action.payload];
		case 'UPDATE':
		case 'LAUGH':
			return allStories.map((story) =>
				story._id === action.payload._id ? action.payload : story
			);
		case 'DELETE':
			return allStories.filter((story) => story._id !== action.payload)
		default:
			return allStories;
	}
};
