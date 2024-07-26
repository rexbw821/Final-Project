// server/controllers/bookController.js

const bookModel = require('../models/bookModel');

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await bookModel.getBookById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const newBook = await bookModel.addBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await bookModel.updateBook(req.params.id, req.body);
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const result = await bookModel.deleteBook(req.params.id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get books by date
exports.getBooksByDate = async (req, res) => {
  try {
    const date = req.params.date;
    const books = await bookModel.getBooksByDate(date);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
