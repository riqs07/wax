// ON album grid item click modal will open with slightly more info and a bigger sized picture
// will then have a button to take you to artist home page where you can then interact with database rather than view it

import React, { Fragment, useContext, useState, useEffect } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import styled from "styled-components";
import AlbumScoreCard from "./albumScoreCard";
import ReviewForm from "./albumReview";
import RatingForm from "./albumRating";
import Colors from "../layout/Colors";

import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../layout/Buttons";

import { Column50 } from "../layout/Grids";


const Grid = styled.div`
	display:grid;
  grid-template-columns: 0.8fr 1.4fr 0.8fr;
  grid-template-rows: 1fr ;
  grid-template-areas: "artist-image stats album-image" "artist-image stats album-image" "artist-image stats album-image";
	

`

const Modal = styled.div`
	width: 90%;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	position: fixed;
	top: 6vh;
	left: 5%;
	z-index: 10;


`;
const I = styled.i`
	padding: 0.5rem;
`;


// i guess this works but it dosent seem like the right solutiuon
//	 the solution is GRIDS BABY 
const ArtistImage = styled.img`
grid-area:"artist-image";
`
const AlbumImage = styled.img`

grid-area:"album-image";
`
const Header = styled.h1`
	padding: 1rem;
	color: ${Colors.text};
	background-color: ${Colors.primary};
	font-size: 2rem;
	text-align: center;
`;

const Body = styled.section`
`;
const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const AlbumStat = styled.li`
	align-items: center;
	justify-content: center;
	font-size: 1rem;
`;

const Image = styled.img`
	width: 20rem;
	height: 20rem;
	
	border-radius: 2rem;
	position: relative;
	z-index: 4;
	box-shadow: 0px 5px 50px 0px rgb(52, 152, 218),
		0px 0px 0px 7px rgba(52, 152, 218, 0.5);
`;

export const AlbumModal = ({ album, manageModal }) => {

	const context = useContext(AlbumContext)
	const {getAlbumSongs} = context

	const {
		albumID,
		name,
		artistID,
		genre,
		runtime,
		release_year,
		imageURL,
		artist_ImageURL,
		artist,
		likes,
		favs,
		avg,
		score,
	} = album;

	const stats = {
		albumID,
		score,
		likes,
		favs,
		avg,
	};

	// convert seconds to mins
	const secs = Math.floor(runtime / 60);


	const [reviewState, setAddReviewState] = useState(false);
	const [ratingState, setAddRatingState] = useState(false);

	const [editState, setEditStates] = useState({
		review: null,
		rating: null,
		fav: false,
		like: false,
	});
	// EDIT STATES BASED ON WHAT USER HAS ALREDY DONE

	const manageReview = () => {
		if (ratingState) {
			setAddRatingState(false);
		}
		setAddReviewState(!reviewState);
	};

	const manageRating = () => {
		if (reviewState) {
			setAddReviewState(false);
		}
		setAddRatingState(!ratingState);
	};

	const seeReviews =  () => {
		console.log("Show all reviews with associated with this album id");
	
	};

	// side image needs to have a parent element telling it how big to be 
	// when i do it though it looks weird for now images are showing big like how i want 
	// but they dont have a standard res so it pushes some white space below my action buttons 
// GRIDS BABY i
	return (
		
		
		
		
		<Modal>
			<Grid>
				
				<ArtistImage src = {artist_ImageURL} alt = "Artist_image"/>
						<Body>
				<Header>{`${name} by ${artist}`}</Header>
				
				<ul className="album-card--stats">
					<AlbumScoreCard info ={stats} />
					{genre && (
						<AlbumStat>
							<I className="fas fa-music"></I>
							{genre}
						</AlbumStat>
					)}

					{runtime && (
						<AlbumStat>
							<I
								className="fas fa-stopwatch fa-2x"
								style={{ color: "black" }}></I>
							{`${secs}m`}
						</AlbumStat>
					)}
					{release_year && (
						<AlbumStat>
							<I
								className="fas fa-stopwatch fa-2x"
								style={{ color: "black" }}></I>
							{release_year}
						</AlbumStat>
					)}
				</ul>

				{reviewState && (
					<ReviewForm manageReview={manageReview} album={album} />
				)}
				{ratingState && <RatingForm manageRating={manageRating} album={album} />}
			<Actions>

				{/* Maybe have add reveiw button after user clicks reviews to cut down on ui buttons*/}
				{reviewState ? (
					<PrimaryButton onClick={manageReview}>Cancel 📜</PrimaryButton>
				) : (
					<PrimaryButton onClick={manageReview}>Add Review 📜</PrimaryButton>
				)}
				{ratingState ? (
					<SecondaryButton onClick={manageRating}>Cancel </SecondaryButton>
				) : (
					<SecondaryButton onClick={manageRating}>
						Add Rating 🏁{" "}
					</SecondaryButton>
				)}
				<SecondaryButton onClick={seeReviews}>See Reviews </SecondaryButton>
				<SecondaryButton onClick={seeReviews}>Show Songs 🎵</SecondaryButton>

				<TertiaryButton onClick={manageModal}>❌</TertiaryButton>
			</Actions>
			</Body>
			<AlbumImage src = {imageURL} alt = "Artist_image"/>
		
		</Grid>
		</Modal>
	);
};


export const miniAlbumModal = ({album,manageModal}) =>{

}