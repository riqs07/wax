import React, { Fragment, useContext,useState,useEffect } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import PropTypes from "prop-types";
import styled from "styled-components";
import LazyLoad from 'react-lazyload';
import Hover from '../utils/onHover'

const I = styled.i`
	padding: 0.5rem;
`;

// dont forget to send in as a object\

/// working on small grid represntation of album
// once user clicks on it will go into an in depth artist page
//  that page will have info joining the two together
// somhow going to need to find a way to get the artist id in here



//medium card not working and card select is wonky
const GridItem = ({ album }) => {
	const albumContext = useContext(AlbumContext);

	

	// destructure the album being passed in
	const { id, name, artistID, genre, runtime, release_year, imageURL ,artist,likes,favs, avg} = album;

	
	// show medium card
    const onClick = (e) =>{
		console.log(imageURL)
	}
	

	// convert seconds to mins
	const secs = Math.floor(runtime / 60);
	const rating = Math.floor(avg)

	//figure out lazy loading suspense for images && get smaller images :)

	// get join table data to bring this in as well as artist name
	
	
	// hard coded url for now
	const image_url2 =
		"https://waxhades123.s3.us-east-2.amazonaws.com/after_hours.jpg";

	const onDelete = () => {
		// deleteAlbum(id)
	};
	return (
		<div className="album-card bg-light" onClick = {onClick} >

		
			{imageURL && (
				<div className="album-card--image">
					
					<li>

						<img src={image_url2} alt="artist image "></img>
					</li>
				</div>
			)}

			<div className="album-card--body">
						<h2>{name}</h2>
						<h3>{artist}</h3>
					<ul className="album-card--stats">
                    {genre && (
						<li className ="album-card--stat">
							<I className="fas fa-music"></I>
							{genre}
						</li>
					)}
				
{/* 
					{release_year && (
						<li className ="album-card--stat">
							<I className="fas fa-calender-week"></I>
							{release_year}
						</li>
					)} */}
						{avg && (
							<li className =  "album-card--stat">
								<I className="fas fa-flag-checkered " style={{ color: "black" }}></I>
                                
								{rating}
							</li>
						)}
						{favs && (
							<li className = "album-card--stat" >
								<I className="fas fa fa-star" style={{ color: "orange" }}></I>
								{favs}
							</li>
						)}
						{likes && (
							<li className = "album-card--stat" >
								<I className="fa fa-heart"></I>
								{likes}
							</li>
						)}
                        	{runtime && (
						<li className = "album-card--stat" >
							<I className="fas fa-stopwatch "style={{ color: "black" }}></I>
							{`${secs}m`}
						</li>
					)}
					</ul>
				
			</div>
			{/* <button className="btn btn-dark btn-sm">
				<i className="fas fa-info-circle fa-2x"></i>{" "}
			</button>
			<button className="btn btn-dark btn-sm">
				<i className="fas fa-pencil-alt fa-2x"></i>
			</button>
			<button className="btn btn-dark btn-sm">
				<i className="fas fa-user fa-2x"></i>
			</button>
			<button className="btn btn-danger btn-sm" onClick={onDelete}>
				{" "}
				<i className="fa fa-times fa-2x"></i>
			</button> */}
		</div>
	);
};

GridItem.propTypes = {
	album: PropTypes.object.isRequired,
};

export default GridItem;
