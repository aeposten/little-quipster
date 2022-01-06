import { AUTH } from './actions';
import * as requests from '../api/requests.js';


export const login = (formData, history) => async (dispatch) => {
	try {
		const { data } = await requests.login(formData);
		dispatch({ type: AUTH, data });
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const register = (formData, history) => async (dispatch) => {
	try {
		const { data } = await requests.register(formData);
		dispatch({ type: AUTH, data });
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};
