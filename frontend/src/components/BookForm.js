import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBook } from '../services/api';

function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    genre: '',
    description: '',
    image: '',
  });
  const history = useHistory();

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    data.append('price', formData.price);
    data.append('genre', formData.genre);
    data.append('description', formData.description);
    data.append('image', formData.image);
    await createBook(data);
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        id="genre"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={(event) =>
          setFormData((prevFormData) => ({
            ...prevFormData,
            image: event.target.files[0],
          }))
        }
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;