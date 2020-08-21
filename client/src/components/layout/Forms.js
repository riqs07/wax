import {Colors,Shadows} from "./Palette"
import styled from 'styled-components'

const Form = styled.form`
	background: #fff;
	border: 2px solid ${Colors.primary};
	border-radius: 2rem;
	padding: 1rem;
	margin: 1rem;
	box-shadow:${Shadows.sm}

`;

export default Form;