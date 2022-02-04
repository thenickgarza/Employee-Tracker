const mysql = require('mysql2');

require('dotenv').config();

// Connects to the DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        // My MySQL username
        user: process.env.DB_USER,
        // Your MySQL password
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
    },
    console.log('Connected to the Employee Tracker database.')
);

module.exports = db;