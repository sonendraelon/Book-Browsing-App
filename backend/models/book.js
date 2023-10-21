const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  publicationDate: { type: Date, default: Date.now },
});

bookSchema.index({ title: 'text', author: 'text', genre: 'text', description: 'text' });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;