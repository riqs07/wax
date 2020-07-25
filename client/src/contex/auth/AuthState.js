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
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from '../types'


const AuthState = props => {
    const initialState = {
        token:localStorage.getItem('token'),
        user:null,
        isAuth:null,
        loading:true,
        error:null
        
    }

    const register = async formdata => {
        const config = {
            header: {
                'Content-Type': 'application/json '
            }
        }

        try {
            const res = await axios.post('https://localhost:9001/api/users',formdata,config)
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:REGISTER_FAIL,
                payload:'error.response.data.msg'
            })
        }

    }


    const loadUser = () => {console.log('object')}
    const login= () => {console.log('object')}
    const logout = () => {console.log('object')}
    const clearErrors = () => {console.log('object')}

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
           error:state.error,
           register
        }}>


        {props.children}
        </ AuthContext.Provider>

    )
}

export default AuthState