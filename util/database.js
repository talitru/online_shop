
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'tali',
    database: 'node_complete',
    password: 'dtfd123'
});

module.exports= pool.promise();