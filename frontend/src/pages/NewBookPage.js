import React from 'react';
import BookForm from '../components/BookForm';

function NewBookPage() {
  return (
    <div className="new-book-page">
      <h1>Add New Book</h1>
      <BookForm />
    </div>
  );
}

export default NewBookPage;