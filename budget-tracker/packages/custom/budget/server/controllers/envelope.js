'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	BaseController = require('./basecontroller'),
    Envelope = mongoose.model('Envelope');


exports.create = function(req, res, next) {
	var envelope = new Envelope(req.body);
	BaseController.createQuery(req, res, next, envelope);
};

exports.read = function(req, res, next, id) {
	BaseController.readQuery(req, res, next, Envelope, id);
};

exports.update = function(req, res, next, id) {
	BaseController.update(req, res, next, Envelope, id, req.body);
};

exports.delete = function(req, res, next, id) {
	BaseController.deleteQuery(req, res, next, Envelope, id);
};
