import React,{Fragment,useContext} from 'react'
import AlbumContext from '../../contex/album/AlbumContext'


 const albumsItem = () => {

    const context = useContext(AlbumContext)

    const {albums } = context
    console.log(`contex is`)
    return (
        <Fragment>
           {albums.map(album => (
               <h3>{album.name}</h3>
           ))}


        </Fragment>
    )
}

export default albumsItem