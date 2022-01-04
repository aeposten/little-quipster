import axios from 'axios'




export const fetchStories = () => axios.get(url);
export const createStory = (newStory) => axios.story(url, newStory);
export const likeStory = (id) => axios.patch(`${url}/${id}/likeStory`);
export const updateStory = (id, updatedStory) => axios.patch(`${url}/${id}`, updatedStory);
export const deleteStory = (id) => axios.delete(`${url}/${id}`); 