import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AlbumContext from '../../contex/album/AlbumContext'


import ListItem from '../albums/albumsListItem'
import SongsContext from "../../contex/songs/SongsContext";


//   end goal is to display all songs relatged to album in db for each thing
const AlbumsGrid = styled.ul`
display:flex;
align-content:center;
flex-wrap: wrap;
padding:1rem;
`
const SongsGrid = styled.li`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 2rem;
  padding: 0.5rem;


  :nth-child(odd) {
  background: rgb(64,138,191);
}

:nth-child(even) {
  background: #efefef;
}

:last-child{
    border-bottom-right-radius:0.5rem;
    border-bottom-left-radius:0.5rem;
}
`

const Album = styled.ul`
list-style:none;
flex-basis: 20%;
padding:1rem;

    `

const I = styled.i`
  padding: 0.5rem;
  justify-self:center;
`;

const AlbumsList = () => {
    const context = useContext(AlbumContext)
    
    const {albums } = context

    // so take each album grab the id and then ask mr.api to give us info on the databse 


    
    ///depending on score of song it can have the fire icon 
    // if it is over x favs can have a star
    // so on and so forth 
   

return (
    
    
        <Fragment>
            <AlbumsGrid >
          
            {albums.map(album => (
                <Album key = {album.id} >
                  
                    <div class = "album-list--title">
                    {album.name}
                    {' '}
                    {Math.floor(album.avg)}
                    </div>

                <SongsGrid>
                
                <div>
                <h4>Send it Up</h4>
                <h5 style = {{color:'blue'}}>3:31</h5>
                </div>

                <div style = {{alignContent:'center'}}>
                <I style = {{color:'red'}} className="fas fa-fire"></I>          
                <I style = {{color:'orange'}} className="fas fa-trophy"></I>          
                </div>
              
                      </SongsGrid>





                      <SongsGrid>
                
                <div>
                <h4>Blood on the leaves</h4>
                <h5 style = {{color:'blue'}}>2:11</h5>
                </div>

                <div style = {{alignContent:'center'}}>
                <I className="fas fa-fire"></I>          
                <I className="fas fa-trophy"></I>          
                </div>
              
                      </SongsGrid>
                      <SongsGrid>
                
                <div>
                <h4>Bound 2</h4>
                <h5 style = {{color:'blue'}}>4:11</h5>
                </div>

                <div style = {{alignContent:'center'}}>
                <I className="fas fa-fire"></I>          
                <I className="fas fa-trophy"></I>          
                </div>
              
                      </SongsGrid>
                      <SongsGrid>
                
                <div>
                <h4>Im in it</h4>
                <h5 style = {{color:'blue'}}>2:51</h5>
                </div>

                <div style = {{alignContent:'center'}}>
                <I className="fas fa-fire"></I>          
                <I className="fas fa-trophy"></I>          
                </div>
              
                      </SongsGrid> 

                
             </Album>
   
           ))}



           </AlbumsGrid>
        </Fragment>
       

)

};

AlbumsList.propTypes = {
	albums: PropTypes.object.isRequired,
};

export default AlbumsList;
