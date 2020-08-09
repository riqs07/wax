import React,{Fragment , useContext ,useState,useEffect} from 'react'
import ArtistContext from '../../contex/artists/ArtistContext'

import Card from '../artists/artistsCardSm'
import TopRankCard from '../artists/artistTopCard'
import styled from 'styled-components'



const Grid = styled.ul`
display:flex;
align-content:center;
overflow-x:scroll;
overflow-y:hidden;

`
const TopRankGrid = styled.ul`
display:flex;
align-content:center;
padding:1rem;


`

const Li = styled.li`
list-style:none;
padding:1rem;
transition: transform 450ms;

&:hover{ 
    transform:scale(1.08);
}


    `


 const ArtistGrid = () => {
    // default sort by ratings 
    const context = useContext(ArtistContext)

    const {artists } = context


  
    let top = artists.shift()
    let two = artists.shift()
    let three = artists.shift()
    console.log(top,two)
    console.log(artists)

      return (

        <Fragment>
          <TopRankGrid>

           <TopRankCard artist = {top}/>
           <TopRankCard artist = {two}/>
           <TopRankCard artist = {three}/>
          </TopRankGrid>
            
            
            
            <Grid>
         

            {artists.map(artist => (
              <Li key = {artist.id}  >
               <Card artist = {artist} />
               
             </Li>
                
           ))}



           </Grid>
    
        </Fragment>
    )
}

export default ArtistGrid