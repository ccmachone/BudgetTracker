'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Transaction = mongoose.model('Transaction');


exports.create = function(req, res, next) {
    console.log('my request');
    console.log(req.body);

    var transaction = new Transaction(req.body);

    transaction.save(function(err) {
        if (err) {
            res.status(400).send('Bad Request');
        } else {
            res.status(200).send('Awesome Request');
        }
    });
};

/**
 * Send Transaction
 */
exports.me = function(req, res) {
    res.json(req.transaction || null);
};

/**
 * Find transaction by id
 */
exports.transaction = function(req, res, next, id) {
    Transaction
    .findOne({
        _id: id
    })
    .exec(function(err, transaction) {
        if (err) return next(err);
        if (!transaction) return next(new Error('Failed to load transaction ' + id));
        req.profile = transaction;
        next();
    });
};

