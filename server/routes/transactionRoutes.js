// server/routes/transactionRoutes.js

const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Route to get all transactions
router.get('/transactions', transactionController.getAllTransactions);

// Route to get a single transaction by ID
router.get('/transactions/:id', transactionController.getTransactionById);

// Route to add a new transaction
router.post('/transactions', transactionController.addTransaction);

// Route to update an existing transaction by ID
router.put('/transactions/:id', transactionController.updateTransaction);

// Route to delete a transaction by ID
router.delete('/transactions/:id', transactionController.deleteTransaction);

// Route to filter transactions by date
router.get('/transactions/date/:date', transactionController.getTransactionsByDate);

module.exports = router;
