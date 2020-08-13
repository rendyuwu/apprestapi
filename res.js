'use strict';

exports.ok = (message, values, res, ukm) => {
    const data = {
        status: 200,
        message: message,
        ukm: ukm,
        values: values
    };

    res.json(data);
    res.end();
}

exports.err = (message, values, status, res) => {
    const data = {
        status: status,
        message: message,
        values: values
    };

    res.json(data);
    res.end();
}