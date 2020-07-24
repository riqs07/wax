import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'



export default (state,action) => {
    switch (action.type){

       case SET_ALERT:
           return [...state,action.payload];

       case REMOVE_ALERT:
           // For each alert check alert.id and if its not equal to the payload which is the alert id then filter out array
           // so just find the one that matches
           return state.filter(alert =>alert.id !== action.payload);

        default: 
        return state;
    }
}