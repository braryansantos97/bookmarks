import React, { useState } from 'react';
import ContactMe from '../components/contactForm';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<h1 style={{ color: 'black' }} className="mb-3">
				Contact Me
			</h1>
			<div className="columns is-desktop is-centered">
				<ContactMe />
			</div>
		</div>
	);
}
