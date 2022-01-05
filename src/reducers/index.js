import { combineReducers } from 'redux';
import allStories from './stories';
import authReducer from './login';

export default combineReducers({
	allStories, authReducer
});
