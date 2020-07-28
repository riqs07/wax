import React, { useReducer } from "react";
import uuid from "uuid";
import AuthContext from "./AuthContext";
import reducer from "./AuthReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

import {
	USER_LOADED,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CLEAR_ERRORS,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	AUTH_ERROR,
	LOGOUT,
} from "../types";

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem("token"),
		user: null,
		isAuth: null,
		loading: true,
		error: null,
	};

	const register = async (formData) => {
		const config = {
			header: {
				"Content-Type": "application/json ",
			},
		};

		try {
			const res = await axios.post(
				"http://localhost:9001/api/users",
				formData,
				config
			);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});

			// start onboard
			loadUser();
		} catch (error) {
			// Alert user register failed
			dispatch({
				type: REGISTER_FAIL,
				payload: error.response.data.msg,
			});
		}
	};

	const login = async (formdata) => {
		const config = {
			header: {
				"Content-Type": "application/json ",
			},
		};

		try {
			const res = await axios.post(
				"http://localhost:9001/api/auth",
				formdata,
				config
			);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			loadUser();
		} catch (err) {
            console.log(err)
            dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		try {
			const res = await axios.get("http://localhost:9001/api/auth");
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		} catch (error) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	const logout = () => {
		dispatch({
			type: LOGOUT
		});
	};
	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS });
	};

	//Load user
	// login
	//logout
	//clear errirs
	//register
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuth: state.isAuth,
				loading: true,
				user: state.user,
				error: state.error,
				register,
				login,
				clearErrors,
				loadUser,
				logout,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
