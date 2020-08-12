'use strict';

const respone = require('./res');
const connection = require('./koneksi');

exports.index = (req, res) => {
    connection.query('SELECT * FROM clan486', (error, rows, fields) => {
        if (error) {
            connection.log(error);
        } else {
            respone.ok(rows, res);
        }
    });
}

exports.getAnggotaById = (req, res) => {
    let id = req.params.id;

    connection.query(`SELECT * FROM clan486 WHERE id = ${id}`, (error, rows, fields) => {
        if (error) {
            connection.log(error);
        } else {
            respone.ok(rows, res);
        }
    });
}