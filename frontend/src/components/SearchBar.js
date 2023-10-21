import React, {useState} from 'react';
import Autosuggest from 'react-autosuggest';
import { getBooks } from '../services/api';

function SearchBar({ searchTerm, setSearchTerm }) {
  const [suggestions, setSuggestions] = useState([]);

  async function getSuggestions(value) {
    const books = await getBooks();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredBooks);
  }

  function getSuggestionValue(suggestion) {
    return suggestion.title;
  }

  function renderSuggestion(suggestion) {
    return <div>{suggestion.title}</div>;
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) => getSuggestions(value)}
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        placeholder: 'Search for books...',
        value: searchTerm,
        onChange: (_, { newValue }) => setSearchTerm(newValue),
      }}
    />
  );
}

export default SearchBar;