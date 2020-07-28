import {
    SET_CURRENT,
    CLEAR_CURRENT,
    ADD_ALBUM,
    ADD_ALBUM_REVIEW,
    DELETE_ALBUM,
    GET_ALBUMS,
    UPDATE_ALBUM,
    FILTER_ALBUMS,
    CLEAR_FILTER
} from '../types'



export default (state,action) => {
    switch (action.type){

        case GET_ALBUMS:
            return{
                ...state,
                albums:action.payload,
                loading:false
            };

        case ADD_ALBUM:
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









        default: 
        return state;
    }
}