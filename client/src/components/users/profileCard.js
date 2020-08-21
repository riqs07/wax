import React from "react";
import CardSm from "../albums/albumCardSm";
import styled from "styled-components";
import {Shadows} from '../layout/Palette'


const Grid3 = styled.ul`
	display: grid;
	align-content:center;
	padding: 1rem;
	margin: 1rem;
	grid-template-columns: repeat(3, 1fr);
	box-shadow: ${Shadows.md};
	background: #fff;
	border-radius: 2rem;
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

 const AlbumProfileCard = ({albums} ) => {
	
	
	return (
		<>
	
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