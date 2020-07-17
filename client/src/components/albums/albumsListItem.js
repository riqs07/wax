

import React, { Fragment, useContext,useState, } from "react";
import AlbumContext from "../../contex/album/AlbumContext";
import SongsContext from "../../contex/songs/SongsContext";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from 'axios';

const I = styled.i`
	padding: 0.5rem;
`;


const GridItem = ({ songs }) => {
	const albumContext = useContext(AlbumContext);
    

	// destructure the album being passed in

	

	// convert seconds to mins
	// const secs = Math.floor(runtime / 60);
	// const rating = Math.floor(avg)

	//figure out lazy loading suspense for images && get smaller images :)

	// get join table data to bring this in as well as artist name
	
	// hard coded url for now
    
    
    


	return (
            <Fragment>
                
      
            </Fragment>
        
	);
};

GridItem.propTypes = {
	album: PropTypes.object.isRequired,
};

export default GridItem;
