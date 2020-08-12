'use strict';

const respone = require('./res');
const connection = require('./koneksi');

exports.index = (req, res) => {
    respone.ok('Aplikasi rest api berjalan');
}