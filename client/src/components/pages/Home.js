import React from "react";
import AlbumsGrid from "../albums/grid";
import { Row50 } from "../layout/Grids";
import styled from "styled-components";

const TopArtistGrid = styled.ul`
	display: grid;
	align-content: center;

	padding: 1rem;
	margin: 1rem;
	grid-template-columns: repeat(3, 1fr);
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background: #fff;
	border-radius: 12px;
`;
// MAybe figure out how to change the grid basis with styled css
const TopAlbumsGrid = styled.ul`
	display: grid;
	align-content: center;

	padding: 1rem;
	margin: 1rem;
	grid-template-columns: repeat(5, 1fr);
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background: #fff;
	border-radius: 12px;
`;

const Img = styled.img`
	border-radius: 50%;
	grid-template-columns: 1fr;
	padding: 1rem;
	position: relative;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	margin: 1rem;
`;

const Home = () => {
	// on hover can show there rating in the database
    // on click lead to there page in app
    

    /// grabbing info from users context

    // really jiust need the id and the name and the image 
	const placeHolder =
		"https://waxhades123.s3.us-east-2.amazonaws.com/future_nostalgia.jpg";

	return (
		<Row50>
			<div class="col-1">
				<Title>Top Artists 🎵</Title>
				<TopArtistGrid>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
				</TopArtistGrid>
				<Title> Recently Liked Songs 🎺 </Title>
				<TopAlbumsGrid>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
				</TopAlbumsGrid>
			</div>
			<div class="col-2">
				<Title>Favorite Albums 🎧</Title>
				<TopArtistGrid>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
				</TopArtistGrid>
				<Title>Just For You 🎸 </Title>
				<TopAlbumsGrid>
					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>
				</TopAlbumsGrid>
				<Title>Your Reviews. 🖊 </Title>
				<TopAlbumsGrid>
					
				</TopAlbumsGrid>
			</div>
			
		</Row50>
	);
};

export default Home;
