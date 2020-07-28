import React, { useState, useContext } from "react";
import styled from "styled-components";
const Card = styled.div`
	display: flex;
`;

const AlbumScoreCard = ({ stats }) => {
	// check if user has favorited this album if not then display outline
	// on click display full and add to db
	// toggle to add / delete
	// animation to let you know something is happening if i cant make it show the outlined version

	const { likes, favs, avg } = stats;
	const [isFav, setIsFav] = useState(false);
	const [isLike, setIsLiked] = useState(false);

	const Like = (e) => {
		setIsLiked(!isLike);
		console.log("Add like to db");
		// Needs to update DB
	};
	const Fav = (e) => {
		setIsFav(!isFav);
		console.log("Add fav to db");

		// Needs to update DB
	};

	return (
		<Card>
			<h2>
				Has <span style={{ color: "orange" }}>{favs}</span> favorites.
				{isFav ? (
					<i
						onClick={Fav}
						style={{ color: "orange" }}
						class="fa fa-star fa-2x"></i>
				) : (
					<i
						onClick={Fav}
						style={{ color: "orange" }}
						class="far fa-star fa-2x"></i>
				)}
			</h2>

			<h2>
				Has <span style={{ color: "red" }}>{likes}</span> likes.
				{isLike ? (
					<i
						onClick={Like}
						style={{ color: "red" }}
						class="fa fa-heart fa-2x"></i>
				) : (
					<i
						onClick={Like}
						style={{ color: "red" }}
						class="far fa-heart fa-2x"></i>
				)}
			</h2>

			{avg && (
				<h2>
					Average Score is {" "}
					<span style={{ color: "black" }}>{Math.round(avg)}</span>
					<i style={{ color: "black" }} class="fa fa-flag-checkered fa-2x"></i>
				</h2>
			)}
		</Card>
	);
};
export default AlbumScoreCard;
