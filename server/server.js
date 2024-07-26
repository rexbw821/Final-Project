const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mysql = require('mysql');
const pool = require('./config/database'); // Update the path to your database configuration
const app = express();
const port = 3000; // or any port you prefer

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key', // replace with a secret key for session management
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set secure to true if using HTTPS
}));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const bookRoutes = require('./server/routes/bookRoutes');
const transactionRoutes = require('./server/routes/transactionRoutes');
const userRoutes = require('./server/routes/userRoutes');

app.use('/books', bookRoutes);
app.use('/transactions', transactionRoutes);
app.use('/users', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
