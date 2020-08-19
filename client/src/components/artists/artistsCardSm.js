import React from 'react'
import {PrimaryButton,SecondaryButton,} from '../layout/Buttons'

 const artistsCardSm = ({artist}) => {

  const {name,imageURL,score,followers,album_fav_total,album_like_total} = artist

  // until i break DB down again its thinking these are stirngs
  // take song stats out og scoring algo so that all of them can have aa socre
  // mauybe al;so add imageURL to that table so i can acess it easier even tho that is not the best practise fir sql table s
  let interactions = album_fav_total + album_like_total

    return (
        <div class="wrapper">
 
  
        <div class="artist-card js-artist-card">
       

          <div class="artist-card__img">
              <img alt = "artist-image" src = {imageURL} onClick = {()=> console.log(artist)}></img>
          </div>
          
      
          <div class="artist-card__cnt js-artist-cnt">
            <div class="artist-card__name">{name}</div>
            
           
      
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
                <div class="artist-card-inf__title">{interactions}</div>
                <div class="artist-card-inf__txt"><i className="fa fa-heart fa-2x"></i></div>
              </div>
              
            </div>
      
      
            </div>
      
          </div>
      
      
        </div>
    )
}


export default artistsCardSm