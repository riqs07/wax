import React, { useRef, useContext, useState, useEffect } from "react";
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

const Li = styled.li`
	list-style: none;
	flex-basis: 33%;
	padding: 1rem;
	transition: transform 450ms;

	&:hover {
		transform: scale(1.08);
	}
`;


const ArtistGrid = () => {
	const context = useContext(ArtistContext);

	const { 
		artists,
		getAllArtists, 
		filterArtistsByFavs,
		filterArtistsByFollowers,
		filterArtistsByGenre,
		filterArtistsByLikes,
		filterArtistsByRating,
		filterArtistsByScore
	
	
	} = context;

	
	const [filter, setFilter] = useState();
	const firstUpdate = useRef(true);
	
	const options = [
		{ value: "Score", label: "Score" },
		{ value: "Likes", label: "Likes" },
		{ value: "Favs", label: "Favs" },
		{ value: "Avg", label: "Avg Album Rating" },
		{ value: "Followers", label: "Followers" },
		{ value: "Genre", label: "Genre" },
	];
	
	useEffect(() => {
		if (firstUpdate.current){
			getAllArtists()
			firstUpdate.current = false
		} else {
			switch(filter){
				case "Favs":
					filterArtistsByFavs();
					break;

				case "Followers":
					filterArtistsByFollowers();
					break;
				case "Rating":
					filterArtistsByRating();
					break;
			
				case "Score":
					filterArtistsByScore();
					break;
			
				case "Genre":
					filterArtistsByGenre();
					break;
					
					case "Likes":
						filterArtistsByLikes();
						break;
					}
			}
		}, [filter]);
	
		const handleSelect = (e) => {
			setFilter(e.value);
		};

	return (
		<>
			<Select
				onChange={handleSelect}
			options={options}
			placeholder={"Filter Artists by...."}
			/>

			<Grid>
				{artists.map((artist) => (
					<Li key={artist.id}>
						<Card artist={artist} />
					</Li>
				))}
			</Grid>
		</>
	);
};

export default ArtistGrid;
