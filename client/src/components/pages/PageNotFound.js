import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { server404} from '../layout/svg'
import { Column50} from '../layout/Grids'




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
const quotes = [
    'Its dangerous to go alone. Take this 🗡',
    'All that is gold does not glitter',
    'Not all those who wander are lost',
    'The old that is strong does not wither',
    'Deep roots are not reached by the frost.',
   
]

const PageNotFound = () => {


    const num = Math.floor(Math.random() * quotes.length)
 

    return (

        <Column50>

            {server404}
            <div>
            <h3>Sorry, what you are looking for does not exist 😔</h3>
              <h2>💍 {quotes[num]} 💍</h2>
                <Link style={linkStyle} to="/home">🏡 Return to Safety</Link>
            </div>
      

        </Column50>


    )
}

export default PageNotFound