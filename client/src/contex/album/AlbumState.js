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
    GET_ALBUMS,
    CLEAR_ALBUMS,
    UPDATE_ALBUM,
    FILTER_ALBUMS,
    CLEAR_FILTER
} from '../types'


const AlbumState = props => {
    const initialState = {
        albums:[
            {
                "id": 1,
                "name": "Yeezus ",
                "artistID": 1,
                "release_year": null,
                "runtime": 1500,
                "genre": "Rap",
                "createdAt": "2020-07-08T21:39:31.000Z",
                "updatedAt": "2020-07-08T21:39:31.000Z"
            },
            {
                "id": 2,
                "name": "ye",
                "artistID": 1,
                "release_year": null,
                "runtime": 2500,
                "genre": "Rap",
                "createdAt": "2020-07-08T21:39:31.000Z",
                "updatedAt": "2020-07-08T21:39:31.000Z"
            },
            {
                "id": 3,
                "name": "College dropout ",
                "artistID": 1,
                "release_year": null,
                "runtime": 4500,
                "genre": "Rap",
                "createdAt": "2020-07-08T21:39:31.000Z",
                "updatedAt": "2020-07-08T21:39:31.000Z"
            },
            {
                "id": 4,
                "name": "Graduation ",
                "artistID": 1,
                "release_year": null,
                "runtime": 1500,
                "genre": "Rap",
                "createdAt": "2020-07-08T21:39:31.000Z",
                "updatedAt": "2020-07-08T21:39:31.000Z"
            },
        ]
        
    }
    
    const [state,dispatch] = useReducer(reducer,initialState)





    //get ALBUMS
    const getAlbums = async () => {
        
       try {
           const res = await axios.get('/api/albums/all')
           dispatch({
               type:GET_ALBUMS,
               payload:res.data
           })
       } catch (error) {
           
       }
    }
    //ADD ALBUM
    const addAlbum = album => {
        
        dispatch({type: ADD_ALBUM,payload:album})
    }

    // DELTE ALBUM

    const deleteAlbum = id => {
        
        dispatch({type: DELETE_ALBUM,payload:id})
    }

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
            albums :state.albums,
            addAlbum,
            deleteAlbum
        }}>


        {props.children}
        </ AlbumContext.Provider>

    )
}

export default AlbumState