import React, { useState, useEffect } from 'react';
import Create from '../components/Create';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/bookmarks/');

				const data = await response.json();
				setBookmarks(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async bookmarkId => {
		try {
			const response = await fetch(`/api/bookmarks/${bookmarkId}`, {
				method: 'DELETE',
				header: {
					'Content-Type': 'application/json'
				}
			});
			const deletedBookmark = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/home');
		}
	};

	const element = bookmarks.map(bookmark => {
		return (
			<div className="box col mb-3 has-background-primary" key={bookmark._id}>
				<div className="">
					<a
						className="title is-3"
						href={`/`}
						onClick={() => window.open(bookmark.link, '_blank')}
					>
						<h3 style={{ color: 'black' }}>{bookmark.title}</h3>
					</a>
					<Link to={`/${bookmark._id}`}>
						<button className="button is-info">
							<i className="fas fa-edit" />
						</button>
					</Link>
					<button
						className="button is-danger"
						onClick={() => {
							handleDelete(bookmark._id);
						}}
					>
						X
					</button>
				</div>
			</div>
		);
	});

	return (
		<div className="HomePage container text-center">
			<Create bookmarks={bookmarks} setBookmarks={setBookmarks} />
			<div className="container">
				<div className="table-responsive-xl row row-cols-1 row-cols-md-4 g-4">
					{element}
				</div>
			</div>
		</div>
	);
}
