'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	BaseController = require('./basecontroller'),
    Budget = mongoose.model('Budget');


exports.create = function(req, res, next) {
	var budget = new Budget(req.body);
	BaseController.createQuery(req, res, next, budget);
};

exports.read = function(req, res, next, id) {
	BaseController.readQuery(req, res, next, Budget, id);
};

exports.update = function(req, res, next, id) {
	BaseController.update(req, res, next, Budget, id, req.body);
};

exports.delete = function(req, res, next, id) {
	BaseController.deleteQuery(req, res, next, Budget, id);
};
