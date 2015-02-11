'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	BaseController = require('./basecontroller'),
    Profile = mongoose.model('Profile');


exports.create = function(req, res, next) {
	var profile = new Profile(req.body);
	BaseController.create(req, res, next, profile);
};

exports.read = function(req, res, next, id) {
	BaseController.get(req, res, next, Profile, id);
};

exports.update = function(req, res, next, id) {
	BaseController.update(req, res, next, Profile, id, req.body);
};

exports.delete = function(req, res, next, id) {
	BaseController.delete(req, res, next, Profile, id);
};
