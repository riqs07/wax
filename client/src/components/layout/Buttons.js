import React from "react";

import styled from 'styled-components'



const Btn = styled.button`

    text-decoration: none; 
    display:block;
    font-size: 20px;
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin: 10px;
  &:hover{
        transform: translateY(-2px);
   
        transition: all .2s ;
        opacity: .75;

    }
`



const Primary = styled(Btn)`
border: 2px solid #1849a2;
  background-color: #1849a2;
  color: #eee;
`;
const Secondary = styled(Btn)`  
 color:#1849a2;
      background-color: #eee;
      border:2px solid #1849a2;
      text-decoration: none;
`;

const Tertiary = styled(Btn)`
  
  font-size: 18px;
    padding: 12px 16px;
    color:#1849a2;
    text-decoration: none;

    &:hover{
        background-color:$red;
        color: #eee;
        box-shadow: 0;
        border-radius: 4px;
        transform: translateY(-3px);
            box-shadow: $shadow-1;

    }
`;



// A new component based on Button, but with some override styles


const PrimaryButton = (props) => {
    return (
        
        <Primary  onClick = {props.onClick}>
            {props.children}
        </Primary>
    )
}

const SecondaryButton = (props) => {
    return (
        
        <Secondary onClick = {props.onClick}>
            {props.children}
        </Secondary>
    )
}
const TertiaryButton = (props) => {
    return (
        
        <Tertiary onClick = {props.onClick}>
            {props.children}
        </Tertiary>
    )
}


export  {PrimaryButton, SecondaryButton,TertiaryButton}
 