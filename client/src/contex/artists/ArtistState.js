import React, {useReducer} from 'react';
import uuid from 'uuid';
import ArtistContext from './ArtistContext';
import reducer from './ArtistReducer';
import axios from 'axios';





const ArtistState = props => {
    const initialState = {
       artists:[{
        "id": 1,
        "name": "Kanye West ",
        "genre": "Rap",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "imageURL":"https://waxhades123.s3.us-east-2.amazonaws.com/artists/kanye-west.webp",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 2,
        "name": "Dua Lipa",
        "genre": "Pop",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "imageURL":"https://waxhades123.s3.us-east-2.amazonaws.com/artists/dua-lipa.jpg",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 3,
        "name": "The Weeknd",
        "genre": "R&B",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "imageURL":"https://waxhades123.s3.us-east-2.amazonaws.com/artists/the-weekend.webp",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 4,
        "name": "Lil Uzi Vert",
        "genre": "Rap",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 5,
        "name": "Lil Wayne",
        "genre": "Rap",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 6,
        "name": "Kid Cudi",
        "genre": "Rap",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 7,
        "name": "Lorde",
        "genre": "Pop",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 8,
        "name": "Marvin Gaye",
        "genre": "R&B",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 9,
        "name": "Playboy Carti",
        "genre": "Rap",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    },
    {
        "id": 10,
        "name": "Young Thug",
        "genre": "Rap",
        "createdAt": "2020-07-11T02:27:57.000Z",
        "updatedAt": "2020-07-11T02:27:57.000Z"
    }]
        
    }
    
    const [state,dispatch] = useReducer(reducer,initialState)



    return (
       < ArtistContext.Provider
        value = {{
            artists :state.artists,
            
        }}>


        {props.children}
        </ ArtistContext.Provider>
    
    )
}

export default ArtistState