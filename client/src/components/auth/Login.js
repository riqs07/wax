import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../layout/Buttons";

const Form = styled.form`
	background: #fff;
	border: 2px solid black;
	border-radius: 2rem;
	padding: 1rem;
	margin: 1rem;
`;


const Register = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		});
	const { name, email, password, password2 } = user;

	const onChange = (e) => { 
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('login submit ')
    }

	return (
		<div className = 'form-container'>
			<h1>Login</h1>
			<Form>
				
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
					/>
				</div>
				
                    <PrimaryButton type = "submit">Login</PrimaryButton>

			</Form>
		</div>
	);
};

export default Register;
