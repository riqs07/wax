import {
    SET_CURRENT,
    CLEAR_CURRENT,
    CREATE_ALBUM,
    ADD_ALBUM_REVIEW,
    DELETE_ALBUM,
    GET_ALBUMS,
    LIKE_ALBUM,
    UPDATE_ALBUM,
    FILTER_ALBUMS,
    CLEAR_FILTER,
    REVIEW_FAIL
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
            case REVIEW_FAIL:
            return {
                ...state,
                error:action.payload
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