import React, { Fragment, useEffect, useContext } from "react";
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
		<Fragment>
			<li>Hello, {user && user.name}</li>
			<li>
				<Link to="/home">Home </Link>
			</li>
			<li>
				<Link to="/discover">Discover </Link>
			</li>
			<li>
				<Link to="/artists">Artists </Link>
			</li>
			<li>
				<Link to="/albums">Albums </Link>
			</li>
			<li>
				<Link to="/songs">Songs </Link>
			</li>

			<li>
				<Link to="/playlists">Playlists </Link>
			</li>

			<li>
				<Link to="/reviews">
					<i class="fa fa-bars" aria-hidden="true"></i>{" "}
				</Link>
			</li>
			<li>
				<a onClick={onLogout} href="#!">
					<i className="fas fa-sign-out-alt" />{" "}
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">Register </Link>
			</li>
			<li>
				<Link to="/login">Login </Link>
			</li>
		</Fragment>
	);

	// styled component messed up flex box
	return (
		<div class="navbar bg-primary">
			<h1>
				<Link to="/">
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
