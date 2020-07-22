// ON album grid item click modal will open with slightly more info and a bigger sized picture
// will then have a button to take you to artist home page where you can then interact with database rather than view it

import React, { Fragment, useContext, useState, useEffect } from "react";
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
//// weird media queris look into it
const Modal = styled.div`
	width: 90%;

	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	position: fixed;
	top: 20vh;
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
    font-size: 1.75rem;

`;

const Body = styled.section`
	padding: 1rem;
`;
const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Image = styled.div``;
export const AlbumModal = ({ album, onCancel }) => {
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
	const image_url2 = "https://waxhades123.us-east-2.amazonaws.com/starboy.jpg";

	const [reviewState, setAddReviewState] = useState(false);
	const [ratingState, setAddRatingState] = useState(false);

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
				{/* 
			{imageURL && (
				<div className="album-card--image">
					
					<li>

						<img src={image_url2} alt="artist image "></img>
						
					</li>
				</div>
			)} */}
				<div className="album-card--body">
					<h2>{name}</h2>
					<h3>{artist}</h3>
					<ul className="album-card--stats">
						<AlbumScoreCard stats={stats} />

						{genre && (
							<li className="album-card--stat">
								<I className="fas fa-music"></I>
								{genre}
							</li>
						)}

						{runtime && (
							<li className="album-card--stat">
								<I
									className="fas fa-stopwatch fa-2x"
									style={{ color: "black" }}></I>
								{`${secs}m`}
							</li>
						)}
						{release_year && (
							<li className="album-card--stat">
								<I
									className="fas fa-stopwatch fa-2x"
									style={{ color: "black" }}></I>
								{release_year}
							</li>
						)}
					</ul>
				</div>

				{reviewState && <ReviewForm album={album} />}
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

				<TertiaryButton onClick={onCancel}>❌</TertiaryButton>
			</Actions>
		</Modal>
	);
};
