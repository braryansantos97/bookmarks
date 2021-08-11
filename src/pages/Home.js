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

	return (
		<div className="HomePage container text-center">
			<h1>📚My Bookmarks📚</h1>
			<Create bookmarks={bookmarks} setBookmarks={setBookmarks} />
			<div className="">
				<ul className="">
					{bookmarks.map(bookmark => {
						return (
							<li key={bookmark._id} className="flx-md-row">
								<a
									href={`/home`}
									onClick={() => window.open(bookmark.link, '_blank')}
								>
									<h3>{bookmark.title}</h3>
								</a>
								<Link to={`/${bookmark._id}`}>
									<button className="btn btn-primary">Edit Bookmark</button>
								</Link>
								<button
									className="btn btn-danger"
									onClick={() => {
										handleDelete(bookmark._id);
									}}
								>
									X
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}