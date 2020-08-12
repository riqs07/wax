import React,{Fragment , useContext ,useState,useEffect} from 'react'
import AlbumContext from '../../contex/album/AlbumContext'
import CardSm from './albumCardSm'
import {SecondaryButton} from './../layout/Buttons'
import Colors from './../layout/Colors'


import styled from 'styled-components'


const Grid = styled.ul`
display:flex;
align-content:center;
flex-wrap: wrap;
padding:1rem;

`
const Filter = styled.ul`
display:flex;
border:2px solid ${Colors.primary};
border-Radius:20px;
justify-content:center;
`

const Li = styled.li`
list-style:none;
flex-basis: 12%;
padding:1rem;
    `

    // Want to make filter its own component 
    // reason i havent is because grid needs to be aware of whats going on 
    // but i want the currently selected filter to have a diff color 
    // and it dosent work how i want it to 
    // @issue 
  // filter should take in options and then build dynamically fron there
 const AlbumsGrid = () => {

 
    const context = useContext(AlbumContext)

    const {albums } = context

    const [filter,setFilter] = useState('Rating')
    const options = ['Rating','Likes','Favs','Genre']

    useEffect(() => {
      console.log(`Fetch ${filter}`)
    }, [filter])

    const onClick = (e) =>{
      // pass in currnet state so it is a togglel 
      console.log('e.target', e.target.id)
    }
 
 
      return (

        <Fragment>
          <Filter >
          <h1>Sort by...</h1>

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
         
         
            <Grid>
           
            {albums.map(album => (
              <Li key = {album.id}  >
               <CardSm album = {album} />
               
             </Li>
   
           ))}



           </Grid>
        </Fragment>
    )
}

export default AlbumsGrid