// ON album grid item click modal will open with slightly more info and a bigger sized picture
// will then have a button to take you to artist home page where you can then interact with database rather than view it

import React, { Fragment, useContext, useState,  } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import PropTypes from "prop-types";
import styled from "styled-components";
import AlbumScoreCard from "./albumScoreCard";
import ReviewForm from "./albumReview";
import RatingForm from "./albumRating";
import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../layout/Buttons";

import {Column50} from '../layout/Grids'
//// weird media queris look into it
const Modal = styled.div`
	width: 90%;

	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	position: fixed;
	top: 10vh;
    left: 5%;

	@media (mid-width: 768px) {
		.modal {
			width: 30rem;
			left: calc(100% -30rem) / 2;
		}
	}
`;
const I = styled.i`
	padding: 0.5rem;
`;

const Header = styled.h1`
	padding: 1rem;
    color: white;
    background-color:#1849a2;
    font-size: 2rem;
	text-align:center;
`;

const Body = styled.section`
	padding: 1rem;
`;
const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
`;



const AlbumStat = styled.ul`

 align-items: center;
 justify-content: center;
 font-size: 1rem;`



const Image = styled.img`
 width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    position: relative;
    z-index: 4;
    box-shadow: 0px 5px 50px 0px rgb(52, 152, 218), 0px 0px 0px 7px rgba(52, 152, 218,0.5);
`
export const AlbumModal = ({ album, manageModal }) => {
	// General idea is you get more info than on big scroller componentn and can interact with DB from here in various ways
	// since this page only pops on click i could have it fire off some cool async functions to the db to get some intresting questions etc

	// figure out a way to check to see if user has review & rating & like & fav for this album then display with update state
	//if not display just add state
	// artist picture
	const {
		id,
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
	} = album;

	const stats = {
		likes,
		favs,
		avg,
	};

	// convert seconds to mins
	const secs = Math.floor(runtime / 60);

	// useEffect(()=>{
	// 	// On open check if user has a like / fav / review/ rating 
	// 	// associated with this entity then 
	// if something is in there then show UPDATE STATES 
	// will have to change rating and review to display conditonally based on state
	// update state will have delete action within it

	// })

	const [reviewState, setAddReviewState] = useState(false);
	const [ratingState, setAddRatingState] = useState(false);

	// EDIT STATES BASED ON WHAT USER HAS ALREDY DONE 

	const manageReview = () => {
        if (ratingState){
            setAddRatingState(false)
        }
        setAddReviewState(!reviewState);
	};

    const manageRating = () => {
        if (reviewState){
            setAddReviewState(false)
        }
        setAddRatingState(!ratingState);
	};

	return (
		<Modal>
			<Header>{name}</Header>
			<Body>
				
				{imageURL && (
				<Column50>
								{/* first image is stretchd idk why */}

						<Image src={artist_ImageURL} alt="Artist Image"></Image>	
						<Image src={imageURL} alt="Artist Image"></Image>	
				</Column50>
			)}
{artist}
					<ul className="album-card--stats">
						<AlbumScoreCard stats = {stats}/>
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

				{reviewState && <ReviewForm manageReview = {manageReview} album={album} />}
				{ratingState && <RatingForm album={album} />}
			</Body>
			<Actions>
				
				{reviewState ? (
					<PrimaryButton onClick={manageReview}>Cancel 📜</PrimaryButton>
				) : (
					<PrimaryButton onClick={manageReview}>Add Review 📜</PrimaryButton>
				)}
				{ratingState ? (
				<SecondaryButton onClick={manageRating}>Cancel </SecondaryButton>
				) : (
                    <SecondaryButton onClick={manageRating}>Add Rating 🏁 </SecondaryButton>
                    )}

				<TertiaryButton onClick={manageModal}>❌</TertiaryButton>
			</Actions>
		</Modal>
	);
};
