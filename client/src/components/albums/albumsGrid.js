import React, { useContext, useState, useEffect,useRef } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import CardSm from "./albumCardSm";
import { Colors } from "./../layout/Palette";
import Spinner from "./../layout/Spinner";
import Select from "react-select";

import styled from "styled-components";

const Grid = styled.ul`
	display: flex;
	align-content: center;
	flex-wrap: wrap;
	padding: 1rem;
`;
const Filter = styled.ul`
	display: flex;
	border: 2px solid ${Colors.primary};
	border-radius: 20px;
	justify-content: center;
`;

const Li = styled.li`
	list-style: none;
	flex-basis: 20%;
	padding: 1rem;
`;

const AlbumsGrid = () => {
	const context = useContext(AlbumContext);

	const {
		albums,
		getAlbums,
		loading,
		filterAlbumsByRating,
		filterAlbumsByLikes,
		filterAlbumsByFavs,
		filterAlbumsByRuntime,
		filterAlbumsByRelease,
		filterAlbumsByScore,
		filterAlbumsByGenre,
	} = context;

	const [filter, setFilter] = useState("Rating");
	const firstUpdate = useRef(true);


	const options = [
		{ value: "Score", label: "Score" },
		{ value: "Likes", label: "Likes" },
		{ value: "Favs", label: "Favs" },
		{ value: "Rating", label: "Rating" },
		{ value: "Runtime", label: "Runtime" },
		{ value: "Release", label: "Release Date" },
		{ value: "Genre", label: "Genre" },
	];

	
	useEffect(() => {
		if (firstUpdate.current){
			getAlbums()
			firstUpdate.current = false
		} else {
			switch(filter){
				case "Favs":
					filterAlbumsByFavs();
					break;

				case "Likes":
					filterAlbumsByLikes();
					break;
				case "Rating":
					filterAlbumsByRating();
					break;
				case "Runtime":
					filterAlbumsByRuntime();
					break;
				case "Score":
					filterAlbumsByScore();
					break;
				case "Release":
					filterAlbumsByRelease();
					break;
				case "Genre":
					filterAlbumsByGenre();
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
				placeholder={"Filter Albums by...."}
			/>

			{albums !== null && !loading ? (
				<Grid>
					{albums.map((album) => (
						<Li key={album.id}>
							<CardSm album={album} />
						</Li>
					))}
				</Grid>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default AlbumsGrid;
