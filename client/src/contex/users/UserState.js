import React, {useReducer} from 'react';
import UserContext from './UserContext';
import reducer from './UserReducer';
import axios from 'axios';
import { GET_PROFILE } from '../types';



const UserState = props => {
    const initialState = {
        profile:{
                topArtists:[],
                recentAlbums:[],
                topAlbums:[],
            recentReviews:[]
          
        },
        loading:true
        
    }
    
    const [state,dispatch] = useReducer(reducer,initialState)

    const getProfile = async () => {
        
        try {
            const res = await axios.post('http://localhost:9001/api/users/profile')
            dispatch({
                type:GET_PROFILE,
                payload:res.data
            })
        } catch (err) {
            console.log(err)
        }
     }

    return (
       < UserContext.Provider
        value = {{
            profile:state.profile,
           getProfile
        }}>


        {props.children}
        </ UserContext.Provider>

    )
}

export default UserState