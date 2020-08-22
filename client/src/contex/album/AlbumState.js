import React, {useReducer} from 'react';
import AlbumContext from './AlbumContext';
import reducer from './AlbumReducer';
import axios from 'axios';


import {
    GET_ALBUMS,
    FILTER_ALBUMS,
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
      const addAlbumReview = async review => {
       
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
          axios.post('http://localhost:9001/api/albums/reviews',review,config)

        } catch(error){
            console.log(error)
           
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
            
              axios.post('http://localhost:9001/api/albums/ratings',rating,config)

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
            
           axios.post('http://localhost:9001/api/albums/likes',albumID,config)

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
            
             axios.post('http://localhost:9001/api/albums/favs',albumID,config)

        } catch(err){
            console.log(err)
        }
    }

    // show all album reviws 
    const showAlbumReviews= async albumID => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            await axios.post('http://localhost:9001/api/albums/ratings',albumID,config)

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
            
            axios.put('http://localhost:9001/api/albums/reviews',review,config)

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
            
             axios.put('http://localhost:9001/api/albums/ratings',rating,config)

        } catch(err){
            console.log(err)
        }
    }

    // Delete Review 
    const deleteAlbumReview= async albumID => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
          axios.patch('http://localhost:9001/api/albums/reviews',albumID,config)

        } catch(err){
            console.log(err)
        }
    }

    // Delete Rating
    const deleteAlbumRating= async albumID => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
           axios.patch('http://localhost:9001/api/albums/ratings',albumID,config)

        } catch(err){
            console.log(err)
        }
    }
    // Delete Like
    const deleteAlbumLike= async albumID => {

        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
            axios.patch('http://localhost:9001/api/albums/likes',albumID,config)

        } catch(err){
            console.log(err)
        }
    }
    // Delete Fav 
 const deleteAlbumFav= async albumID => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            
             axios.patch('http://localhost:9001/api/albums/favs',albumID,config)

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
            initialState.albums = []

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
            initialState.albums = []

            const res = await axios.get('http://localhost:9001/api/albums/favs',config)
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
            initialState.albums = []

            const res = await axios.get('http://localhost:9001/api/albums/likes',config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
  
    // Filter by Score
    const filterAlbumsByScore= async () => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            initialState.albums = []

            const res = await axios.get('http://localhost:9001/api/albums/score',config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
  
    // Filter by Runtime
    const filterAlbumsByRuntime= async () => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            initialState.albums = []

            const res = await axios.get('http://localhost:9001/api/albums/runtime',config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
  
  
    // Filter by release
    const filterAlbumsByRelease= async () => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            initialState.albums = []

            const res = await axios.get('http://localhost:9001/api/albums/release',config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
  
    const filterAlbumsByGenre= async () => {
       
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            initialState.albums = []

            const res = await axios.get('http://localhost:9001/api/albums/genre',config)
            dispatch({type: FILTER_ALBUMS,payload:res.data})

        } catch(err){
            console.log(err)
        }
    }
  



    const checkInteractions = async albumID => {
      
        const config = {
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        }

        try {
            const res = await axios.post('http://localhost:9001/api/albums/editState',albumID,config)
            return res
        } catch (err) {
            console.log(err)
        }
     }

    return (
       < AlbumContext.Provider
        value = {{
            albums :state.albums,
            error:state.error,
            addAlbumReview,
            updateAlbumReview,
            addAlbumRating,
            updateAlbumRating,
            addAlbumFav,
            deleteAlbumFav,
            addAlbumLike,
            deleteAlbumLike,
            getAlbums,
            checkInteractions,
            filterAlbumsByRating,
            filterAlbumsByLikes,
            filterAlbumsByFavs,
            filterAlbumsByRuntime,
            filterAlbumsByRelease,
            filterAlbumsByScore,
            filterAlbumsByGenre,
            deleteAlbumRating,
            deleteAlbumReview
        }}>


        {props.children}
        </ AlbumContext.Provider>

    )
}

export default AlbumState