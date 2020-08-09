import React, { useState,useEffect,useContext } from "react";
import AlertContext from '../../contex/alert/AlertContext'
import AuthContext from '../../contex/auth/AuthContext'
import AlbumContext from "../../contex/album/AlbumContext";

import { PrimaryButton } from "../layout/Buttons";
import Form from '../layout/Forms'
import zxcvbn from 'zxcvbn';
import {Column50} from '../layout/Grids'



const Register = (props) => {

	const alertContext = useContext(AlertContext)
	const authContext = useContext(AuthContext)
	const albumContext = useContext(AlbumContext)


	const {setAlert} = alertContext
	const {register,error,clearErrors,isAuth} = authContext
	const {albums} = albumContext


	let rand = Math.floor(Math.random() * albums.length);
    const {name,imageURL} = albums[rand]

	useEffect(()=>{

		if (isAuth){
			// go to user onboarding
			// make them like fav stuff so we have base info 
			props.history.push('/home')
		}

		if (error === 'User already exists'){
			setAlert(error,'danger')
			clearErrors()
		}
	},[error,isAuth,props.history])
	
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

		if(password === password2) {
			if (strength > 1){
				register({
					name:username,
					email,
					password
				})
					// setAlert('Start Onboard!','success')
			} else {
				setAlert('Passwords not strong enough. Need to be at least strength 2','danger')
			}
		} else {
			setAlert('Passwords do not match','danger')
		}
		
    }

    useEffect(() => {
        let {feedback,score} = zxcvbn(password);
        setWarnings(feedback)

        setPWStrength(score)
    }, [password])
    

	return (
		<Column50>
		<img style = {{borderRadius:"50%"}}src = {imageURL}></img>
	

		<div className = 'form-container'>
			<h1>Register</h1>
		     {warnings && 
            <h2>{warnings.warning}</h2>
            
            }
            {warnings.suggestions && 
            <h3>{warnings.suggestions[0]}</h3>
            
            }
			<Form onSubmit = {onSubmit}>
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

                    <PrimaryButton type = 'submit'>Register</PrimaryButton>
			</Form>
		</div>
		</Column50>
	);
};

export default Register;
