import React,{Fragment , useContext } from 'react'
import AlbumContext from '../../contex/album/AlbumContext'
import GridItem from '../albums/item'
import AlbumForm from '../albums/form'

 const AlbumsGrid = () => {

    const context = useContext(AlbumContext)

    const {albums } = context
    console.log('albums',albums)
    return (

        <Fragment>
            <AlbumForm/>
         {albums.map(album => (
               <GridItem key = {album.id} album = {album}/>
           ))}

        </Fragment>
    )
}

export default AlbumsGrid