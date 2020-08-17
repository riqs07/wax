import React from 'react'
import {PrimaryButton,SecondaryButton} from '../layout/Buttons'

const artistTopCard = ({artist}) => {
  const {name,imageURL,score,followers,album_fav_total,album_like_total} = artist

  let interactions = album_fav_total + album_like_total  

    return (
        <div class="wrapper">
 
  
        <div class="artist-card js-artist-card">
       

          <div class="artist-card__img">
              <img src = {imageURL} ></img>
          </div>
          
      
          <div class="artist-card__cnt js-artist-cnt">
            <div class="artist-card__name">{name}</div>
            
            <div class="ribbon ribbon-top-left">
             <span>🏆</span>
                  </div>
      
            <div class="artist-card-inf">
              <div class="artist-card-inf__item">
                <div class="artist-card-inf__title">{followers}</div>
                <div class="artist-card-inf__txt"><i className="fas fa-users fa-2x"></i></div>
              </div>
      
              
      
              <div class="artist-card-inf__item">
                <div class="artist-card-inf__title">{score}</div>
                <div class="artist-card-inf__txt"><i className="fas fa-flag-checkered fa-2x"></i></div>
              </div>
      
              <div class="artist-card-inf__item">
                <div class="artist-card-inf__title">{'123'}</div>
                <div class="artist-card-inf__txt"><i className="fa fa-heart fa-2x"></i></div>
              </div>
              <PrimaryButton>Follow </PrimaryButton>
              <SecondaryButton><i class="fas fa-info-circle"></i></SecondaryButton>

            </div>
      
      
            </div>
           
      
          </div>
      
        
      
        </div>
      
     
	);
}

export default artistTopCard