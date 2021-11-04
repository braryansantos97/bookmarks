import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
	return <p>I got your messsage! I will contact you soon</p>;
};

export default function ContactMe() {
	const [result, showResult] = useState(false);

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail',
				'contact_me',
				form.current,
				'user_RSDIhyAH5TXx32SY8QcwO'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		e.target.reset();
		showResult(true);
	};

	return (
		<form
			action=""
			onSubmit={sendEmail}
			className="column box has-background-primary is-4"
		>
			<div className="">
				<h2>Say Hello!</h2>
				<label>Name</label>
				<input type="text" name="name" className="form-control" />
				<label>Email</label>
				<input type="email" name="email" className="form-control" />
			</div>
			<div className="">
				<label>Message</label>
				<textarea name="message" className="textarea mb-3" />
				<input type="submit" value="Send" className="button is-info" />
				<div className="row">{result ? <Result /> : null}</div>
			</div>
		</form>
	);
}
