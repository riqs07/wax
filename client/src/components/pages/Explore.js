import React,{Fragment,useContext} from 'react'
import Form from "../albums/albumAddForm"
import ArtistContext from "../../contex/artists/ArtistContext"
import {Column50} from '../layout/Grids'


 const Explore = () => {

    const context = useContext(ArtistContext)
    const {artists} = context


    let rand = Math.floor(Math.random() * artists.length);
    const {name,imageURL} = artists[1]
    return (
        <Fragment>
         <Column50>
             <img src = {imageURL}></img>
             <h1>Explore the wonderful world of Music. Join Today!</h1>
         </Column50>


        </Fragment>
        
    )
}

export default Explore