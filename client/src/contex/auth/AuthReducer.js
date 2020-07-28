import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CLEAR_ERRORS,
	USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
                user:action.payload,
				isAuth: true,
				loading: false,
			};

		case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...action,
				...action.payload,
				isAuth: true,
				loading: false,
			};

		case REGISTER_FAIL:
         case AUTH_ERROR:
       case LOGIN_FAIL:
           case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuth: false,
				loading: false,
				user: null,
				error: action.payload,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
            };

            default:
      return state;

	}
};
