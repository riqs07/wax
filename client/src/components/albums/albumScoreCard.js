import React, { useState, useContext } from "react";
import styled from "styled-components";
import AlbumContext from '../../contex/album/AlbumContext'
import {calculateAlbumScore} from "../../utils/algo"


const Card = styled.div`
	display: flex;
	padding:1rem;
	margin-top:.5rem;
`;

const AlbumScoreCard = ({info }) => {
	// check if user has favorited this album if not then display outline
	// on click display full and add to db
	// toggle to add / delete


	const context = useContext(AlbumContext)

	const {addAlbumFav,addAlbumLike} = context

	

	const { likes, favs, avg,albumID ,score} = info;



	const [isFav, setIsFav] = useState(false);
	const [isLike, setIsLiked] = useState(false);
	const Like = (e) => {
		setIsLiked(!isLike);
		// now dislik if state = full 
		// need state to be passed in so its aware if user has like or nbot other than that its working 

		addAlbumLike({albumID})
		
	};
	const Fav = (e) => {
		setIsFav(!isFav);
		addAlbumFav({albumID})

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

			{avg ? (
				<h2>
					Average Rating is {" "}
					<span style={{ color: "black" }}>{Math.round(avg)}</span>
					<i style={{ color: "black" }} class="fa fa-flag-checkered fa-2x"></i>
				</h2>
			) : (
				<h2>Be the first to rate this album!</h2>
			)}
			{score && (
				<h2>
					Score {" "}
					<span style={{ color: "black" }}>{Math.round(score)}</span>
					<i style={{ color: "black" }} class="fa fa-flag-checkered fa-2x"></i>
				</h2>
			)}

				
			
		</Card>
	);
};
export default AlbumScoreCard;
