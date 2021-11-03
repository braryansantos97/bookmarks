import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div>
			<nav
				className="navbar is-info"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-brand">
					<Link className="navbar-item image" to="/">
						<img
							src="https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/bookmark-55.png"
							width="115"
							height="30"
							alt=""
						/>
					</Link>
					<a
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
						href="/"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						{props.routes.map(({ key, path }) => (
							<Link className="navbar-item" key={key} to={path}>
								{key}
							</Link>
						))}
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							{/*<div className="buttons">
								<Link className="button is-primary" to="/">
									<strong>Sign up</strong>
								</Link>
								<Link className="button is-light" to="/">
									Log in
								</Link>
							</div>*/}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
