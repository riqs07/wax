import React,{Fragment , useContext } from 'react'
import AlbumContext from '../../contex/album/AlbumContext'
import AlbumItem from '../albums/item'
import AlbumForm from '../albums/form'
import Filter from '../albums/albumsFilter'

import styled from 'styled-components'



const Grid = styled.ul`
display:flex;
align-content:center;
flex-wrap: wrap;
`

const Li = styled.li`
list-style:none;
flex-basis: 15%;
padding:1rem;
    `


 const AlbumsGrid = () => {

    const context = useContext(AlbumContext)

    const {albums } = context
    console.log('albums',albums)
    return (

        <Fragment>
            <Grid>

         {albums.map(album => (
             <Li key = {album.id} >
               <AlbumItem album = {album}/>
             </Li>
           ))}

           </Grid>
        </Fragment>
    )
}

export default AlbumsGrid