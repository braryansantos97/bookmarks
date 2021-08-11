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
		<div className="NewBookmark">
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
			<div className="collapse" id="collapseExample">
				<form onSubmit={handleSubmit} className="">
					<input
						className="form-control"
						type="text"
						id="title"
						placeholder="Website name"
						value={newBookmark.title}
						onChange={handleChange}
					/>{' '}
					<input
						className="form-control"
						type="text"
						id="link"
						placeholder="http:// Link"
						value={newBookmark.link}
						onChange={handleChange}
					/>{' '}
					<input className="btn btn-primary" type="submit" value="Add" />
				</form>
			</div>
		</div>
	);
}

export default Create;
