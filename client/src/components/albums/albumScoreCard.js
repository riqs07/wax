import React, { useState, useContext ,useEffect,useRef} from "react";
import styled from "styled-components";
import AlbumContext from '../../contex/album/AlbumContext'
import {convertScoreToGrade} from "../../utils/algo";
import {Colors} from "../layout/Palette";


const Card = styled.div`
	display: flex;
	padding:1rem;
	margin-top:.5rem;
`;

const AlbumScoreCard = ({data,previousLike,previousFav}) => {

	const context = useContext(AlbumContext)

	const {addAlbumFav,addAlbumLike,deleteAlbumFav,deleteAlbumLike} = context
	
	const { likes, favs, avg,albumID ,score} = data;

	const grade = convertScoreToGrade(score);

	console.log(previousLike,previousFav,)

	const [isFav, setIsFav] = useState(false);
	const [isLike, setIsLiked] = useState(false);



	// I think i can useRef to check if prevois vals are likes /faved


	useEffect(() => {
		const fetchData = async () => {
			if (previousFav ){
				setIsFav(true)
			}
		
			if (previousLike){
				setIsLiked(!isLike)
			}

		};

		fetchData();
		
	
	}, [])

	
	const handleLike = (e) => {
		if (previousLike){
			deleteAlbumLike({albumID})
		} else {
			addAlbumLike({albumID})
		}
		setIsLiked(!isLike);
		
	};
	const handleFav = (e) => {
		if (previousFav){
			console.log(albumID)

			deleteAlbumFav({albumID})
		} else {
			addAlbumFav({albumID})
		}

		setIsFav(!isFav);

	};

	return (
		<Card>
			<h2>
				Has <span style={{ color: "orange" }}>{favs}</span> favorites.
				{isFav ? (
					<i
						onClick={handleFav}
						style={{ color: "orange" }}
						class="fa fa-star fa-2x"></i>
				) : (
					<i
						onClick={handleFav}
						style={{ color: "orange" }}
						class="far fa-star fa-2x"></i>
				)}
			</h2>

			<h2>
				Has <span style={{ color: "red" }}>{likes}</span> likes.
				{isLike ? (
					<i
						onClick={handleLike}
						style={{ color: "red" }}
						class="fa fa-heart fa-2x"></i>
				) : (
					<i
						onClick={handleLike}
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
					Grade {" "}
					<span style={{color:`${Colors.primary}` }}>{grade}</span>
				</h2>
			)}

				
			
		</Card>
	);
};
export default AlbumScoreCard;
