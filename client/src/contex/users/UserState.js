import React, {useReducer} from 'react';
import UsersContext from './UserContext';
import reducer from './UserReducer';
import axios from 'axios';



const UsersState = props => {
    // hard coded for yeezus 
    const initialState = {
        
        
    }
    
    const [state,dispatch] = useReducer(reducer,initialState)


    return (
       < UserContext.Provider
        value = {{
           
        }}>


        {props.children}
        </ UserContext.Provider>

    )
}

export default AlbumState