import React,{useState} from 'react'
import styled from "styled-components";

const Grid = styled.ul`
display:flex;
align-content:center;
overflow-x:scroll;
overflow-y:hidden;
`
const Li = styled.li`
list-style:none;
transition: transform 450ms;
height:400px;
width:400px;
object-fit:contain;

&:hover{ 
    transform:scale(1.08);
}
`
const Title = styled.h1`
	font-size: 2.5rem;
	margin: 1rem;
`;


 const RecentAlbums = ({title,albums}) => {

    return (
        <>
            <Title>{title}</Title>
        <Grid>
            {albums.map(album => (
              <Li key = {album.id}  >
               <img src = {album.imageURL} />
             
             </Li>
                          )
           
           )}
        </Grid>
      
        </>
    )
}
export default RecentAlbums