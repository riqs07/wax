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
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/yeezus.jpg",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 2,
                "name": "ye",
                "artistID": 1,
                "release_year": null,
                "runtime": 2500,
                "genre": "Rap",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.comye.webp",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 3,
                "name": "College dropout ",
                "artistID": 1,
                "release_year": null,
                "runtime": 4500,
                "genre": "Rap",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/college_dropout.webp",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 4,
                "name": "Graduation ",
                "artistID": 1,
                "release_year": null,
                "runtime": 1500,
                "genre": "Rap",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/graduation.jpg",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 5,
                "name": "Watch the throne ",
                "artistID": 1,
                "release_year": null,
                "runtime": 5500,
                "genre": "Rap",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/Watch_The_Throne.jpg",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 6,
                "name": "Future Nostalgia",
                "artistID": 2,
                "release_year": null,
                "runtime": 5200,
                "genre": "Pop",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/future_nostalgia.jpg",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 7,
                "name": "Trilogy",
                "artistID": 3,
                "release_year": null,
                "runtime": 5005,
                "genre": "R&B",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 8,
                "name": "After Hours",
                "artistID": 3,
                "release_year": null,
                "runtime": 5040,
                "genre": "R&B",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/after_hours.jpg",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 9,
                "name": "Starboy",
                "artistID": 3,
                "release_year": null,
                "runtime": 5001,
                "genre": "R&B",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/starboy.jpg",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 10,
                "name": "Beauty Behind the Madness",
                "artistID": 3,
                "release_year": null,
                "runtime": 500,
                "genre": "R&B",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/beauty_behind_the_madness.jfif",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 11,
                "name": "Playboy Carti",
                "artistID": 9,
                "release_year": null,
                "runtime": 5090,
                "genre": "Rap",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/playboy_carti.png",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            },
            {
                "id": 12,
                "name": "Die lit",
                "artistID": 9,
                "release_year": null,
                "runtime": 5070,
                "genre": "Rap",
                "imageURL": "https://waxhades123.bucket.us-east-2.amazonaws.com/die_lit.webp",
                "createdAt": "2020-07-12T05:11:35.000Z",
                "updatedAt": "2020-07-12T05:11:35.000Z"
            }
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