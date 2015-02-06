'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Transaction = mongoose.model('Transaction');

/**
 * CREATE transaction
 */
exports.create = function(req, res, next) {

    var transaction = new Transaction(req.body);
    console.log(req.body);
    transaction.save(function(err) {
        if (err) {
            res.status(400).send('Bad Request');
        } else {
            res.status(200).send('Awesome Request');
        }
    });
};

/**
 * READ transaction by id
 */
exports.read = function(req, res, next, id) {

    var query  = Transaction.where({ id: id });
    query.findOne(function (err, transaction) {
        if (err) res.status(400).send();
        if (transaction) {
            res.status(200).json(transaction.getJSON()).send();
        }
    });
};

/**
 * UPDATE transaction by id
 */
exports.update = function(req, res, next, id) {

    var query  = { id: id };
    console.log(query);
    Transaction.findOneAndUpdate(query, {id: req.body.id}, function (err) {
        if (err) {
            res.status(400).send();
        } else {
            res.status(200).send('Id ' + req.body.id + ' successfully updated');
        }
    });
};

/**
 * UPDATE transaction by id
 */
exports.delete = function(req, res, next, id) {
    
    var query  = Transaction.where({ id: id });
    query.findOneAndRemove(function (err, transaction) {
        if (err) res.status(400).send();
        if (transaction) {
            res.status(200).send('Id ' + id + ' successfully removed');
        }
    });
};