

const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_db_user', // replace with your MySQL username
  password: 'your_db_password', // replace with your MySQL password
  database: 'your_db_name' // replace with your MySQL database name
});

module.exports = pool;
