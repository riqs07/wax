import axios from 'axios'

const setAuthToken = token  => {

    // Setting the token as default header to get pass all private routes 
    if(token){
        axios.defaults.headers.common['x-auth-token']= token
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    }
}

export default setAuthToken