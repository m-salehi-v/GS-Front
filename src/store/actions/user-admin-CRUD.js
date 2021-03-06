import * as actions from './actionTypes';
import axios from '../../api/axios';

const userStart = () => (
    {
        type: actions.USER_START
    }
)

const userFail = (error) => (
    {
        type: actions.USER_FAIL,
        error
    }
)

const userSuccess = (data, dataType) => (
    {
        type: actions.USER_SUCCESS,
        data,
        dataType
    }
)

export const getUsers = (token) => dispatch => {
    dispatch(userStart());
    axios.get("/user", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            dispatch(userSuccess(response.data, 'user'));
        })
        .catch(error => {
            dispatch(userFail(error.response && error.response.data.error ? error.response.data.error : error.message));
        });
}

export const getQAdmins = (token) => dispatch => {
    dispatch(userStart());

    axios.get("/questionadmin", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            dispatch(userSuccess(response.data, 'QAdmin'));
        })
        .catch(error => {
            dispatch(userFail(error.response && error.response.data.error ? error.response.data.error : error.message));
        });
}

export const addUser = (token,userData) => dispatch => {
    dispatch(userStart());
    axios.post("/user" , userData , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {dispatch(getUsers(token))})
    .catch(error => {
        dispatch(userFail(error.response && error.response.data.error ? error.response.data.error : error.message));
    });
}

export const addQAdmin = (token,userData) => dispatch => {
    dispatch(userStart());
    axios.post("/questionadmin" , userData , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {dispatch(getQAdmins(token))})
    .catch(error => {
     dispatch(userFail(error.response && error.response.data.error ? error.response.data.error : error.message));
    });
}

export const deleteUser = (token,studentNumber) => dispatch => {
    dispatch(userStart());
    axios.delete("/user/"+studentNumber, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {dispatch(getUsers(token))})
    .catch(error => {
     dispatch(userFail(error.response && error.response.data.error ? error.response.data.error : error.message));
    });
    
}
export const deleteQAdmin = (token,username) => dispatch => {
    dispatch(userStart());
    axios.delete("/questionadmin/"+username , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {dispatch(getQAdmins(token))})
    .catch(error => {
     dispatch(userFail(error.response && error.response.data.error ? error.response.data.error : error.message));
    });
}

export const editUser = (token,userData, studentNumber) => dispatch => {
    dispatch(userStart());
    axios.patch("/user/"+ studentNumber ,userData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {dispatch(getUsers(token))})
    .catch(error => {
     dispatch(userFail(error.response && error.response.data.error ? error.response.data.error : error.message));
    });
} 

export const editQAdmin = (token,adminData, username) => dispatch => {
    dispatch(userStart());

    axios.patch("/questionadmin/"+ username , adminData , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {dispatch(getQAdmins(token))})
    .catch(error => {
     dispatch(userFail(error.response && error.response.data.error ? error.response.data.error : error.message));
    });
}


