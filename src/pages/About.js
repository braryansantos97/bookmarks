import React, { useState } from 'react';

export default function About(props) {
	return (
		<div className="AboutPage container">
			<div className="columns is-desktop is-centered ">
				<div className="column box has-background-primary is-4 text-center">
					<h5>You can follow me and see more of my work here!</h5>
					<div className="buttons is-centered row">
						<a
							className="button is-info"
							href="https://www.linkedin.com/in/brayan-santos/"
							target="_blank"
						>
							<span className="icon is-info">
								<i className="fab fa-linkedin"></i>
							</span>
						</a>
						<a
							href="https://twitter.com/santos_c_b"
							target="_blank"
							className="button is-info"
						>
							<span className="icon is-info">
								<i className="fab fa-twitter-square"></i>
							</span>
						</a>
						<a
							className="button is-info"
							href="https://github.com/braryansantos97"
							target="_blank"
						>
							<span className="icon is-info">
								<i className="fab fa-github"></i>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
