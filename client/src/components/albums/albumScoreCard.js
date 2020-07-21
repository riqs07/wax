import React, { useState, Fragment } from "react";
import styled from "styled-components";
const Card = styled.div`
background-color:#efefef;
border:2px dotted black;
display:flex;
`

const AlbumScoreCard= () => {
	// check if user has favorited this album if not then display outline
	// on click display full and add to db
	// toggle to add / delete
	// animation to let you know something is happening if i cant make it show the outlined version 


	const [isFav, setIsFav] = useState(false);
	const [isLike, setIsLiked] = useState(false);

	const totalFavs = 41;
	const totalLikes = 23;
	const score = 1200;
	const onClick = (e) => {
		console.log(e.target);

    };
    
	return (
		<Card>
			<h2>
				{totalFavs}
				<i
					onClick={onClick}
					style={{ color: "orange" }}
					class="fa fa-star fa-2x"></i>
			</h2>
			<h2>
				{totalLikes}
				<i
					onClick={onClick}
					style={{ color: "red" }}
					class="fa fa-heart fa-2x"></i>
			</h2>
			<h2>
				{score}
				<i
					onClick={onClick}
					style={{ color: "black" }}
					class="fa fa-flag-checkered fa-2x"></i>
			</h2>
		</Card>
	);
};
export default AlbumScoreCard;
