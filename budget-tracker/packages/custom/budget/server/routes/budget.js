'use strict';

/* jshint -W098 */

var transactionController = require('../controllers/transaction'),
    databaseAccessController = require('../controllers/databaseaccess'),
    budgetController = require('../controllers/budget'),
    envelopeController = require('../controllers/envelope'),
    passport = require('passport'),
    config = require('meanio').loadConfig();

// The Package is past automatically as first parameter
module.exports = function(Budget, app, auth, database) {

    // app.post('/login', passport.authenticate('local', {
    //         successRedirect: '/',
    //         failureRedirect: '/login'
    //     })
    // );

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
    app.post('/transaction', function(req, res, next) {
        transactionController.create(req,res,next);
    });

    //READ
    app.get('/transaction/:id', function(req, res, next) {
        transactionController.read(req, res, next, req.params.id);
    });

    //UPDATE
    app.put('/transaction/:id', function(req, res, next) {
        transactionController.update(req,res,next, req.params.id);
    });

    //DELETE
    app.delete('/transaction/:id', function(req, res, next) {
        transactionController.delete(req,res,next,req.params.id);
    });

// BUDGET

    //CREATE
    app.post('/budget', function(req, res, next) {
        budgetController.create(req, res, next);
    });

    //READ
    app.get('/budget/:id', function(req, res, next) {
        budgetController.read(req, res, next, req.params.id);
    });

    //UPDATE
    app.put('/budget/:id', function(req, res, next) {
        budgetController.update(req,res,next, req.params.id);
    });

    //DELETE
    app.delete('/budget/:id', function(req, res, next) {
        budgetController.delete(req,res,next,req.params.id);
    });

// ENVELOPE

    //CREATE
    app.post('/envelope', function(req, res, next) {
        envelopeController.create(req, res, next);
    });

    //READ
    app.get('/envelope/:id', function(req, res, next) {
        envelopeController.read(req, res, next, req.params.id);
    });

    //UPDATE
    app.put('/envelope/:id', function(req, res, next) {
        envelopeController.update(req,res,next, req.params.id);
    });

    //DELETE
    app.delete('/envelope/:id', function(req, res, next) {
        envelopeController.delete(req,res,next,req.params.id);
    });

// Database routes

    app.get('/database', function(req, res, next) {
        console.log(req.headers.host + '/database/budgets');
        res.status(200).send('<a href="http://' + req.headers.host + '/database/budgets">Budgets</a> <br />' +
            '<a href="http://' + req.headers.host + '/database/transactions">Transactions</a> <br />' +
            '<a href="http://' + req.headers.host + '/database/users">Users</a> <br />' +
            '<a href="http://' + req.headers.host + '/database/profiles">Profiles</a> <br />' +
            '<a href="http://' + req.headers.host + '/database/envelopes">Envelopes</a> <br />' +
            '<a href="http://' + req.headers.host + '/database/logins">Logins</a> <br />');
    });

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
