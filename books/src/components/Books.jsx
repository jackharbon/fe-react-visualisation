import { useEffect, useState } from 'react';

function Books({ searchTerm }) {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
			.then((response) => response.json())
			.then((data) => {
				setBooks(data.items);
			});
	}, [searchTerm]);

	return (
		<main>
			<h2>Books on {searchTerm}</h2>
			<ul>
				{books.map((book) => {
					return (
						<li key={book.id}>
							<h3>{book.volumeInfo.title}</h3>
							<img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}></img>
						</li>
					);
				})}
			</ul>
		</main>
	);
}

export default Books;
