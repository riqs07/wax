import React from "react";
import { Column50 } from "../layout/Grids";
import styled from "styled-components";


const Grid3 = styled.ul`
	display: grid;
	align-content: center;

	padding: 1rem;
	margin: 1rem;
	grid-template-columns: repeat(3, 1fr);
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background: #fff;
	border-radius: 2rem;
`;
// MAybe figure out how to change the grid basis with styled css
const Grid5 = styled.ul`
	display: grid;
	align-content: center;

	padding: 1rem;
	margin: 1rem;
	grid-template-columns: repeat(5, 1fr);
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background: #fff;
	border-radius: 2rem;
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
		"https://waxhades123.s3.us-east-2.amazonaws.com/ye.webp";


		// also gonna need to have the name show up under the iamge 
	return (
		<Column50>
			<div class="col-1">
				<Title>Top Artists 🎵</Title>
				<Grid3>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
				</Grid3>
				<Title> Recently Liked Songs 🎺 </Title>
				<Grid5>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
				</Grid5>
			</div>
			<div class="col-2">
				
				<Title>Favorite Albums 🎧</Title>
				<Grid3>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>
				</Grid3>
				<Title>Just For You 🎸 </Title>
				<Grid5>
					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>
				</Grid5>
				<Title>More Algorithim goodness.🤖</Title>
				<Grid5>
					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>
					<Img src={placeHolder}></Img>

					<Img src={placeHolder}></Img>
				</Grid5>
			</div>
			
		</Column50>
	);
};

export default Home;
