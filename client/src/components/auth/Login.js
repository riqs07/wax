import React, { useState,useContext,useEffect } from "react";
import styled from "styled-components";
import AlertContext from '../../contex/alert/AlertContext'
import AuthContext from '../../contex/auth/AuthContext'
import AlbumContext from "../../contex/album/AlbumContext";
import { PrimaryButton } from "../layout/Buttons";
import {Column50} from '../layout/Grids'

import Form from '../layout/Forms'


const Login = (props) => {
	const alertContext = useContext(AlertContext)
	const authContext = useContext(AuthContext)
	const albumContext = useContext(AlbumContext)

	const {setAlert} = alertContext
	const {login,error,clearErrors,isAuth} = authContext
	const {albums} = albumContext


    let rand = Math.floor(Math.random() * albums.length);
    const {name,imageURL} = albums[rand]
	useEffect(()=>{
		if (isAuth){
			props.history.push('/home')
		}

		if (error === 'Invalid Credentials'){
			setAlert(error,'danger')
			clearErrors()
		}
	},[error,isAuth,props.history])

	const [user, setUser] = useState({
		email: "",
		password: "",
		});

	const { email, password } = user;

	const onChange = (e) => { 
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit = (e) => {
		e.preventDefault()
		login({
			email,
			password
		})
    }

	return (
		<Column50>
			             <img src = {imageURL}></img>

				<div className = 'form-container'>
			<h1>Login</h1>
			<Form onSubmit = {onSubmit}>
				
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required value={email} onChange={onChange} />
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
				
                    <PrimaryButton type = "submit">Login</PrimaryButton>

			</Form>
		</div>
	
		</Column50>

	);
};

export default Login;
