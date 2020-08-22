import React, { useReducer } from "react";
import ArtistContext from "./ArtistContext";
import reducer from "./ArtistReducer";
import axios from "axios";

import { GET_ARTISTS } from "../types";

const ArtistState = (props) => {
	const initialState = {
		artists: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	// Get all artists
	const getAllArtists = async () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.get("http://localhost:9001/api/artists", config);
			dispatch({ type: GET_ARTISTS, payload: res.data });
		} catch (err) {
			console.log(err);
		}
	};
// Filter by rating
const filterArtistsByRating= async () => {
       
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {
		initialState.artists = []

		const res = await axios.get('http://localhost:9001/api/artists/ratings',config)
		dispatch({type: GET_ARTISTS,payload:res.data})

	} catch(err){
		console.log(err)
	}
}
// Filter by favs
const filterArtistsByFavs= async ()  => {
   
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}

	try {
		initialState.artists = []

		const res = await axios.get('http://localhost:9001/api/artists/favs',config)
		dispatch({type: GET_ARTISTS,payload:res.data})

	} catch(err){
		console.log(err)
	}
}
// Filter by likes
const filterArtistsByLikes= async () => {
   
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {
		initialState.artists = []

		const res = await axios.get('http://localhost:9001/api/artists/likes',config)
		dispatch({type: GET_ARTISTS,payload:res.data})

	} catch(err){
		console.log(err)
	}
}

// Filter by Score
const filterArtistsByScore= async () => {
   
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {
		initialState.artists = []

		const res = await axios.get('http://localhost:9001/api/artists/score',config)
		dispatch({type: GET_ARTISTS,payload:res.data})

	} catch(err){
		console.log(err)
	}
}
// Filter by Genre
const filterArtistsByGenre= async () => {
       
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {
		initialState.artists = []

		const res = await axios.get('http://localhost:9001/api/artists/genre',config)
		dispatch({type: GET_ARTISTS,payload:res.data})

	} catch(err){
		console.log(err)
	}
}
// FIlter by Followers 
const filterArtistsByFollowers= async () => {
       
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {
		initialState.artists = []

		const res = await axios.get('http://localhost:9001/api/artists/followers',config)
		dispatch({type: GET_ARTISTS,payload:res.data})

	} catch(err){
		console.log(err)
	}
}

// ADD follower

const followArtists = async artistID =>{
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {

		 axios.post('http://localhost:9001/api/artists/followers',artistID,config)

	} catch(err){
		console.log(err)
	}
}
// Delete follower 

const unFollowArtists = async artistID =>{
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {

		 axios.patch('http://localhost:9001/api/artists/followers',artistID,config)

	} catch(err){
		console.log(err)
	}

}
// check if follwing

const checkIfFollowing = async artistID =>{
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {

		 axios.post('http://localhost:9001/api/artists/followers',artistID,config)

	} catch(err){
		console.log(err)
	}
}

// get artist albums 
const getArtistAlbums = async artistID =>{
	const config = {
		headers:{
			'Content-Type':'application/json',
		}
	}
	try {
		
		const res = await axios.post('http://localhost:9001/api/artists/albums',artistID,config)
		return res 
	} catch(err){
		console.log(err)
	}
}


	return (
		<ArtistContext.Provider
			value={{
				artists: state.artists,
				getAllArtists,
				filterArtistsByFavs,
				filterArtistsByFollowers,
				filterArtistsByGenre,
				filterArtistsByLikes,
				filterArtistsByRating,
				filterArtistsByScore,
				followArtists,
				unFollowArtists,
				getArtistAlbums,
				checkIfFollowing

			}}>
			{props.children}
		</ArtistContext.Provider>
	);
};

export default ArtistState;
