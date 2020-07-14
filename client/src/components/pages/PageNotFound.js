import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'



const linkStyle = {
    'background-color': '#003699',
    color: '#eee',
    'text-decoration': 'none',
    'font-size': "35px",
    padding: '12px 16px',
    'border-radius': '4px',
    margin: '10px',
    'font-family':'bella,sans-serif'


}

const PageNotFound = () => {

    const quotes = [
        'Its dangerous to go alone. Take this',
        'All that is gold does not glitter',
        'Not all those who wander are lost',
        'The old that is strong does not wither',
        'Deep roots are not reached by the frost.',
       
    ]

    const num = Math.floor(Math.random() * quotes.length)
 

    return (

        <Fragment>

            <h1>404 Page Not Found....</h1>
              <h2>💍 {quotes[num]} 💍</h2>
                <Link style={linkStyle} to="/">🏡 Return to Safety</Link>
          

        </Fragment>


    )
}

export default PageNotFound