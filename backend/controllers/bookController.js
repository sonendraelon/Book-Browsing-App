const Book = require('../models/book');
const { sendNotificationEmail } = require('../services/notification');
const { uploadImageToS3, deleteImageFromS3 } = require('../services/s3');

async function getBooks(req, res) {
  const books = await Book.find();
  res.json(books);
}

async function getBookById(req, res) {
  const book = await Book.findById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}

async function createBook(req, res) {
  const { title, author, price, genre, description } = req.body;
  const image = req.file.filename;
  const imageUrl = await uploadImageToS3(image);
  const book = new Book({ title, author, price, genre, description, image: imageUrl });
  await book.save();
  const emailText = `Your book "${book.title}" has been listed!`;
  const emailHtml = `<p>Your book "${book.title}" has been listed!</p>`;
  sendNotificationEmail('user@example.com', 'New Book Listed', emailText, emailHtml);
  res.json(book);
}

async function updateBook(req, res) {
  const { title, author, price, genre, description } = req.body;
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  book.title = title;
  book.author = author;
  book.price = price;
  book.genre = genre;
  book.description = description;
  if (req.file) {
    const imageUrl = await uploadImageToS3(req.file.filename);
    book.image = imageUrl;
  }
  await book.save();
  res.json(book);
}

async function deleteBook(req, res) {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (book) {
    await deleteImageFromS3(book.image);
    res.json({ message: 'Book deleted' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };