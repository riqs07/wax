import React, { Fragment, useContext, useState, useEffect } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import CardSm from "./albumCardSm";
import { SecondaryButton } from "./../layout/Buttons";
import Colors from "./../layout/Colors";
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
	} = context;

	const [filter, setFilter] = useState("Rating");
	const options = [
		{ value: "Score", label: "Score" },
		{ value: "Likes", label: "Likes" },
		{ value: "Favs", label: "Favs" },
		{ value: "Rating", label: "Rating" },
		{ value: "Runtime", label: "Runtime" },
		{ value: "Date", label: "Release Date" },
	];

	useEffect(() => {
		getAlbums();
	}, []);

	return (
		<>
			<Select options={options} />

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
