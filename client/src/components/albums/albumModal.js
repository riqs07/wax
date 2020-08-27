import React, { useContext, useState, useEffect } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import styled from "styled-components";
import AlbumScoreCard from "./albumScoreCard";
import ReviewForm from "./albumReview";
import RatingForm from "./albumRating";
import { Colors, Shadows } from "../layout/Palette";
import { Collection, ReviewCollectionChild } from "../layout/Collection";
import {
	PrimaryButton,
	SecondaryButton,
	DangerButton,
} from "../layout/Buttons";

const Grid = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 1.4fr 0.8fr;
	grid-template-rows: 1fr;
`;
const Title = styled.h1`
	font-size: 2.5rem;
	margin: 1rem;
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

export const AlbumModal = ({ album }) => {
	const context = useContext(AlbumContext);
	const {
		checkInteractions,
		deleteAlbumRating,
		deleteAlbumReview,
		getAlbumReviews,
	} = context;

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

	// Really dont like this implemntatino but i cant get jsx to return from seeReview Function
	const [allReviews, setSeeReviews] = useState();

	const [editState, setEditStates] = useState({
		review: null,
		rating: null,
		fav: null,
		like: null,
	});

	const manageReview = () => {
		if (ratingState || allReviews) {
			setAddRatingState(false);
			setSeeReviews(null);
		}
		setAddReviewState(!reviewState);
	};

	const manageRating = () => {
		if (reviewState || allReviews) {
			setAddReviewState(false);
			setSeeReviews(null);
		}
		setAddRatingState(!ratingState);
	};

	const ReviewDelete = () => {
		deleteAlbumReview({ albumID });
		manageReview();
	};

	const RatingDelete = () => {
		deleteAlbumRating({ albumID });
		manageRating();
	};

	const seeReviews = async () => {
		if (ratingState || reviewState) {
			setAddRatingState(false);
			setAddReviewState(false);
		}

		const res = await getAlbumReviews({ albumID });

		const reviews = res.data;

		reviews.map((review) => {
			review.imageURL = imageURL;
		});
		setSeeReviews(reviews);
	};

	return (
		<Modal>
			<Grid>
				<img src={artist_ImageURL} alt="Artist_image" />
				<Body>
					<Header>{`${name} by ${artist}`}</Header>

					{!reviewState && !ratingState && !allReviews && (
						<ul>
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
										className="fas fa-calender-day fa-2x"
										style={{ color: "grey" }}></I>
									{release_year}
								</AlbumStat>
							)}
						</ul>
					)}

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
					{allReviews && (
						<div style={{ margin: "1rem" }}>
							<Collection>
								<Title>Recent Reviews 📜</Title>

								{allReviews.map((review) => (
									<ReviewCollectionChild data={review} key={review.userID} />
								))}
							</Collection>
						</div>
					)}
					<Actions>
						{reviewState ? (
							<>
								<PrimaryButton onClick={manageReview}>Cancel📜 </PrimaryButton>
								<DangerButton onClick={ReviewDelete}>
									Delete Review
								</DangerButton>
							</>
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
							<>
								<SecondaryButton onClick={manageRating}>
									Cancel 🏁
								</SecondaryButton>
								<DangerButton onClick={RatingDelete}>
									Delete Rating
								</DangerButton>
							</>
						) : editState.rating ? (
							<SecondaryButton onClick={manageRating}>
								Update Rating 🏁
							</SecondaryButton>
						) : (
							<SecondaryButton onClick={manageRating}>
								Add Rating 🏁
							</SecondaryButton>
						)}

						<SecondaryButton onClick={seeReviews}>See Reviews </SecondaryButton>
					</Actions>
				</Body>
				<img src={imageURL} alt="Artist_image" />
			</Grid>
		</Modal>
	);
};
