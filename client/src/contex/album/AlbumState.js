import React, {useReducer} from 'react';
import uuid from 'uuid';
import AlbumContext from './AlbumContext';
import reducer from './AlbumReducer';
import axios from 'axios';


import {
    SET_CURRENT,
    CLEAR_CURRENT,
    ADD_ALBUM,
    DELETE_ALBUM,
    UPDATE_ALBUM,
    FILTER_ALBUMS,
    CLEAR_FILTER
} from '../types'


const AlbumState = props => {
    const initialState = {
        albums:[
            {
            "name": "Yeezus ",
                       }
        ]
        
    }
    

    const [state,dispatch] = useReducer(reducer,initialState)
    //ADD ALBUM

    // DELTE ALBUM
    // UPDATE ALBUM
    // FILTER ALBUM
    // CLEAR FILTER ALBUM
    // ADD LIKE ALBUM
    // DELTE LIKE ALBUM
    // ADD FAV ALBUM
    // DELETE FAV ALBUM


    return (
       < AlbumContext.Provider
        value = {{
            albums :state.name
        }}>


        {props.children}
        </ AlbumContext.Provider>

    )
}

export default AlbumState