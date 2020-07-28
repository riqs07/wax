import React ,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthContext from '../../contex/auth/AuthContext'

// @issue not reditecting if not auth 
const PrivateRoute = ({component:Component,...rest}) => {
    const authContext = useContext(AuthContext)
    const {isAuth ,loading} = authContext

    console.log(isAuth)
    // Checks to see if user is auth before they can acess a private route
    return (
        <Route {...rest} render = {props => !isAuth && !loading ? (
            <Redirect to ='/login'/>
        ) : (
            <Component {...props}/>
        )}/>
    )
}

export default PrivateRoute
