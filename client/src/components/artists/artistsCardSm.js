import React,{Fragment,useState} from 'react'
import {PrimaryButton,SecondaryButton,} from '../layout/Buttons'
import Backdrop from '../layout/Backdrop'
import {convertArtistScoreToGrade} from '../../utils/algo'
import Modal from '../artists/artistsModal'

 const ArtistsCardSm = ({artist}) => {

  const {name,imageURL,score,followers,fav_total,like_total} = artist

  // until i break DB down again its thinking these are stirngs
  // mauybe al;so add imageURL to that table so i can acess it easier even tho that is not the best practise fir sql table s
  let interactions = fav_total + like_total
  const [modalState, setModal] = useState(false);

	const manageModal = () => {
		setModal(!modalState);
	};

    return (
      <>
        <div class="wrapper">
  
        <div class="artist-card js-artist-card">
 

          <div class="artist-card__img">
              <img alt = "artist-image" src = {imageURL} onClick={manageModal}></img>
          </div>
          
      
          <div class="artist-card__cnt js-artist-cnt">
            <div class="artist-card__name">{name}</div>
            
           
      
            <div class="artist-card-inf">
              <div class="artist-card-inf__item">
                <div class="artist-card-inf__title">{followers}</div>
                <div class="artist-card-inf__txt"><i className="fas fa-users fa-2x"></i></div>
              </div>
      
              
      
              <div class="artist-card-inf__item">
                <div class="artist-card-inf__title">{convertArtistScoreToGrade(score)}</div>
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
        {modalState && (
          <>
            <Backdrop manageModal={manageModal} />
            <Modal  />
          </>
        )}
        </>
    )
}


export default ArtistsCardSm