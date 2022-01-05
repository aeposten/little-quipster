import axios from 'axios'

const allStoriesURL = 'http://localhost:5000/stories'


export const fetchStories = () => axios.get(allStoriesURL);
export const createStory = (newStory) => axios.post(allStoriesURL, newStory);
export const addLaughs = (id) => axios.patch(`${allStoriesURL}/${id}/addLaughs`);
export const updateStory = (id, updatedStory) => axios.patch(`${allStoriesURL}/${id}`, updatedStory);
export const deleteStory = (id) => axios.delete(`${allStoriesURL}/${id}`); 