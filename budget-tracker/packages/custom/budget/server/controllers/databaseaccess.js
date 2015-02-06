'use strict';

var mongoose = require('mongoose'),
	BaseController = require('./BaseController'),
	Transaction = mongoose.model('Transaction'),
	User = mongoose.model('User'),
	Profile = mongoose.model('Profile'),
	Budget = mongoose.model('Budget'),
	Envelope = mongoose.model('Envelope'),
	Login = mongoose.model('Login');

exports.getTransactions = function(req, res, next) {
	BaseController.getAll(Transaction, req, res, next);
};

exports.getUsers = function(req, res, next) {
	BaseController.getAll(User, req, res, next);
};

exports.getProfiles = function(req, res, next) {
	BaseController.getAll(Profile, req, res, next);
};

exports.getBudgets = function(req, res, next) {
	BaseController.getAll(Budget, req, res, next);
};

exports.getEnvelopes = function(req, res, next) {
	BaseController.getAll(Envelope, req, res, next);
};

exports.getLogins = function(req, res, next) {
	BaseController.getAll(Login, req, res, next);
};
