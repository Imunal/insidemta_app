import axios from 'axios';

export const authenticate = (userName, userPassword) => dispatch => {
    dispatch({type: 'AUTHENTICATE_REQUEST'});
    return axios.post('', {
        userName,
        userPassword
    })
    .then(payload => dispatch({type: 'AUTHENTICATE_SUCCESS', payload}))
    .catch(error => {
        console.log(error);
        dispatch({type: 'AUTHENTICATE_FAILURE'});
    })
}