import { GET_ARTISTS } from "../types";



export default (state,action) => {
    switch (action.type){

        case GET_ARTISTS:
            return{
                ...state,
                artists:action.payload,
                loading:false
            };

       



        default: 
        return state;
    }
}