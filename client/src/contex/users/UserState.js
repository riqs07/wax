import React, { useReducer } from "react";
import UserContext from "./UserContext";
import reducer from "./UserReducer";
import axios from "axios";
import { GET_PROFILE } from "../types";

const UserState = (props) => {
	const initialState = {
		profile: {
			recentFavAlbums: [],
			recentLikedAlbums: [],
			topAlbums: [],
			recentReviews: [],
			recentRatings: [],
		},
		loading: true,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const getProfile = async () => {
		try {
			const res = await axios.post("http://localhost:9001/api/users/profile");
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const changePassword = (passwords) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			axios.put("http://localhost:9001/api/users/password", passwords, config);
		} catch (err) {
			console.log(err);
		}
	};
	const changeUsername = (username) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			axios.put("http://localhost:9001/api/users/username", username, config);
		} catch (err) {
			console.log(err);
		}
	};
	const checkIfAdmin = async () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post(
				"http://localhost:9001/api/users/admin",
				config
            );
            return res;
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<UserContext.Provider
			value={{
				profile: state.profile,
				getProfile,
				changePassword,
				changeUsername,
				checkIfAdmin,
			}}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserState;
