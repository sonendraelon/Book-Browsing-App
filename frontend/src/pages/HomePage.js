import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import FilterDropdown from '../components/FilterDropdown';
import SearchBar from '../components/SearchBar';
import { getBooks } from '../services/api';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filter) {
    filteredBooks.sort((a, b) => a[filter] - b[filter]);
  }

  return (
    <div className="home-page">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterDropdown filter={filter} setFilter={setFilter} />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;