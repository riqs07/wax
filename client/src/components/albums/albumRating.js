import React, { useState, useContext } from "react";
import styled from "styled-components";
import AlbumContext from "../../contex/album/AlbumContext";
import { PrimaryButton } from "../layout/Buttons";
import Form from "../layout/Forms";
import Colors from '../layout/Colors'


const AlbumRating = ({ album ,manageRating}) => {
	const { name, albumID } = album;
	const [rating, setRating] = useState(0);
	const albumContext = useContext(AlbumContext);


	const onSubmit = (e) => {
		e.preventDefault();
		if (rating) {
			albumContext.addAlbumRating({
				albumID,
				rating,
			});

			
		manageRating()
		// set alert needs to trigger inside of modal

		}
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
				required></input>
			<PrimaryButton>Submit</PrimaryButton>
		</Form>
	);
};

export default AlbumRating;
