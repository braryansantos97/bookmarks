import React, { useState, useEffect, useRef } from 'react';

export default function Show(props) {
	const [bookmark, setBookmark] = useState({});
	const titleInput = useRef(null);
	const linkInput = useRef(null);

	const handleUpdate = async event => {
		event.preventDefault();
		try {
			const response = await fetch(`/api/bookmarks/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: titleInput.current.value,
					link: linkInput.current.value
				})
			});
			const data = await response.json();
			setBookmark(data);
			titleInput.current.value = '';
			linkInput.current.value = '';
			// console.log(enteredLink);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/bookmarks/${props.match.params.id}`);
				console.log(response);
				if (response.status !== 200) {
					window.location.assign('/');
				}
				const data = await response.json();
				setBookmark(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/bookmarks/${props.match.params.id}`, {
				method: 'DELETE',
				header: {
					'Content-Type': 'application/json'
				}
			});
			const deletedBookmark = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="ShowPage container text-center">
			{Object.keys(bookmark).length ? (
				<>
					<h3>{bookmark.title}</h3>
					<a
						href={bookmark._id}
						onClick={() => window.open(bookmark.link, '_blank')}
					>
						<p>{bookmark.link}</p>
					</a>
				</>
			) : (
				<h1>Loading ...</h1>
			)}
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleUpdate}
			>
				<label>
					{' '}
					Website Name:{' '}
					<input
						className="form-control"
						type="text"
						ref={titleInput}
						defaultValue={bookmark.title}
					/>
				</label>
				<label>
					{' '}
					http:// Link:{' '}
					<input
						className="form-control"
						type="text"
						ref={linkInput}
						defaultValue={bookmark.link}
					/>
				</label>
				<button className="btn btn-primary">Update Bookmark</button>
			</form>
			<br />
			<button className="btn btn-danger" onClick={handleDelete}>
				Delete Bookmark
			</button>
		</div>
	);
}
