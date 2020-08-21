import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../contex/auth/AuthContext";
import UserContext from "../../contex/users/UserContext";
import { Column50, Row50 } from "../layout/Grids";
import styled from "styled-components";
import Spinner from "./../layout/Spinner";

import AlbumProfileCard from "../users/profileCard";
import RecentAlbums from "../users/recentAlbums";
import {
	Collection,
	ReviewCollectionChild,
	RatingCollectionChild,
} from "../layout/Collection";

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
	const album = {
		imageURL:
			"https://waxhades123.s3.us-east-2.amazonaws.com/artists/kanye_west.jpg",
		review: "This is a good album",
		name: "Rodeo",
	};

	const authContext = useContext(AuthContext);
	const userContext = useContext(UserContext);

	const { getProfile, profile } = userContext;
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		authContext.loadUser();
		getProfile();
	}, []);

	const {
		topArtists,
		topAlbums,
		recentFavAlbums,
		recentLikedAlbums,
		recentReviews,
		recentRatings,
	} = profile;
	console.log(profile);

	// /* Recent likes songs
	// 	algo recomendation
	// 	etc */
	/* 	
		// 		<Title>Top Artists 🎵</Title>
	
		// 		<Title> Recently Liked Songs 🎺 </Title>
	
	
	
		// 		<Title>Just For You 🎸 </Title>
	
		// 		<Title>More Algorithim goodness.🤖</Title> */

	return (
		<>
			<Column50>
				<div>
					<Title>Your Top Albums 👑</Title>
					<AlbumProfileCard albums={topAlbums} />
				</div>

				<div>
					<Title>Your Recent favorite Albums 🎸</Title>

					<AlbumProfileCard albums={recentFavAlbums} />
				</div>
			</Column50>
			<Column50>
				{recentReviews && (
					<Collection>
						<Title>Recent Reviews 📜</Title>
						{recentReviews.map((review) => (
							<ReviewCollectionChild data={review} key={album.id} />
						))}
					</Collection>
				)}
				{recentRatings && (
					<Collection>
						<Title>Recent Ratings 💯</Title>
						{recentRatings.map((rating) => (
							<RatingCollectionChild data={rating} key={album.id} />
						))}
					</Collection>
				)}
			</Column50>
			{/* <RecentAlbums title ={'Recently Liked Albums'} albums = {recentLikedAlbums}></RecentAlbums> */}
		</>
	);
};

export default Home;
