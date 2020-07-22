import React, { useState ,useContext} from "react";
import styled from "styled-components";
import AlbumContext from "../../contex/album/AlbumContext";
import {PrimaryButton} from "../layout/Buttons";

const Form = styled.form`
	background: #fff;
	border: 2px solid black;
	border-radius: 2rem;
	padding: 1rem;
	margin: 1rem;
`;

const ReviewTextArea = styled.textarea`
	background: #fff;
	color: black;
`;



const ReviewForm = ({album}) => {
    // Form should be created on button click 
    // then dismiss itself after the form has submitted 
    
	const albumContext = useContext(AlbumContext);
	const {id ,name} = album

	const [review, setReview] = useState();

	const onChange = (e) => setReview(e.target.value);

	const onSubmit = (e) => {
        e.preventDefault();
       
		if(review){
		albumContext.addAlbumReview({
			albumID:id,
			review
		});
	}
		// trigger animatino or something
	};


	
	return (
		<Form onSubmit={onSubmit}>
			<h1 style ={{paddingBottom:'1rem'}}> Review for <span style = {{color:'#1849a2'}}>{name}</span>📜</h1>
			
			<ReviewTextArea onChange={onChange}></ReviewTextArea>
			<PrimaryButton>Submit</PrimaryButton>
			
		</Form>
	);
};

export default ReviewForm;
