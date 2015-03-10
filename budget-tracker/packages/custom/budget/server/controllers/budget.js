'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	BaseController = require('./basecontroller'),
    Budget = mongoose.model('Budget');


exports.create = function(req, res, next) {
	var budget = new Budget(req.body);
	//req, res, next, schemaObj, errback, callback
	BaseController.create(req, res, next, budget);
};

exports.read = function(req, res, next, id) {
	BaseController.get(req, res, next, Budget, id);
};

exports.update = function(req, res, next, id) {
	BaseController.update(req, res, next, Budget, id, req.body);
};

exports.delete = function(req, res, next, id) {
	BaseController.delete(req, res, next, Budget, id);
};
