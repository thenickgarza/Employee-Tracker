const mysql = require('mysql2');

// Connects to the DATABASE
const db = mysql.createConnection(
    {
        host: process.env.HOST,
        // My MySQL username
        user: process.env.DB_USER,
        // Your MySQL password
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log('Connected to the Employee Tracker database.')
);

module.exports = db;