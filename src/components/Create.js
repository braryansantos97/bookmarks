import React, { useState, useEffect } from 'react';

function Create(props) {
	const [bookmarks, setBookmarks] = useState([]);
	const [newBookmark, setNewBookmark] = useState({
		title: '',
		link: ''
	});

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/bookmarks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newBookmark)
			});
			const data = await response.json();
			props.setBookmarks([...props.bookmarks, data]);
			setNewBookmark({
				title: '',
				link: ''
			});
		} catch (error) {
			console.error(error);
		}
	};
	const handleChange = e => {
		setNewBookmark({ ...newBookmark, [e.target.id]: e.target.value });
	};

	return (
		<div className="NewBookmark container">
			<p>
				<button
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Add Bookmark
				</button>
			</p>
			<div
				className="collapse columns is-desktop is-centered mb-3"
				id="collapseExample"
			>
				<form
					onSubmit={handleSubmit}
					className="container column box has-background-primary is-4"
				>
					<input
						className="form-control mb-3"
						type="text"
						id="title"
						placeholder="Website name"
						value={newBookmark.title}
						onChange={handleChange}
					/>{' '}
					<input
						className="form-control mb-3"
						type="text"
						id="link"
						placeholder="http:// Link"
						value={newBookmark.link}
						onChange={handleChange}
					/>{' '}
					<input className="button is-info mb-3" type="submit" value="Add" />
				</form>
			</div>
		</div>
	);
}

export default Create;
