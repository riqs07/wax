import React, { useState } from "react";
import styled from "styled-components";
import { Row50 } from "../layout/Grids";
import Select from "react-select";
import AlbumContext from "../../contex/album/AlbumContext";

const Form = styled.form`
	background: #fff;
	border: 2px solid black;
	border-radius: 2rem;
	padding: 1rem;
	margin: 1rem;
`;

const Submit = styled.button`
	padding: 0.8rem 1rem;
	margin: 1rem;
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background-color: blue;
	border-radius: 0.8rem;
	color: black;
`;

const ReviewTextArea = styled.textarea`
	background: #fff;
	color: black;
`;

// async fetch to backend for all albums
// or pull in from context not sure 100%
// value will be id
const options = [
	{ value: "1", label: "Yeezus" },
	{ value: "2", label: "ye" },
	{ value: "3", label: "MBDTF" },
];

const ReviewForm = () => {
    // Form should be created on button click 
    // then dismiss itself after the form has submitted 
    
	const albumContext = AlbumContext;

	const [review, setReview] = useState();
	const [albumID, setAlbum] = useState();

	const onChange = (e) => setReview(e.target.value);
	const onSubmit = (e) => {
        e.preventDefault();
        // on Form submit send request to backedn with body info

		albumContext.addAlbumReview(review);
	};


	return (
		<Form onSubmit={onSubmit}>
			<h1>Leave a Review 📜</h1>
			<Select
				onChange={(e) => setAlbum(e.value)}
				placeholder="Select an Album"
				options={options}
			/>
			<ReviewTextArea onChange={onChange}></ReviewTextArea>
			<Submit>Submit</Submit>
		</Form>
	);
};

export default ReviewForm;
