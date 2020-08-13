import React, {useReducer} from 'react';
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
    REVIEW_FAIL,
    RATING_FAIL,
    CLEAR_ALBUMS,
    UPDATE_ALBUM,
    FILTER_ALBUMS,
    CLEAR_FILTER,
} from '../types'


const AlbumState = props => {
    const initialState = {
        albums:null,
        error:null,
        loading:true
        
    }
    
    const [state,dispatch] = useReducer(reducer,initialState)

  // get all albums list 
    const getAlbums = async () => {
        
       try {
           const res = await axios.get('http://localhost:9001/api/albums')
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
    const addAlbumLike= async albumID => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/likes',albumID,config)
        console.log('foo')

        } catch(err){
            console.log(err)
        }
    }
    
    // ADD FAV 
    const addAlbumFav= async albumID => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            await axios.post('http://localhost:9001/api/albums/favs',albumID,config)

        } catch(err){
            console.log(err)
        }
    }

    // show songs in album 
    const getAlbumSongs= async id => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/songs',id,config)
            console.log(res)

            return res
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
    const filterAlbumsByRating= async () => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.get('http://localhost:9001/api/albums/ratings',config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Filter by favs
    const filterAlbumsByFavs= async ()  => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/favs',config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Filter by likes
    const filterAlbumsByLikes= async () => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/likes',config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
    // Filter by genre
    const filterAlbumsByGenre= async genre => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            const res = await axios.post('http://localhost:9001/api/albums/genre',genre,config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

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
            error:state.error,
            deleteAlbum,
            addAlbumReview,
            addAlbumRating,
            addAlbumFav,
            addAlbumLike,
            getAlbums,
            getAlbumSongs,
            filterAlbumsByRating,
            filterAlbumsByLikes,
            filterAlbumsByFavs
        }}>


        {props.children}
        </ AlbumContext.Provider>

    )
}

export default AlbumState