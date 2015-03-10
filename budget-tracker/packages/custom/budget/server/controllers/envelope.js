'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	BaseController = require('./basecontroller'),
    Envelope = mongoose.model('Envelope');


exports.create = function(req, res, next) {
	var envelope = new Envelope(req.body);
	BaseController.create(req, res, next, envelope);
};

exports.read = function(req, res, next, id) {
	BaseController.get(req, res, next, Envelope, id);
};

exports.update = function(req, res, next, id) {
	BaseController.update(req, res, next, Envelope, id, req.body);
};

exports.delete = function(req, res, next, id) {
	BaseController.delete(req, res, next, Envelope, id);
};

exports.getEnvelopes = function(req, res, next, budget_id) {
	Envelope.find({budgetId : budget_id}, function(err, envelopes) {
		if(err) {
			BaseController.respondToError(res, 400, 'error getting envelopes', err);
		} else {
			res.status(200).json(envelopes);
		}
	});
};