import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { server404} from '../layout/svg'
import { Column50} from '../layout/Grids'
import { Colors} from '../layout/Palette'





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

const highlightRed = {
    'color': 'red',
}
const highlightGreen = {
    'color': `${Colors.secondary}`
}
const highlightBlue = {
    'color': `${Colors.primary}`,
}
const highlightPurple = {
    'color': `purple`,
}
const highlightYellow = {
    'color': `#e3ab57 `,
}

const highlightCyan = {
    'color': `cyan`,

}
const highlightMagenta= {
    'color': `magenta`,

}
 

const PageNotFound = () => {


 

    return (

        <Column50>

<div>
{server404}

<Link style={linkStyle} to="/home">🏡 Home</Link>

</div>
            
            <div>

              <h2> 
              "Then he turned <span style = {highlightPurple}>four</span> and started <span style = {highlightMagenta}>flowin'</span> to the <span style = {highlightPurple}>poor</span>
              <br></br>
That's about when he first started <span style = {highlightMagenta}>going</span> <span style = {highlightPurple}>raw</span>
<br></br>
Kept the <span style = {highlightPurple}>dro'</span> in the <span style = {highlightPurple}>drawer</span>
<br></br>
                  A rhymin' klepto who couldn't go up in the <span style = {highlightPurple}>store</span> no <span style = {highlightPurple}>more</span>
                  <br></br>
His life is like a <span style = {highlightGreen}>folklore</span>  <span style = {highlightBlue}>legend</span> 
<br></br>
Why you so <span style = {highlightYellow}>stiff</span>, you need to <span style = {highlightGreen}> smoke more</span>, <span style = {highlightBlue}>bredren</span> 
<br></br>
Instead of trying to <span style = {highlightYellow}>riff</span> with the <span style = {highlightGreen}>broke war</span> <span style = {highlightBlue}>veteran</span> 
<br></br>
<span style = {highlightYellow}>Spliff</span> made him swore he saw <span style = {highlightBlue}>heaven</span>  he was <span style = {highlightBlue}>seven</span> 
<br></br>
Yup, you know it, <span style = {highlightMagenta}>growin'</span> up too <span style = {highlightRed}>fast</span>
<br></br>
<span style = {highlightMagenta}>Showin'</span> up to <span style = {highlightRed}>class</span> with Moet in a <span style = {highlightRed}>flask</span>
<br></br>
He ask the teacher if he leave will he <span style = {highlightRed}>pass</span>
<br></br>
His girl is home alone he tryin' to get the  <span style = {highlightRed}>.....</span>
<br></br>
If you want a sip get a paper water <span style = {highlightCyan}>fountain</span> <span style = {highlightRed}>glass</span>
<br></br>
How I'm 'posed to know where your mouth been <span style = {highlightRed}>last?</span>
<br></br>
Hands so <span style = {highlightRed}>fast</span> he can out-spin the <span style = {highlightRed}>Flash</span>
<br></br>
Known to smoke a whole <span style = {highlightCyan}>mountain</span> of <span style = {highlightRed}>hash</span> to the <span style = {highlightRed}>ash</span>
<br></br>
Boom-<span style = {highlightRed}>bash</span> leave the <span style = {highlightPurple}>room</span> with the <span style = {highlightRed}>stash</span>
<br></br>
Assume it's in a <span style = {highlightRed}>smash, </span><span style = {highlightPurple}>DOOM</span> get the <span style = {highlightRed}>cash</span>"
<br></br>
<br></br>

-- <em>Curls by MF DOOM</em></h2>
            </div>
      

        </Column50>


    )
}

export default PageNotFound