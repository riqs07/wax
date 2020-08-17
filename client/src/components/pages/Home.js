import React ,{useContext,useEffect,useState} from "react";
import AuthContext from '../../contex/auth/AuthContext'
import UserContext from '../../contex/users/UserContext'
import { Column50 } from "../layout/Grids";
import styled from "styled-components";
import Spinner from './../layout/Spinner'

import {AlbumProfileCard} from '../users/profileCard'

const Grid3 = styled.ul`
	display: grid;
	align-content: center;

	padding: 1rem;
	margin: 1rem;
	grid-template-columns: repeat(3, 1fr);
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background: #fff;
	border-radius: 2rem;
`;
// MAybe figure out how to change the grid basis with styled css
const Grid5 = styled.ul`
	display: grid;
	align-content: center;

	padding: 1rem;
	margin: 1rem;
	grid-template-columns: repeat(5, 1fr);
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background: #fff;
	border-radius: 2rem;
`;

const Img = styled.img`
	border-radius: 50%;
	grid-template-columns: 1fr;
	padding: 1rem;
	position: relative;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	margin: 1rem;
`;

const Home = () => {
	// on hover can show there rating in the database
    // on click lead to there page in app
    

	/// grabbing info from users context
	
    // really jiust need the id and the name and the image 
	const placeHolder =
		"https://waxhades123.s3.us-east-2.amazonaws.com/ye.webp";


		const authContext = useContext(AuthContext)
		const userContext = useContext(UserContext)

		const {getProfile,profile} = userContext
		const [loading,setLoading] = useState(true)


		const {topArtists,topAlbums,recentAlbums} = profile

		// NOt sure if i should pull profile here and then pass down the corresponmding info
		// or just have components aware 

		useEffect(()=>{
			authContext.loadUser()
			getProfile()
		},[])
		
	// /* Recent likes songs
	// 	algo recomendation 
	// 	etc */
/* 	
		// 		<Title>Top Artists 🎵</Title>
	
		// 		<Title> Recently Liked Songs 🎺 </Title>
	
	
	
		// 		<Title>Just For You 🎸 </Title>
	
		// 		<Title>More Algorithim goodness.🤖</Title> */

	return (
		
		<Column50>
		
			<AlbumProfileCard title ={'Your Top Albums 🎧'} albums = {topAlbums}/>

	
		<AlbumProfileCard title ={'Your Recent favorite Albums 🎶'}albums = {recentAlbums}/>
		</Column50>

		


	
	);
};

export default Home;
