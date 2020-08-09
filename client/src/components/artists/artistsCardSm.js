import React from 'react'
import {PrimaryButton} from '../layout/Buttons'

 const artistsCardSm = ({artist}) => {

  const {name,imageURL} = artist

    return (
        <div class="wrapper">
 
  
        <div class="artist-card js-artist-card">
       

          <div class="artist-card__img">
              <img src = {imageURL} ></img>
          </div>
          
      
          <div class="artist-card__cnt js-artist-cnt">
            <div class="artist-card__name">{name}</div>
            
           
      
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
                <div class="artist-card-inf__txt"><i className="fa fa-heart fa-2x"></i></div>
              </div>
              <PrimaryButton>Follow </PrimaryButton>
            </div>
      
      
            </div>
      
          </div>
      
      
        </div>
    )
}


export default artistsCardSm