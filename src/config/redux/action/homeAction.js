import axios from 'axios';

export const SetDataBlog = (dispatch) => {
        axios.get('http://localhost:4000/v1/blog/posts?page=1&perPage=4')
        .then(result => {
            const responseAPI = result.data;
            dispatch({
                type: 'UPDATE_DATA_BLOG',
                payload: responseAPI.data
            })
        })
        .catch(err => {
            console.log('error', err);
        })
}