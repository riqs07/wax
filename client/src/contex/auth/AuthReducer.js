import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
    
} from '../types'


export default (state,action) =>{
    switch (action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...action,
                ...action.payload,
                isAuth:true,
                loading:false
            };

        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                isAuth:false,
                loading:false,
                user:null,
                error:action.payload
            }
    }
}