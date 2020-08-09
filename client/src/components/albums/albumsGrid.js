import React,{Fragment , useContext ,useState,useEffect} from 'react'
import AlbumContext from '../../contex/album/AlbumContext'
import CardSm from './albumCardSm'


import Filter from './albumsList.js'

import styled from 'styled-components'



const Grid = styled.ul`
display:flex;
align-content:center;
flex-wrap: wrap;
padding:1rem;
`

const Li = styled.li`
list-style:none;
flex-basis: 12%;
padding:1rem;
    `


 const AlbumsGrid = () => {

    const context = useContext(AlbumContext)

    const {albums } = context

    const [selectedAlbum,setSelectedAlbum] = useState()

    const onClick = (e) =>{
      // pass in currnet state so it is a togglel 
      console.log('e.target', e.target.id)
      setSelectedAlbum(e.target.id)
    }
 

  // use effect on filter component 
  // FILTER BY
  // TOP RATED
  // USER LIKED 
  // USER FAV 
  // GENRE
  // RUNTIME 
  // need to get api query params working for that

      return (

        <Fragment>
         
            <Grid>
           
            {albums.map(album => (
              <Li key = {album.id}  >
               <CardSm album = {album} />
               
             </Li>
   
           ))}



           </Grid>
        </Fragment>
    )
}

export default AlbumsGrid