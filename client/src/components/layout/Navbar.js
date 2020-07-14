import React from "react";
import PropTypes from "prop-types";
import { Link  } from "react-router-dom";

const Navbar = ({ title, icon }) => {
	return (
		<div className="navbar bg-primary">
			<h1>
			<Link to="/"  ><i className={icon} /> {title} </Link>

				
			</h1>
			<ul>
				<li>
					<Link to="/"  >Home </Link>
				</li>
				<li>
					<Link to="/about">About </Link>
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
					<Link to="/">Leaderboard </Link>
				</li>
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
