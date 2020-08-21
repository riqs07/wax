import React, { Fragment, useContext, useState, useEffect } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import styled from "styled-components";
import AlbumScoreCard from "./albumScoreCard";
import ReviewForm from "./albumReview";
import RatingForm from "./albumRating";
import { Colors, Shadows } from "../layout/Palette";

import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../layout/Buttons";

const Grid = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 1.4fr 0.8fr;
	grid-template-rows: 1fr;
	grid-template-areas: "artist-image stats album-image" "artist-image stats album-image" "artist-image stats album-image";
`;

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

const ArtistImage = styled.img`
	grid-area: "artist-image";
`;
const AlbumImage = styled.img`
	grid-area: "album-image";
`;
const Header = styled.h1`
	padding: 1rem;
	color: ${Colors.text};
	background-color: ${Colors.primary};
	font-size: 2rem;
	text-align: center;
`;

const Body = styled.section``;
const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const AlbumStat = styled.li`
	align-items: center;
	justify-content: center;
	font-size: 1rem;
`;

export const AlbumModal = ({ album, manageModal }) => {
	const context = useContext(AlbumContext);
	const { checkInteractions, addAlbumReview, updateAlbumReview } = context;

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

	const info = {
		name,
		albumID,
	};

	const stats = {
		albumID,
		score,
		likes,
		favs,
		avg,
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await checkInteractions({ albumID });

			setEditStates(result.data);
		};

		fetchData();
	}, []);

	// convert seconds to mins
	const secs = Math.floor(runtime / 60);

	const [reviewState, setAddReviewState] = useState(false);
	const [ratingState, setAddRatingState] = useState(false);

	const [editState, setEditStates] = useState({
		review: null,
		rating: null,
		fav: null,
		like: null,
	});

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

	const seeReviews = () => {
		console.log("Show all reviews with associated with this album id");
	};

	return (
		<Modal>
			<Grid>
				<ArtistImage src={artist_ImageURL} alt="Artist_image" />
				<Body>
					<Header>{`${name} by ${artist}`}</Header>

					<ul className="album-card--stats">
						<AlbumScoreCard
							data={stats}
							previousLike={editState.like}
							previousFav={editState.fav}
						/>
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
									style={{ color: "grey" }}></I>
								{`${secs}m`}
							</AlbumStat>
						)}
						{release_year && (
							<AlbumStat>
								<I
									className="fas fa-calender fa-2x"
									style={{ color: "grey" }}></I>
								{release_year}
							</AlbumStat>
						)}
					</ul>

					{reviewState && (
						<ReviewForm
							manageReview={manageReview}
							album={info}
							previousReview={editState.review}
						/>
					)}
					{ratingState && (
						<RatingForm
							manageRating={manageRating}
							album={info}
							previousRating={editState.rating}
						/>
					)}

					<Actions>
						{/* if prev review show update review and cancel  */}

						{reviewState ? (
							<PrimaryButton onClick={manageReview}>Cancel📜 </PrimaryButton>
						) : editState.review ? (
							<PrimaryButton onClick={manageReview}>
								Update Review 📜
							</PrimaryButton>
						) : (
							<PrimaryButton onClick={manageReview}>
								Add Review 📜
							</PrimaryButton>
						)}

						{ratingState ? (
							<SecondaryButton onClick={manageRating}>
								Cancel📜{" "}
							</SecondaryButton>
						) : editState.rating ? (
							<SecondaryButton onClick={manageRating}>
								Update Rating 📜
							</SecondaryButton>
						) : (
							<SecondaryButton onClick={manageRating}>
								Add Rating 🏁
							</SecondaryButton>
						)}

						<SecondaryButton onClick={seeReviews}>See Reviews </SecondaryButton>
					</Actions>
				</Body>
				<AlbumImage src={imageURL} alt="Artist_image" />
			</Grid>
		</Modal>
	);
};

export const miniAlbumModal = ({ album, manageModal }) => {};
