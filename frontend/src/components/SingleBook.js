import React from 'react';

function SingleBook({ book }) {
  return (
    <div className="single-book">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.price}</p>
      <p>{book.genre}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default SingleBook;