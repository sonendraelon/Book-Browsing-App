import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'genre', label: 'Genre' },
  { value: 'price', label: 'Price' },
  { value: 'publicationDate', label: 'Publication Date' },
];

function FilterDropdown({ filter, setFilter }) {
  function handleChange(selectedOption) {
    setFilter(selectedOption.value);
  }

  return (
    <Select
      options={options}
      value={{ value: filter, label: filter || 'Sort By' }}
      onChange={handleChange}
    />
  );
}

export default FilterDropdown;