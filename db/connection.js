const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'companydirectory'
    },
    console.log('Connected to the companydirectory database.')
);

module.exports = db;