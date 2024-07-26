// server/models/transactionModel.js

const db = require('../config/database');

// Get all transactions
exports.getAllTransactions = () => {
  return db.query('SELECT * FROM transactions');
};

// Get a transaction by ID
exports.getTransactionById = (id) => {
  return db.query('SELECT * FROM transactions WHERE id = ?', [id]);
};

// Add a new transaction
exports.addTransaction = (transaction) => {
  const { bookTitle, author, pricePerUnit, quantity, total, customerId } = transaction;
  return db.query('INSERT INTO transactions (bookTitle, author, pricePerUnit, quantity, total, customerId) VALUES (?, ?, ?, ?, ?, ?)', 
    [bookTitle, author, pricePerUnit, quantity, total, customerId]);
};

// Update a transaction
exports.updateTransaction = (id, transaction) => {
  const { bookTitle, author, pricePerUnit, quantity, total, customerId } = transaction;
  return db.query('UPDATE transactions SET bookTitle = ?, author = ?, pricePerUnit = ?, quantity = ?, total = ?, customerId = ? WHERE id = ?', 
    [bookTitle, author, pricePerUnit, quantity, total, customerId, id]);
};

// Delete a transaction
exports.deleteTransaction = (id) => {
  return db.query('DELETE FROM transactions WHERE id = ?', [id]);
};

// Get transactions by date
exports.getTransactionsByDate = (date) => {
  return db.query('SELECT * FROM transactions WHERE DATE(transactionDate) = ?', [date]);
};
