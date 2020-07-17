import React, {useReducer} from 'react';
import SongsContext from './SongsContext';
import reducer from './SongsReducer';
import axios from 'axios';



const SongState = props => {
    // hard coded for yeezus songs
    const initialState = {
        songs:[
            {
                "albumID": 1,
                "album": "Yeezus ",
                "id": 5,
                "name": "Blood on the Leaves",
                "likes": 1,
                "favs": 2,
                "avg": "50.0000",
                "runtime": 180,
                "genre": "Rap",
                "linkURL": "https://www.youtube.com/watch?v=KEA0btSNkpw"
            },
            {
                "albumID": 1,
                "album": "Yeezus ",
                "id": 2,
                "name": "Bound 2",
                "likes": 6,
                "favs": 5,
                "avg": "50.0000",
                "runtime": 250,
                "genre": "Rap",
                "linkURL": "https://www.youtube.com/watch?v=BBAtAM7vtgc"
            },
            {
                "albumID": 1,
                "album": "Yeezus ",
                "id": 3,
                "name": "Im in it",
                "likes": 0,
                "favs": 4,
                "avg": "50.0000",
                "runtime": 120,
                "genre": "Rap",
                "linkURL": "https://www.youtube.com/watch?v=_jZuz3NEr18"
            },
            {
                "albumID": 1,
                "album": "Yeezus ",
                "id": 4,
                "name": "New Slaves",
                "likes": 1,
                "favs": 1,
                "avg": "50.0000",
                "runtime": 180,
                "genre": "Rap",
                "linkURL": "https://www.youtube.com/watch?v=vQ0u09mFodw"
            },
            {
                "albumID": 1,
                "album": "Yeezus ",
                "id": 1,
                "name": "Send it up",
                "likes": 6,
                "favs": 4,
                "avg": "50.0000",
                "runtime": 160,
                "genre": "Rap",
                "linkURL": "https://www.youtube.com/watch?v=vUFiVwa6U_c"
            }
            
            
        ]
        
    }
    
    const [state,dispatch] = useReducer(reducer,initialState)


    return (
       < SongContext.Provider
        value = {{
            songs :state.songs,
           
        }}>


        {props.children}
        </ SongContext.Provider>

    )
}

export default AlbumState