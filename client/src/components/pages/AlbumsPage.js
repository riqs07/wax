import React from 'react'
import AlbumsGrid from '../albums/grid'
import CardMd from '../albums/albumsCardMd'
import CardSm from '../albums/item'

 const AlbumsPage = () => {
  
    return (
        <div className ="grid 2">
        <div>
            <CardMd/>
            <AlbumsGrid/>
        </div>
    </div>
    )
}



export default AlbumsPage