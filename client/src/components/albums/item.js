import React,{Fragment,useContext} from 'react'
import AlbumContext from '../../contex/album/AlbumContext'
import PropTypes from 'prop-types'


// dont forget to send in as a object\

/// working on small grid represntation of album 
// once user clicks on it will go into an in depth artist page 
//  that page will have info joining the two together
// somhow going to need to find a way to get the artist id in here 
 const GridItem = ({album}) => {

    const albumContext = useContext(AlbumContext)

    // destructure the album being passed in
    const { id, name ,artistID ,genre, runtime ,release_year} = album
    const onDelete = () =>{
        // deleteAlbum(id)
    }
    return (


       <div className = 'card bg-light'>
           <h3 className = "text-primary text-left">
               {name}{' '}
               
           </h3>
    <ul>
        {artistID && (
            <li>
                <i className = "fas fa-portrait"></i>{`artist : ${artistID}`}
            </li>
        )}
        {genre && (
            <li>
                <i className = "fas fa-music"></i>{genre}
            </li>
        )}
        {runtime && (
            <li>
                <i className = "fas fa-stopwatch"></i>{runtime}
            </li>
        )}

        {release_year && (
            <li>
                <i className = "fas fa-calender-week"></i>{release_year}
            </li>
        )}
    </ul>
            <button className = 'btn btn-dark btn-sm'> Edit</button>
            <button className = 'btn btn-danger btn-sm'onClick = {onDelete}> Delete</button>
       </div>
    )
}


GridItem.propTypes = {
    album:PropTypes.object.isRequired,
}

export default GridItem