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
    BaseController.createQuery(req, res, next, transaction);
};

/**
 * READ transaction by id
 */
exports.read = function(req, res, next, id) {
    BaseController.readQuery(req, res, next, Transaction, id);
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
    BaseController.deleteQuery(req, res, next, Transaction, id);
}; 