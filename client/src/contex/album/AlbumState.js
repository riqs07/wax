import React, {useReducer} from 'react';
import uuid from 'uuid';
import AlbumContext from './AlbumContext';
import reducer from './AlbumReducer';
import axios from 'axios';


import {
    SET_CURRENT,
    CLEAR_CURRENT,
    ADD_ALBUM_REVIEW,
    ADD_ALBUM_RATING,
    DELETE_ALBUM,
    GET_ALBUMS,
    CLEAR_ALBUMS,
    UPDATE_ALBUM,
    FILTER_ALBUMS,
    CLEAR_FILTER,
    REVIEW_FAIL
} from '../types'


const AlbumState = props => {
    const initialState = {
        albums:[
            {
                "artistID": 3,
                "artist": "The Weeknd",
                "id": 10,
                "name": "Beauty Behind the Madness",
                "likes": 0,
                "favs": 0,
                "avg": "100.0000",
                "release_year": null,
                "runtime": 500,
                "genre": "R&B",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/the-weekend.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/beauty_behind_the_madness.jfif"
            },
            {
                "artistID": 2,
                "artist": "Dua Lipa",
                "id": 6,
                "name": "Future Nostalgia",
                "likes": 1,
                "favs": 1,
                "avg": "53.5714",
                "release_year": null,
                "runtime": 3700,
                "genre": "Pop",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/dua-lipa.jpg",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/future_nostalgia.jpg"
            },
            {
                "artistID": 1,
                "artist": "Kanye West ",
                "id": 5,
                "name": "Watch the throne ",
                "likes": 1,
                "favs": 2,
                "avg": "50.0000",
                "release_year": null,
                "runtime": 5500,
                "genre": "Rap",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/kanye-west.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/Watch_The_Throne.jpg"
            },
            {
                "artistID": 1,
                "artist": "Kanye West ",
                "id": 3,
                "name": "College dropout ",
                "likes": 0,
                "favs": 4,
                "avg": "50.0000",
                "release_year": null,
                "runtime": 4500,
                "genre": "Rap",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/kanye-west.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/college_dropout.webp"
            },
            {
                "artistID": 1,
                "artist": "Kanye West ",
                "id": 2,
                "name": "ye",
                "likes": 6,
                "favs": 5,
                "avg": "50.0000",
                "release_year": null,
                "runtime": 2500,
                "genre": "Rap",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/kanye-west.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/ye.webp"
            },
            {
                "artistID": 1,
                "artist": "Kanye West ",
                "id": 1,
                "name": "Yeezus ",
                "likes": 6,
                "favs": 4,
                "avg": "50.0000",
                "release_year": null,
                "runtime": 1500,
                "genre": "Rap",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/kanye-west.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/yeezus.jpg"
            },
            {
                "artistID": 1,
                "artist": "Kanye West ",
                "id": 4,
                "name": "Graduation ",
                "likes": 1,
                "favs": 1,
                "avg": "50.0000",
                "release_year": null,
                "runtime": 1500,
                "genre": "Rap",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/kanye-west.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/graduation.jpg"
            },
            {
                "artistID": 3,
                "artist": "The Weeknd",
                "id": 8,
                "name": "After Hours",
                "likes": 0,
                "favs": 0,
                "avg": null,
                "release_year": null,
                "runtime": 5040,
                "genre": "R&B",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/the-weekend.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/after_hours.jpg"
            },
            {
                "artistID": 3,
                "artist": "The Weeknd",
                "id": 7,
                "name": "Trilogy",
                "likes": 1,
                "favs": 0,
                "avg": null,
                "release_year": null,
                "runtime": 5005,
                "genre": "R&B",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/the-weekend.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/albums/trilogy.png"
            },
            {
                "artistID": 9,
                "artist": "Playboy Carti",
                "id": 12,
                "name": "Die lit",
                "likes": 0,
                "favs": 0,
                "avg": null,
                "release_year": null,
                "runtime": 5070,
                "genre": "Rap",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/playboy-carti.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/die_lit.webp"
            },
            {
                "artistID": 9,
                "artist": "Playboy Carti",
                "id": 11,
                "name": "Playboy Carti",
                "likes": 0,
                "favs": 0,
                "avg": null,
                "release_year": null,
                "runtime": 5090,
                "genre": "Rap",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/playboy-carti.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/playboy_carti.png"
            },
            {
                "artistID": 3,
                "artist": "The Weeknd",
                "id": 9,
                "name": "Starboy",
                "likes": 0,
                "favs": 0,
                "avg": null,
                "release_year": null,
                "runtime": 5001,
                "genre": "R&B",
                "artist_ImageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/artists/the-weekend.webp",
                "imageURL": "https://waxhades123.s3.us-east-2.amazonaws.com/starboy.jpg"
            }
            
            
        ],
        current:null,
        error:null
        
    }
    
    const [state,dispatch] = useReducer(reducer,initialState)

  // get all albums list 
    const getAlbums = async () => {
        
       try {
           const res = await axios.get('http://localhost:9001/api/albums/')
           dispatch({
               type:GET_ALBUMS,
               payload:res.data
           })
       } catch (err) {
           console.log(err)
       }
    }

    //ADD Review 
    // NEED ERROR HANDLING for when reviews exists
    // but it should never show add state if review exists already but still
    const addAlbumReview = async review => {
       
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('http://localhost:9001/api/albums/reviews',review,config)
            dispatch({type: ADD_ALBUM_REVIEW,payload:res.data})

        } catch(error){
            console.log(error)
            dispatch({
				type: REVIEW_FAIL,
				payload: error.response.data.msg,
			});
        }
    }

   
    //ADD RATING
    const addAlbumRating= async rating => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',rating,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }


    // ADD LIKE 
    const addAlbumLike= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    
    // ADD FAV 
    const addAlbumFav= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }

    // show songs in album 
    const showAlbumSongs= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }

    // show all album reviws 
    const showAlbumReviews= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Update Review
    const updateAlbumReview= async review => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',review,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }

    // Update Rating
    const updateAlbumRating= async rating => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',rating,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }

    // Delete Review 
    const deleteAlbumReview= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }

    // Delete Rating
    const deleteAlbumRating= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Delete Like
    const deleteAlbumLike= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Delete Fav 
 const deleteAlbumFav= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Filter by rating
    const filterAlbumsByRating= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Filter by favs
    const filterAlbumsByFavs= async id  => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Filter by likes
    const filterAlbumsByLikes= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Filter by genre
    const filterAlbumsByGenre= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/ratings',id,config)
            dispatch({type: ADD_ALBUM_RATING,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    

    // DELTE ALBUM

    const deleteAlbum = id => {
        
        dispatch({type: DELETE_ALBUM,payload:id})
    }
    const setCurrentAlbum = album => {
        
        dispatch({type: SET_CURRENT,payload:album})
    }
    const clearCurrentAlbum = album => {
        
        dispatch({type: CLEAR_CURRENT,payload:album})
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
            deleteAlbum,
            addAlbumReview,
            addAlbumRating,
            getAlbums
        }}>


        {props.children}
        </ AlbumContext.Provider>

    )
}

export default AlbumState