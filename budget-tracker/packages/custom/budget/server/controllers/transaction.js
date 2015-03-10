'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    BaseController = require('./basecontroller'),
    Transaction = mongoose.model('Transaction');

/**
 * CREATE transaction
 */
exports.create = function(req, res, next) {

    var transaction = new Transaction(req.body);
    BaseController.create(req, res, next, transaction);
};

/**
 * READ transaction by id
 */
exports.read = function(req, res, next, id) {
    BaseController.get(req, res, next, Transaction, id);
};

/**
 * UPDATE transaction by id
 */
exports.update = function(req, res, next, id) {
    BaseController.update(req, res, next, Transaction, id, req.body);
};

/**
 * UPDATE transaction by id
 */
exports.delete = function(req, res, next, id) {
    BaseController.delete(req, res, next, Transaction, id);
}; 

exports.getTransactions = function(req, res, next, envelope_id) {
	Transaction.find({envelopeId : envelope_id}, function(err, transactions) {
        if(err) {
            BaseController.respondToError(res, 400, 'error getting transactions', err);
        } else {
            res.status(200).json(transactions);
        }
	});
};