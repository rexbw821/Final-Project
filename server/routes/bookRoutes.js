// server/routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route to get all books
router.get('/books', bookController.getAllBooks);

// Route to get a single book by ID
router.get('/books/:id', bookController.getBookById);

// Route to add a new book
router.post('/books', bookController.addBook);

// Route to update an existing book by ID
router.put('/books/:id', bookController.updateBook);

// Route to delete a book by ID
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
