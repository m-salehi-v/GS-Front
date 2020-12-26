import * as actionTypes from './actionTypes';
import axios from '../../api/axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        username,
        token
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const logoutSuccess = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authSuperAdmin = (userData) => {
    return dispatch => {
        dispatch(authStart());

        axios.post("/superarea/login", userData)
            .then(response => {
                dispatch(authSuccess(response.data.token, response.data.admin.username));
            })
            .catch(error => {
                dispatch(authFail(error));
            });
    }
}

export const logoutSuperAdmin = (token) => {
    return dispatch => {
        try {
            axios.post('/api/logout', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(logoutSuccess());
        } catch (error) {
            console.log(error);
        }
    }
}
