import * as constants from './constants';
import {callLoginApi} from './../../../common';
import {decode} from "jsonwebtoken";


export const signIn = (email, password) => {
    return dispatch =>  callLoginApi(constants.URL, "POST", {
        email: email,
        password: password
    },function(res){
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('adminId',  JSON.stringify(decode( res.data.token.slice(7,  res.data.token.length))));
            dispatch(setAuthToken(res.data.token));
    })
}

export const signOut = () => {
    return {
        type: constants.LOGOUT
    }
}

export const setAuthToken = (value) => {
    return {
        type: constants.SET_AUTH_TOKEN,
        value: value
    }
}
