import * as requests from '../stories'


export const getStories = () => async (dispatch) => {
    try {
        const { data } = await requests.fetchStories();
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}