import React,{Fragment , useContext ,useState,useEffect} from 'react'
import AlbumContext from '../../contex/album/AlbumContext'
import CardSm from './albumCardSm'
import CardMd from './albumCardMd'


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
flex-basis: 20%;
padding:1rem;
    `


 const AlbumsGrid = () => {

    const context = useContext(AlbumContext)

    const {albums } = context

    const [selected,setSelected] = useState()

    useEffect(() => {
      console.log(`open modal ${selected}`)
  }, [selected])
  

      return (

        <Fragment>
         
            <Grid>
            {selected && (
             <CardSm album = {albums[selected]} />
          )}
            {albums.map(album => (
              <Li key = {album.id} onClick = {() =>setSelected(album.id)}>
               <CardSm album = {album} />
             </Li>
   
           ))}



           </Grid>
        </Fragment>
    )
}

export default AlbumsGrid