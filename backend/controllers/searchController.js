const Book = require('../models/book');

async function searchBooks(req, res) {
  const { q, genre, price, publicationDate } = req.query;
  const query = {};
  if (q) {
    query.$text = { $search: q };
  }
  if (genre) {
    query.genre = genre;
  }
  if (price) {
    const [minPrice, maxPrice] = price.split('-');
    query.price = { $gte: minPrice, $lte: maxPrice };
  }
  if (publicationDate) {
    const [startDate, endDate] = publicationDate.split('-');
    query.publicationDate = { $gte: startDate, $lte: endDate };
  }
  const books = await Book.find(query);
  res.json(books);
}

module.exports = { searchBooks };