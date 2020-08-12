import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
position: fixed;
top:0;
left:0;
height:100vh;
width:100%;
background:rgba(0,0,0,0.75);
z-index:9;
`


 const Backdrop = ({manageModal}) => {
     
    
    return (
        <Style onClick = {manageModal}>
            
        </Style>
    )
}
export default Backdrop