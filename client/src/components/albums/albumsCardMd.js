import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AlbumContext from "../../contex/album/AlbumContext";


const I = styled.i`
	padding: 0.5rem;
`;

// dont forget to send in as aobject\

/// working on small grid represntation of album
// once user clicks on it will go into an in depth artist page
//  that page will have info joining the two together
// somhow going to need to find a way to get the artist id in here
const cardMd = ({ album }) => {


    // not taking in props


	return (
        <div class="wrapper">

  
        <div class="artist-card js-artist-card">
       

          <div class="artist-card__img">
              <img src = {"https://waxhades123.s3.us-east-2.amazonaws.com/after_hours.jpg"} ></img>
          </div>
          
      
          <div class="artist-card__cnt js-artist-cnt">
            <div class="artist-card__name">{'The Weekend'}</div>
            
            <div class="ribbon ribbon-top-left">
             <span>🏆</span>
                  </div>
      
            <div class="artist-card-inf">
              <div class="artist-card-inf__item">
                <div class="artist-card-inf__title">{'130'}</div>
                <div class="artist-card-inf__txt"><i className="fas fa-users fa-2x"></i></div>
              </div>
      
              
      
              <div class="artist-card-inf__item">
                <div class="artist-card-inf__title">{'1200'}</div>
                <div class="artist-card-inf__txt"><i className="fas fa-flag-checkered fa-2x"></i></div>
              </div>
      
              <div class="artist-card-inf__item">
                <div class="artist-card-inf__title">{'290'}</div>
                <div class="artist-card-inf__txt"><i className="fa fa-thumbs-up fa-2x"></i></div>
              </div>
            </div>
      
        
      
            </div>
      
           
          </div>
      
        
      
        </div>
      
     
	);
};

cardMd.propTypes = {
	album: PropTypes.object.isRequired,
};

export default cardMd;
