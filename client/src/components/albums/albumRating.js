import React, { useState, useContext } from "react";
import styled from "styled-components";
import AlbumContext from "../../contex/album/AlbumContext";
import AlertContext from "../../contex/alert/AlertContext";

import { PrimaryButton } from "../layout/Buttons";
import Form from "../layout/Forms";
import { Colors } from "../layout/Palette";

const AlbumRating = ({ album, manageRating, previousRating }) => {
	const albumContext = useContext(AlbumContext);
	const alertContext = useContext(AlertContext);

	const { name, albumID } = album;
	const [rating, setRating] = useState(0);

	const { addAlbumRating, updateAlbumRating } = albumContext;

	const onSubmit = (e) => {
		e.preventDefault();

		if (previousRating) {
			updateAlbumRating({ albumID, rating });
		} else {
			addAlbumRating({ albumID, rating });
		}

		manageRating();
		alertContext.setAlert("rating Added", "sucess");
		// set alert needs to trigger inside of modal
	};

	return (
		<Form onSubmit={onSubmit}>
			<h1 style={{ paddingBottom: "1rem" }}>
				{" "}
				Rating for <span style={{ color: Colors.primary }}>{name}</span>🏁
			</h1>
			<input
				onChange={(e) => setRating(e.target.value)}
				type="number"
				max="100"
				min="0"
				defaultValue={previousRating}
				required></input>
			<PrimaryButton>Submit</PrimaryButton>
		</Form>
	);
};

export default AlbumRating;
