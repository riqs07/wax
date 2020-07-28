import React, { Fragment, useContext, useState, useEffect } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import PropTypes from "prop-types";
import styled from "styled-components";

import { AlbumModal } from "./albumModal";
import Backdrop from "../layout/Backdrop";
const I = styled.i`
	padding: 0.5rem;
`;



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

	

	//figure out lazy loading suspense for images && get smaller images :)
	const [modalState, setModal] = useState(false);
	const [hoverState, setHover] = useState(false);

	const manageModal = () => {
		setModal(!modalState);
	};
	const manageHover = () => {
		// setHover(!hoverState);	
	};

	return (
		<div className="album-card">
			{imageURL && (
				<div className="album-card--image">
					<li>
						<img
							onMouseEnter = {manageHover}
							onMouseLeave = {manageHover}
							onClick={manageModal}
							src={imageURL}
							alt="artist image "></img>
					</li>
				</div>
			)}
			{modalState && (
				<Fragment>
					<Backdrop manageModal ={manageModal} />
					<AlbumModal manageModal={manageModal} album={album} />
				</Fragment>
			)}

			<div className="album-card--body">
				<h2>{name}</h2>
				{hoverState &&  
				<h3>{artist}</h3>
				
				
				
				}
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
