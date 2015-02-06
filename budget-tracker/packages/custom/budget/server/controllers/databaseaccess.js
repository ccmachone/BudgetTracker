'use strict';

var mongoose = require('mongoose'),
	Transaction = mongoose.model('Transaction'),
	User = mongoose.model('User'),
	Profile = mongoose.model('Profile'),
	Budget = mongoose.model('Budget'),
	Envelope = mongoose.model('Envelope'),
	Login = mongoose.model('Login');


var databaseRetriever = function(SchemaModel, req, res, next) {
	SchemaModel.find(function(err, objs) {
		if(err) {
			res.status(400).send('Something went wrong with the database lookup');
		} else {
			res.status(200).send(objs);
		}
	});
};

exports.getTransactions = function(req, res, next) {
	databaseRetriever(Transaction, req, res, next);
};

exports.getUsers = function(req, res, next) {
	databaseRetriever(User, req, res, next);
};

exports.getProfiles = function(req, res, next) {
	databaseRetriever(Profile, req, res, next);
};

exports.getBudgets = function(req, res, next) {
	databaseRetriever(Budget, req, res, next);
};

exports.getEnvelopes = function(req, res, next) {
	databaseRetriever(Envelope, req, res, next);
};

exports.getLogins = function(req, res, next) {
	databaseRetriever(Login, req, res, next);
};
