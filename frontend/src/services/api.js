import axios from 'axios';

const API_URL = 'http://localhost:5000';

export async function getBooks() {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
}

export async function getBookById(id) {
  const response = await axios.get(`${API_URL}/books/${id}`);
  return response.data;
}

export async function createBook(bookData) {
  const response = await axios.post(`${API_URL}/books`, bookData);
  return response.data;
}

export async function deleteBook(id) {
  const response = await axios.delete(`${API_URL}/books/${id}`);
  return response.data;
}