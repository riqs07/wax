import React, { useState, useContext } from "react";
import styled from "styled-components";
import AlbumContext from "../../contex/album/AlbumContext";
import { PrimaryButton } from "../layout/Buttons";
import Form from "../layout/Forms";

const AlbumRating = ({ album }) => {
	const { name, id } = album;
	const [rating, setRating] = useState(0);
	const albumContext = useContext(AlbumContext);

	const onSubmit = (e) => {
		e.preventDefault();
		if (rating) {
			albumContext.addAlbumRating({
				albumID: id,
				rating,
			});
		}
	};

	return (
		<Form onSubmit={onSubmit}>
			<h1 style={{ paddingBottom: "1rem" }}>
				{" "}
				Rating for <span style={{ color: "#1849a2" }}>{name}</span>🏁
			</h1>
			<input
				onChange={(e) => setRating(e.target.value)}
				type="number"
				max="100"
				min="0"></input>
			<PrimaryButton>Submit</PrimaryButton>
		</Form>
	);
};

export default AlbumRating;
