// server/models/bookModel.js

const db = require('../config/database');

// Get all books
exports.getAllBooks = () => {
  return db.query('SELECT * FROM books');
};

// Get a book by ID
exports.getBookById = (id) => {
  return db.query('SELECT * FROM books WHERE id = ?', [id]);
};

// Add a new book
exports.addBook = (book) => {
  const { title, author, price, stock, dateAdded } = book;
  return db.query('INSERT INTO books (title, author, price, stock, dateAdded) VALUES (?, ?, ?, ?, ?)', 
    [title, author, price, stock, dateAdded]);
};

// Update a book
exports.updateBook = (id, book) => {
  const { title, author, price, stock, dateAdded } = book;
  return db.query('UPDATE books SET title = ?, author = ?, price = ?, stock = ?, dateAdded = ? WHERE id = ?', 
    [title, author, price, stock, dateAdded, id]);
};

// Delete a book
exports.deleteBook = (id) => {
  return db.query('DELETE FROM books WHERE id = ?', [id]);
};

// Get books by date
exports.getBooksByDate = (date) => {
  return db.query('SELECT * FROM books WHERE DATE(dateAdded) = ?', [date]);
};
