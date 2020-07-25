import React, { Fragment, useContext, useState, useEffect } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import PropTypes from "prop-types";
import styled from "styled-components";

import { AlbumModal } from "./albumModal";
import Backdrop from "../layout/Backdrop";
const I = styled.i`
	padding: 0.5rem;
`;


const AlbumCard = styled.div`
 border: #ccc 1px dotted;
  border-radius: 5px;
  margin: 0.7rem 0;
  box-shadow: 0px 8px 60px -10px rgba(13,28,39,0.6);
  transition: 0.3s;

  &--title{
    font-size: 1.75rem;
    color: $blue-d1;
    font-family: fira-sans,sans-serif;
    
}
  &--body{
    font-size: 1rem;
    color: $blue-d2;
   
}
  &--stats{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;

}

&--stat{
  color: $blue-d2;
 align-items: center;
 justify-content: center;
 font-size: 1rem;
}

&--image{
 
 :hover {
  opacity: 0.8;
}

}
`
// dont forget to send in as a object\

/// working on small grid represntation of album
// once user clicks on it will go into an in depth artist page
//  that page will have info joining the two together
// somhow going to need to find a way to get the artist id in here

const GridItem = ({ album }) => {
	const albumContext = useContext(AlbumContext);

	const {
		id,
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
	} = album;

	// show modal

	// convert seconds to mins
	const secs = Math.floor(runtime / 60);
	const rating = Math.floor(avg);

	//figure out lazy loading suspense for images && get smaller images :)
	const [modalState, setModal] = useState(false);
	const [hoverState, setHover] = useState(false);

	const manageModal = () => {
		setModal(!modalState);
	};
	const manageHover = () => {
		setHover(!hoverState);
	};

	// hard coded url for now
	const image_url2 = "https://waxhades123.s3.us-east-2.amazonaws.com/ye.webp";

	const onDelete = () => {
		// deleteAlbum(id)
	};
	return (
		<div className="album-card bg-light">
			{imageURL && (
				<div className="album-card--image">
					<li>
						<img
							onMouseEnter = {manageHover}
							onMouseLeave = {manageHover}
							onClick={manageModal}
							src={image_url2}
							alt="artist image "></img>
					</li>
				</div>
			)}
			{modalState && (
				<Fragment>
					<Backdrop />
					<AlbumModal onCancel={manageModal} album={album} />
				</Fragment>
			)}

			<div className="album-card--body">
				<h2>{name}</h2>
				{hoverState &&  <h3>{artist}</h3>}
				<ul className="album-card--stats">
				
					{favs && (
						<li className="album-card--stat">
							<I
								className="fas fa fa-star fa-2x"
								style={{ color: "orange" }}></I>
							{favs}
						</li>
					)}
					{likes && (
						<li className="album-card--stat">
							<I className="fa fa-heart fa-2x" style={{ color: "red" }}></I>
							{likes}
						</li>
					)}
					
				</ul>
			</div>
		</div>
	);
};

GridItem.propTypes = {
	album: PropTypes.object.isRequired,
};

export default GridItem;
