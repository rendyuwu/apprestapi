'use strict';

module.exports = (app) => {
    const controller = require('./controller');

    app.route('/')
        .get(controller.index);
}