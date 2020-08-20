import React,{useContext} from 'react'

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../contex/auth/AuthContext";
import Colors from "./Colors";
import styled from "styled-components";
const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.7rem 2rem;
	z-index: 1;
	width: 100%;
	border-bottom: solid 1px ${Colors.primary};
	opacity: 0.9;
	height: 5vh;
	margin-bottom: 1rem;

	background: ${Colors.primary};
	color: ${Colors.text};
`;

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const { isAuth, logout, user } = authContext;
	const onLogout = () => {
		logout();
	};

	const authLinks = (
		<>
			<li>Welcome, {user && user.name}</li>
			<li>
				<Link to="/home"><i className="fas fa-home"></i> Home </Link>
			</li>
			<li>
				<Link to="/discover"><i class="fas fa-search"></i> Discover </Link>
			</li>
			<li>
				<Link to="/artists">Artists </Link>
		
			</li>
			<li>
				<Link to="/albums">Albums </Link>
			</li>
			
			<li>
				<a onClick={onLogout} href="#!">
					<i className="fas fa-sign-out-alt" />{" "}
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</>
	);

	const guestLinks = (
		<>
			<li>
				<Link to="/register">Register </Link>
			</li>
			<li>
				<Link to="/login">Login </Link>
			</li>
		</>
	);

	// styled component messed up flex box
	return (
		<div className="navbar bg-primary">
			<h1>
				<Link to="/home">
					<i className={icon} /> {title}{" "}
				</Link>
			</h1>
			<ul>{isAuth ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: "wax",
	icon: "fas fa-compact-disc",
};

export default Navbar;
