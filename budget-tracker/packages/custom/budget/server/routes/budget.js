'use strict';

/* jshint -W098 */

var transactionController = require('../controllers/transaction'),
    databaseAccessController = require('../controllers/databaseaccess'),
    budgetController = require('../controllers/budget'),
    envelopeController = require('../controllers/envelope'),
    config = require('meanio').loadConfig();

// The Package is past automatically as first parameter
module.exports = function(Budget, app, auth, database) {

    app.get('/budget/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/budget/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/budget/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/budget/example/render', function(req, res, next) {
        Budget.render('index', {
            package: 'budget'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });

// TRANSACTION
    
    //CREATE
    app.post('/transaction/create', function(req, res, next) {
        transactionController.create(req,res,next);
    });

    //READ
    app.get('/transaction/:id', function(req, res, next) {
        transactionController.read(req, res, next, req.params.id);
    });

    //UPDATE
    app.post('/transaction/update/:id', function(req, res, next) {
        transactionController.update(req,res,next, req.params.id);
    });

    //DELETE
    app.post('/transaction/delete/:id', function(req, res, next) {
        transactionController.delete(req,res,next,req.params.id);
    });

// BUDGET

    //CREATE
    app.post('/budget/create', function(req, res, next) {
        budgetController.create(req, res, next);
    });

    //READ
    app.get('/budget/:id', function(req, res, next) {
        budgetController.read(req, res, next, req.params.id);
    });

    //UPDATE
    app.post('/budget/update/:id', function(req, res, next) {
        budgetController.update(req,res,next, req.params.id);
    });

    //DELETE
    app.post('/budget/delete/:id', function(req, res, next) {
        budgetController.delete(req,res,next,req.params.id);
    });

// ENVELOPE

    //CREATE
    app.post('/envelope/create', function(req, res, next) {
        envelopeController.create(req, res, next);
    });

    //READ
    app.get('/envelope/:id', function(req, res, next) {
        envelopeController.read(req, res, next, req.params.id);
    });

    //UPDATE
    app.post('/envelope/update/:id', function(req, res, next) {
        envelopeController.update(req,res,next, req.params.id);
    });

    //DELETE
    app.post('/envelope/delete/:id', function(req, res, next) {
        envelopeController.delete(req,res,next,req.params.id);
    });

// Database routes

    app.get('/database/transactions', function(req, res, next) {
        databaseAccessController.getTransactions(req, res, next);
    });

    app.get('/database/users', function(req, res, next) {
        databaseAccessController.getUsers(req, res, next);
    });

    app.get('/database/profiles', function(req, res, next) {
        databaseAccessController.getProfiles(req, res, next);
    });

    app.get('/database/budgets', function(req, res, next) {
        databaseAccessController.getBudgets(req, res, next);
    });

    app.get('/database/envelopes', function(req, res, next) {
        databaseAccessController.getEnvelopes(req, res, next);
    });

    app.get('/database/logins', function(req, res, next) {
        databaseAccessController.getLogins(req, res, next);
    });
};
