const mysql = require('mysql');
const pool = require('../config/database');

// Find a user by username
exports.findUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

// Create a new user
exports.createUser = (username, password) => {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// Find a user by ID
exports.findUserById = (userId) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE id = ?', [userId], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};
