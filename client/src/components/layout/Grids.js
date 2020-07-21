import styled from 'styled-components'


// NOW IDK IF IM STUPID BUT I THINK I HAVE IT BACKWARDS AND ROW50 shoudl be column 50 🤔


const Column50 = styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
grid-gap: 2rem;

`

const Column25 = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
`


const Row50 = styled.div`
display:grid;
grid-template-rows:repeat(2,1fr);
`

const Row25 = styled.div`
display:grid;
grid-template-rows:repeat(4,1fr);
`

// Albums list and most pages 
const Flex = styled.ul`
display:flex;
align-content:center;
flex-wrap: wrap;
padding:1rem;
`




export  { Row50, Row25, Column25, Column50 };