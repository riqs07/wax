import React,{useContext,useState,useEffect} from 'react'
import Form from '../layout/Forms'
import zxcvbn from "zxcvbn";
import UserContext from '../../contex/users/UserContext'
import AlertContext from "../../contex/alert/AlertContext";
import { PrimaryButton } from "../layout/Buttons";



// feel like i can make this reusable its mainly the same exact logic as in register 

export const PasswordUpdate = () =>{
	const alertContext = useContext(AlertContext);
    const userContext = useContext(UserContext)

	const { setAlert } = alertContext;

    const {changePassword} = userContext
    const [passwords, setPasswords] = useState({
        oldPassword:"",
		password: "",
		password2: "",
	});
	const [strength, setPWStrength] = useState();
    const [warnings, setWarnings] = useState({
		warning: "",
		suggestions: null,
    });
    
	useEffect(() => {
		let { feedback, score } = zxcvbn(passwords.password);
		setWarnings(feedback);

		setPWStrength(score);
	}, [passwords]);

    const onSubmit = async (e) => {
		e.preventDefault();

		if (passwords.password === passwords.password2) {
			if (strength > 1) {
				changePassword({
                    oldPassword:passwords.oldPassword,
                    newPassword:passwords.password
				});
			} else {
				setAlert(
					"Passwords not strong enough. Need to be at least strength 2",
					"danger"
				);
			}
		} else {
			setAlert("Passwords do not match", "danger");
		}
    };
    
    const onChange = (e) => {
		setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };
    


    return (
<Form onSubmit = {onSubmit}>
    <h1>Update your password</h1>
{warnings && <h2>{warnings.warning}</h2>}
				{warnings.suggestions && <h3>{warnings.suggestions[0]}</h3>}
                <h2>
						<em>Strength:{strength}</em>
					</h2>
<div className="form-group">
<label htmlFor="password">Old Password</label>
<input
    type="password"
    name="oldPassword"
    value={passwords.oldPassword}
    onChange={onChange}
    required
/>
</div>
<div className="form-group">
<label htmlFor="password">New Password</label>
<input
    type="password"
    name="password"
    value={passwords.password}
    onChange={onChange}
    required
    minLength="6"
/>
</div>
<div className="form-group">
<label htmlFor="password2">Confirm new password</label>
<input
    type="password"
    name="password2"
    value={passwords.password2}
    onChange={onChange}
    required
    minLength="6"
/>
</div>
<PrimaryButton>Update Password</PrimaryButton>
</Form>
    )
    

}

export const UserNameUpdate = () =>{
    
	const alertContext = useContext(AlertContext);
    const userContext = useContext(UserContext)
    const {changeUsername} = userContext

    const { setAlert } = alertContext;
    const [username, SetNewUsername] = useState();

    const onChange = (e) => {
		SetNewUsername( e.target.value );
    };
    

    const onSubmit = async (e) => {
		e.preventDefault();

        changeUsername({username})
        setAlert("UserName changed","success")
    }
    return (
        <Form onSubmit = {onSubmit}>
                <h1>Update your Username</h1>

        <div className="form-group">
<label htmlFor="password">New Username</label>
<input
    type="text"
    name="username"
    value={username}
    onChange={onChange}
    required
/>
</div>
<PrimaryButton>Update Username</PrimaryButton>

</Form>
    )
}