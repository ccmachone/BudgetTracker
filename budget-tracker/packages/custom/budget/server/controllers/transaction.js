'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Transaction = mongoose.model('Transaction');


exports.create = function(req, res, next) {
    console.log('CREATE!');

    var transaction = new Transaction(req.body);

    transaction.save(function(err) {
        if (err) {
            return res.status(400);
        } else {
            return res.status(200);
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

