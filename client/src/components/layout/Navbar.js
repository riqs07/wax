import React, { Fragment, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../contex/auth/AuthContext";

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
					<Link to="/explore">Explore </Link>
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
					<Link to="/leaderboard">Leaderboard </Link>
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
				<Link to="/explore">Explore</Link>
			</li>
					<li>
				<Link to="/register">Register </Link>
			</li>
			<li>
				<Link to="/login">Login </Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<Link to="/">
					<i className={icon} /> {title}{" "}
				</Link>
			</h1>
			<ul>
			{isAuth ? authLinks : guestLinks}
			</ul>
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
