import React, { Fragment, useContext, useState, useEffect } from "react";
import ArtistContext from "../../contex/artists/ArtistContext";

import Card from "../artists/artistsCardSm";
import styled from "styled-components";
import { SecondaryButton } from "./../layout/Buttons";
import { Colors } from "./../layout/Palette";
import Select from "react-select";


const Grid = styled.ul`
	display: flex;
	align-content: center;
	flex-wrap: wrap;
	padding: 1rem;
`;
const TopRankGrid = styled.ul`
	display: flex;
	align-content: center;
	padding: 1rem;
`;

const Li = styled.li`
	list-style: none;
	flex-basis: 33%;
	padding: 1rem;
	transition: transform 450ms;

	&:hover {
		transform: scale(1.08);
	}
`;

const Filter = styled.ul`
	display: flex;
	flex-wrap: wrap;
	border: 2px solid ${Colors.primary};
	border-radius: 20px;
	justify-content: center;
`;
const ArtistGrid = () => {
	const context = useContext(ArtistContext);

	const { getAllArtists, artists } = context;

	useEffect(() => {
		getAllArtists();
	}, []);

	const [filter, setFilter] = useState("Rating");
	const options = [
		{ value: "Score", label: "Score" },
		{ value: "Likes", label: "Likes" },
		{ value: "Favs", label: "Favs" },
		{ value: "Followers", label: "Followers" },
	];

	useEffect(() => {
		console.log(`Fetch ${filter}`);
	}, [filter]);

	return (
		<Fragment>
			<Select options={options} />

			<Grid>
				{artists.map((artist) => (
					<Li key={artist.id}>
						<Card artist={artist} />
					</Li>
				))}
			</Grid>
		</Fragment>
	);
};

export default ArtistGrid;
