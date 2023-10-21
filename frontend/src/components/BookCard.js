import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <Link to={`/books/${book.id}`}>
        <img src={book.image} alt={book.title} />
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.price}</p>
      </Link>
    </div>
  );
}

export default BookCard;