import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../contex/alert/AlertContext";
import AuthContext from "../../contex/auth/AuthContext";
import { PrimaryButton } from "../layout/Buttons";
import { Column50 } from "../layout/Grids";
import {ladySVG} from "../layout/svg"

import Form from "../layout/Forms";

import Modal from "../artists/artistsModal"



const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuth } = authContext;

	//@issue not sure how this broke but its saying albums is null
	// let rand = Math.floor(Math.random() * albums.length);
	// const {name,imageURL} = albums[rand]

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { email, password } = user;

	useEffect(() => {
		if (isAuth) {
			props.history.push("/home");
		}

		if (error === "Invalid Credentials") {
			setAlert(error, "danger");
			clearErrors();
		}
	}, [error, isAuth, props.history]);

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		login({
			email,
			password,
		});
	};


	return (

		<Column50>
		{ladySVG}

{/* <Modal/> */}
			<div>
				<Form onSubmit={onSubmit}>
				<h1>Login</h1>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							required
							value={email}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={onChange}
							required
						/>
					</div>

					<PrimaryButton type="submit">Login</PrimaryButton>
				</Form>
			</div> 
		</Column50>
	);
};

export default Login;
