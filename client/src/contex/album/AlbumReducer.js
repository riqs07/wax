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

        case CREATE_ALBUM:
            return{
                ...state,
                albums:[...state.albums,action.payload]
            };

        case DELETE_ALBUM:
            return{
                ...state,
                albums:state.albums.filter(album => album.id !== action.payload)
            };

        case ADD_ALBUM_REVIEW:
            return{
                ...state,
                albums:[...state.albums,action.payload]
            };
     

            case REVIEW_FAIL:
            return {
                ...state,
                error:action.payload
            };
        // case ADD_ALBUM_RATING:
        //     return{
        //         ...state,
        //         albums:[...state.albums,action.payload]
        //     };

        case SET_CURRENT:
            return{
                ...state,
                albums:state.albums.filter(album => album.id !== action.payload)
            };

        case CLEAR_CURRENT:
            return{
                ...state,
                albums:state.albums.filter(album => album.id !== action.payload)
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