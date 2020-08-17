import React, { Fragment, useContext, useState, useEffect } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import PropTypes from "prop-types";
import styled from "styled-components";

import { AlbumModal } from "./albumModal";
import Backdrop from "../layout/Backdrop";
import Spinner from "../layout/Spinner";

import {calculateAlbumScore} from "../../utils/algo"


const I = styled.i`
	padding: 0.5rem;
`;

// Play around with shadows the one on info card needs to bigger
const Image = styled.img`
	border-radius: 2rem;
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	transition: transform 450ms;
	&:hover{ 
		transform:scale(1.08);
		opacity:0.8
}
`;
const Stats = styled.ul`
display:flex;
justify-content:space-around;

`
const Body = styled.div`
	background-color: #eee;
	border-radius: 1rem;
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	padding:.5rem;
`;


const Wrapper = styled.div`
	margin-top: -4rem;
	padding: 0 1rem;
	position: relative;
`;



const GridItem = ({ album }) => {
	const albumContext = useContext(AlbumContext);

	const {
		albumID,
		name,
		artistID,
		genre,
		runtime,
		release_year,
		imageURL,
		artist,
		likes,
		favs,
		avg,
		score
	} = album;







	const [modalState, setModal] = useState(false);
	const [loading,setLoading] = useState(true)

	const manageModal = () => {
		setModal(!modalState);
	};

// Want image to have loading spinner 
// cant set loading to true if it never loads lol
	return (
		<>
{loading && (
	<Spinner/>

) }


<Image
				
				onLoad={() =>setLoading(false)}
				onClick={manageModal}
				src={imageURL}
				alt="Album image "></Image>
			
			<Wrapper>
				
				<Body>
					<h2>{name}</h2>
					<Stats>
						
							<li>
								<I
									className="fas fa fa-star fa-2x"
									style={{ color: "orange" }}></I>
									{favs}
							</li>
						
					
							<li>
								{likes}
								<I className="fa fa-heart fa-2x" style={{ color: "red" }}></I>
							</li>
						
					</Stats>
				</Body>
			</Wrapper>
			{modalState && (
				<Fragment>
					<Backdrop manageModal={manageModal} />
					<AlbumModal manageModal={manageModal} album={album} />
				</Fragment>
			)}
		
		</>
	);
};

GridItem.propTypes = {
	album: PropTypes.object.isRequired,
};

export default GridItem;
