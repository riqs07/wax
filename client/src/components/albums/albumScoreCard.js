import React, { useState, Fragment } from "react";
import styled from "styled-components";
const Card = styled.div`
border:2px dotted black;
display:flex;
`

const AlbumScoreCard= ({stats}) => {
	// check if user has favorited this album if not then display outline
	// on click display full and add to db
	// toggle to add / delete
	// animation to let you know something is happening if i cant make it show the outlined version 

	const {likes,favs,avg} = stats
	const [isFav, setIsFav] = useState(false);
	const [isLike, setIsLiked] = useState(false);

	const onClick = (e) => {
		console.log(e.target);

    };
    
	return (
		<Card>
			<h2>
				{favs}
				<i
					onClick={onClick}
					style={{ color: "orange" }}
					class="fa fa-star fa-2x"></i>
			</h2>
			<h2>
				{likes}
				<i
					onClick={onClick}
					style={{ color: "red" }}
					class="fa fa-heart fa-2x"></i>
			</h2>
			<h2>
				{avg}
				<i
					onClick={onClick}
					style={{ color: "black" }}
					class="fa fa-flag-checkered fa-2x"></i>
			</h2>
		</Card>
	);
};
export default AlbumScoreCard;
