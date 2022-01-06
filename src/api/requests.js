import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const fetchStories = () => API.get('/stories');
export const createStory = (newStory) => API.post('/stories', newStory);
export const addLaughs = (id) => API.patch(`stories/${id}/addLaughs`);
export const updateStory = (id, updatedStory) => API.patch(`stories/${id}`, updatedStory);
export const deleteStory = (id) => API.delete(`stories/${id}`); 

export const login = (formData) => API.post('/parent/login', formData);
export const register = (formData) => API.post('/parent/register', formData);