import React, { useState,useEffect,useContext } from "react";
import AlertContext from '../../contex/alert/AlertContext'
import AuthContext from '../../contex/auth/AuthContext'
import styled, { keyframes } from 'styled-components';
import { PrimaryButton } from "../layout/Buttons";
import zxcvbn from 'zxcvbn';
const Form = styled.form`
	background: #fff;
	border: 2px solid #1849a2;
	border-radius: 2rem;
	padding: 1rem;
	margin: 1rem;
`;



const Register = () => {

	const alertContext = useContext(AlertContext)
	const authContext = useContext(AuthContext)
	const {setAlert} = alertContext
	const {register} = authContext
	
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
    });
    
    const [strength,setPWStrength] = useState()
    const [warnings,setWarnings] = useState({
        warning:'',
        suggestions:null
    })
	const { username, email, password, password2 } = user;

	const onChange = (e) => { 
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit = async (e) => {
		e.preventDefault()
	///since its a fake on submit none of the form gets submitted or default checks kick in 

		if (username && email){
			if(password === password2) {
				if (strength > 1){
					register({
						name:username,
						email,
						password
					})
						setAlert('All good!','success')
				} else {
					setAlert('Passwords not strong enough. Need to be at least strength 2','danger')
				}
			} else {
				setAlert('Passwords do not match','danger')
			}

		} else {
			setAlert('Please Fill out Form Fields','danger')
		}
		
    }

    useEffect(() => {
        let {feedback,score} = zxcvbn(password);
        setWarnings(feedback)

        setPWStrength(score)
    }, [password])
    

	return (
		<div className = 'form-container'>
			<h1>Register</h1>
		     {warnings && 
            <h2>{warnings.warning}</h2>
            
            }
            {warnings.suggestions && 
            <h3>{warnings.suggestions[0]}</h3>
            
            }
			<Form>
				<div className="form-group">
					<label htmlFor="username">UserName</label>
					<input type="text" name="username" value={username} onChange={onChange} required/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} onChange={onChange} required/>
				</div>
                <h2><em>Strength:{strength}</em></h2>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
                        onChange={onChange}
                        required
                        minLength="6"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password2">Confirm password</label>
					<input
						type="password"
						name="password2"
						value={password2}
                        onChange={onChange}
                        required
                        minLength="6"
					/>
				</div>

                    <PrimaryButton onClick = {onSubmit}>Register</PrimaryButton>
			</Form>
		</div>
	);
};

export default Register;
