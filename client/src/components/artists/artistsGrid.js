import React,{Fragment , useContext ,useState,useEffect} from 'react'
import ArtistContext from '../../contex/artists/ArtistContext'

import Card from '../artists/artistsCardSm'
import TopRankCard from '../artists/artistTopCard'
import styled from 'styled-components'
import {SecondaryButton} from './../layout/Buttons'
import Colors from './../layout/Colors'



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

const Filter = styled.ul`
display:flex;
border:2px solid ${Colors.primary};
border-Radius:20px;
justify-content:center;
`
 const ArtistGrid = () => {
    // default sort by ratings 
    const context = useContext(ArtistContext)

    const {artists } = context


  
    let top = artists[0]
    let two = artists[1]
    let three = artists[2]
  
    const [filter,setFilter] = useState('Rating')
    const options = ['Score','Likes','Favs','Followers']


    useEffect(() => {
      console.log(`Fetch ${filter}`)
    }, [filter])

      return (

        <Fragment>
               <Filter >
        {options.map((option) => (
            <li key={option}>
                <SecondaryButton
                    
                    style={option === filter ? { color: 'rgb(187,46,31)' } : null}
                    onClick={() => setFilter(option)}>
                    {option}
                </SecondaryButton>
            </li>
        ))}
    </Filter>
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