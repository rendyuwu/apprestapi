'use strict';

const respone = require('./res');
const connection = require('./koneksi');

// menampilkan index
exports.index = (req, res) => {
    respone.ok('Welcome to Rest API ukm STIMATA!', res);
}

// mengambil semua data anggota ukm yag dipilih
exports.getAnggotaUkm = (req, res) => {
    const ukm = req.params.ukm;

    connection.query(`SELECT * FROM ${ukm}`, (error, rows, fields) => {
        if (error) {
            respone.err('Data not found!', 404, res);
        } else {
            respone.ok('Berhasil menampilkan data', rows, res, ukm);
        }
    });
}

// menampilkan data anggota ukm berdasarkan id
exports.getAnggotaUkmById = (req, res) => {
    const id = req.params.id;
    const ukm = req.params.ukm;

    connection.query(`SELECT * FROM ${ukm} WHERE id = ${id}`, (error, rows, fields) => {
        if (error) {
            respone.err('Data not found!', 404, res);
        } else {
            if (rows.length < 1) {
                respone.err('Data not found!', 404, res);
            } else {
                respone.ok('Berhasil menampilkan data', rows, res, ukm);
            }
        }
    });
}

// menambah data ukm
exports.addAnggotaUkm = (req, res) => {
    const ukm = req.params.ukm;

    const data = {
        nim: req.body.nim,
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        jabatan: req.body.jabatan,
        telp: req.body.telp,
        email: req.body.email
    }

    if (data.nim.length < 1 || data.nama.length < 1 || data.jurusan.length < 1 || data.jabatan.length < 1 || data.telp.length < 1 || data.email.length < 1) {
        respone.err('Gagal menambahkan anggota!', data, 403, res);
    } else {
        connection.query(`INSERT INTO ${ukm} (nim, nama, jurusan, jabatan, telp, email) VALUES (?,?,?,?,?,?)`, [
            data.nim, data.nama, data.jurusan, data.jabatan, data.telp, data.email
        ], (error, rows, fields) => {
            if (error) {
                respone.err(error, data, 403, res);
            } else {
                respone.ok('Berhasil menambahkan data', data, res, ukm);
            }
        });
    }
}

// merubah data anggota ukm
exports.updateAnggotaUkmById = (req, res) => {
    const ukm = req.params.ukm;

    const data = {
        id: req.body.id,
        nim: req.body.nim,
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        jabatan: req.body.jabatan,
        telp: req.body.telp,
        email: req.body.email
    };

    if (data.nim.length < 1 || data.nama.length < 1 || data.jurusan.length < 1 || data.jabatan.length < 1 || data.telp.length < 1 || data.email.length < 1) {
        respone.err('Gagal merubah anggota!', data, 403, res);
    } else {
        connection.query(`UPDATE ${ukm} SET nim = ?, nama = ?, jurusan = ?, jabatan = ?, telp = ?, email = ? WHERE id = ?`, [data.nim, data.nama, data.jurusan, data.jabatan, data.telp, data.email, data.id], (error, rows) => {
            if (error) {
                respone.err(error, data, 403, res);
            } else {
                respone.ok('Berhasil merubah data', data, res, ukm);
            }
        });
    }
}

// menghapus data anggota ukm
exports.deleteAnggotaUkmById = (req, res) => {
    const ukm = req.params.ukm;
    const id = req.body.id;

    connection.query(`DELETE FROM ${ukm} WHERE id = ?`, [id], (error, rows, fields) => {
        if (error) {
            respone.err(`Gagal menghapus data anggota ${ukm}!`, {}, 403, res);
        } else {
            respone.ok(`Berhasil menghapus data anggota ${ukm}`, rows, res, ukm);
        }
    });
}