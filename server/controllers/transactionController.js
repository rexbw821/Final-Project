// server/controllers/transactionController.js

const transactionModel = require('../models/transactionModel');

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionModel.getAllTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await transactionModel.getTransactionById(req.params.id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new transaction
exports.addTransaction = async (req, res) => {
  try {
    const newTransaction = await transactionModel.addTransaction(req.body);
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a transaction
exports.updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await transactionModel.updateTransaction(req.params.id, req.body);
    if (updatedTransaction) {
      res.json(updatedTransaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const result = await transactionModel.deleteTransaction(req.params.id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Transaction deleted' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get transactions by date
exports.getTransactionsByDate = async (req, res) => {
  try {
    const date = req.params.date;
    const transactions = await transactionModel.getTransactionsByDate(date);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
