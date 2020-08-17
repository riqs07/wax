import React, {useReducer} from 'react';
import ArtistContext from './ArtistContext';
import reducer from './ArtistReducer';
import axios from 'axios';

import {
    GET_ARTISTS
 } from '../types'



const ArtistState = props => {
    const initialState = {
       artists:[]
        
    }
    
    const [state,dispatch] = useReducer(reducer,initialState)

    // Get all artists 
    const getAllArtists= async ()=> {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.get('http://localhost:9001/api/artists',config)
            dispatch({type: GET_ARTISTS,payload:res.data})

        } catch(err){
            console.log(err)
        }

    }
 


    //CRUD

    // Add new artist 
    // update artist info
    // delete artist 

    return (
       < ArtistContext.Provider
        value = {{
            artists :state.artists,
            getAllArtists
            
        }}>


        {props.children}
        </ ArtistContext.Provider>
    
    )
}

export default ArtistState