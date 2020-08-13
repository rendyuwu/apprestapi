'use strict';

module.exports = (app) => {
    const controller = require('./controller');

    // route index
    app.route('/')
        .get(controller.index);

    // route crud ukm
    app.route('/:ukm')
        .get(controller.getAnggotaUkm)
        .post(controller.addAnggotaUkm)
        .put(controller.updateAnggotaUkmById);

    // route detail & update anggota by id
    app.route('/:ukm/:id')
        .get(controller.getAnggotaUkmById);
}