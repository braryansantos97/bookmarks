import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav className="NavBar navbar-dark bg-dark">
			{props.routes.map(({ key, path }) => (
				<Link className="" key={key} to={path}>
					{key}
				</Link>
			))}
		</nav>
	);
};

export default NavBar;
