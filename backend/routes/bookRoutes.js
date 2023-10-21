const express = require('express');
const multer = require('multer');
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', upload.single('image'), createBook);
router.put('/:id', upload.single('image'), updateBook);
router.delete('/:id', deleteBook);

module.exports = router;