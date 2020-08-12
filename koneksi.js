const mysql = require('mysql');

// buat konfigurasi koneksi
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ukm'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql berhasil terkoneksi');
});

module.exports = conn;