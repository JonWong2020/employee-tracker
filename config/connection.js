require('dotenv').config();

const mysql = require('mysql2');
const env = process.env;

const connection = mysql.createConnection({
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    host: 'localhost',
    port: 3306
  
});

module.exports = connection;