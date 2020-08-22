import {

    GET_ALBUMS,
    FILTER_ALBUMS,
} from '../types'

// Really dont think i need a lot of thesew
// only ones that update the front end state 

export default (state,action) => {
    switch (action.type){

        case GET_ALBUMS:
            return{
                ...state,
                albums:action.payload,
                loading:false
            };
            

        case FILTER_ALBUMS:
            return{
                ...state,
                albums:action.payload,
                loading:false
            };

        default: 
        return state;
    }
}