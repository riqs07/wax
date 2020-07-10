import React,{Fragment , useContext } from 'react'
import AlbumContext from '../../contex/album/AlbumContext'


 const AlbumsGrid = () => {

    const context = useContext(AlbumContext)

    const {albums } = context
    console.log('albums',albums)
    return (
        <Fragment>
         

        </Fragment>
    )
}

export default AlbumsGrid