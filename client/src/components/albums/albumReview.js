import React, { useState ,useContext} from "react";
import styled from "styled-components";
import AlbumContext from "../../contex/album/AlbumContext";
import AlertContext from "../../contex/alert/AlertContext";
import {PrimaryButton} from "../layout/Buttons";
import Form from '../layout/Forms'
import Colors from '../layout/Colors'



const ReviewTextArea = styled.textarea`
	background: #fff;
	color: black;
`;

	

const ReviewForm = ({album,manageReview}) => {
        
	const albumContext = useContext(AlbumContext);
	const alertContext = useContext(AlertContext);

	const {albumID ,name} = album

	const [review, setReview] = useState();

	const onChange = (e) => setReview(e.target.value);

	const onSubmit = async (e) => {
        e.preventDefault();
       
		if(review){
		albumContext.addAlbumReview({
			albumID,
			review
		});


		alertContext.setAlert('Review Added','sucess')
		manageReview()
		// set alert needs to trigger inside of modal

	} else {
		
	}
	};


	
	return (
		<Form onSubmit={onSubmit}>
			<h1 style ={{paddingBottom:'1rem'}}> Review for <span style = {{color:Colors.primary}}>{name}</span>📜</h1>
			
			<ReviewTextArea required onChange={onChange}></ReviewTextArea>
			<PrimaryButton>Submit</PrimaryButton>
			
		</Form>
	);
};

export default ReviewForm;
