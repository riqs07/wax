import React,{Fragment , useContext } from 'react'
import AlbumContext from '../../contex/album/AlbumContext'
import CardSm from '../albums/item'

import AlbumForm from '../albums/form'
import Filter from '../albums/albumsFilter'

import styled from 'styled-components'


const Grid = styled.ul`
display:flex;
align-content:center;
flex-wrap: wrap;
padding;1rem;
`

const Li = styled.li`
list-style:none;
flex-basis: 20%;
padding:1rem;
    `


 const AlbumsGrid = () => {

    const context = useContext(AlbumContext)

    const {albums } = context
    return (

        <Fragment>
            <Grid>

            {albums.map(album => (
              <Li key = {album.id} >
               <CardSm album = {album}/>
             </Li>
   
           ))}



           </Grid>
        </Fragment>
    )
}

export default AlbumsGrid