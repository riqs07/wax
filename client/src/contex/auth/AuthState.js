import React, {useReducer} from 'react';
import uuid from 'uuid';
import AuthContext from './AuthContext';
import reducer from './AuthReducer';
import axios from 'axios';


import {
    SET_CURRENT,
    CLEAR_CURRENT,
    ADD_ALBUM_REVIEW,
    DELETE_ALBUM,
    GET_ALBUMS,
    CLEAR_ALBUMS,
    UPDATE_ALBUM,
    FILTER_ALBUMS,
    CLEAR_FILTER
} from '../types'


const AuthState = props => {
    const initialState = {
        token:localStorage.getItem('token'),
        user:null,
        isAuth:null,
        loading:true,
        error:null
        
    }




    //Load user
    // login
    //logout
    //clear errirs
    //register 
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
       < AuthContext.Provider
        value = {{
           token:state.token,
           isAuth:state.isAuth,
           loading:true,
           user:state.user,
           error:state.error
        }}>


        {props.children}
        </ AuthContext.Provider>

    )
}

export default AuthState