import { FETCH_ALL, CREATE, UPDATE, LAUGH, DELETE } from './actions'
import * as requests from '../api/requests.js';

export const getStories = () => async (dispatch) => {
	try {
		const { data } = await requests.fetchStories();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const createStory = (story) => async (dispatch) => {
	// console.log(story);
	try {
		const { data } = await requests.createStory(story);

		dispatch({ type: CREATE, payload: data });
	} catch (error) {

		console.log(error.message);
	}
};

export const updateStory = (id, story) => async (dispatch) => {
	console.log(story);
	try {
		const { data } = await requests.updateStory(id, story);

		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const addLaughs = (id) => async (dispatch) => {
	try {
		const { data } = await requests.addLaughs(id);

		dispatch({ type: LAUGH, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const deleteStory = (id) => async (dispatch) => {
	try {
		await requests.deleteStory(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error.message);
	}
};


