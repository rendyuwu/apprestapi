'use strict';

const respone = require('./res');
const connection = require('./koneksi');

exports.index = (req, res) => {
    connection.query('SELECT * FROM clan486', (error, rows, field) => {
        if (error) {
            connection.log(error);
        } else {
            respone.ok(rows, res);
        }
    });
}