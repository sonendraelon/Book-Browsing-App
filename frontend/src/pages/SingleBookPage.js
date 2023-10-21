import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleBook from '../components/SingleBook';
import { getBookById } from '../services/api';

function SingleBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      const data = await getBookById(id);
      setBook(data);
    }
    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return <SingleBook book={book} />;
}

export default SingleBookPage;