import React, { useContext, useState, useEffect } from "react";
import CardSm from "../albums/albumCardSm";
import styled from "styled-components";
import artistTopCard from "../artists/artistTopCard";


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

const Img = styled.img`
	border-radius: 2rem;
	transition: transform 450ms;
	&:hover {
		transform: scale(1.08);
		opacity: 0.8;
	}

	grid-template-columns: 1fr;
	padding: 1rem;
	position: relative;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	margin: 1rem;
`;
const Li = styled.li`
	list-style: none;
	flex-basis: 20%;
	padding: 1rem;
`;

 const AlbumProfileCard = ({ title, albums }) => {
	
	
	return (
		<>
	
			<Title>{title}</Title>
            <Grid3>
					{albums.map((album) => (
						<Li>
							<CardSm album={album} />
						</Li>
					))}
				</Grid3>
			
		</>
	);
};

export default AlbumProfileCard