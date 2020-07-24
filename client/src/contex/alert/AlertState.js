import React, { useReducer, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AlertContext from "./AlertContext";
import reducer from "./AlertReducer";
import axios from "axios";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
	const initialState = [];

	const [state, dispatch] = useReducer(reducer, initialState);
	const [isAlerting, setAlerting] = useState(false);



	const setAlert = (msg, type, timeout = 4000) => {
        const id = uuidv4();
        
        if (isAlerting === false){
            setAlerting(true)

            dispatch({
                type: SET_ALERT,
                payload: { msg, type, id },
            });
    
            setTimeout(() => {
                setAlerting(false)
                dispatch({
                    type: REMOVE_ALERT,
                    payload: id,
                });
            }, timeout);
        };
        }
		

	return (
		<AlertContext.Provider
			value={{
				alerts: state,
				setAlert,
			}}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
