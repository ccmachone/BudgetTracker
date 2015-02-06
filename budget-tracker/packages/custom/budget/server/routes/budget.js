'use strict';

/* jshint -W098 */

var transaction = require('../controllers/transaction'),
    databaseAccess = require('../controllers/databaseaccess'),
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

// Create a new transaction
    app.post('/transaction/create', function(req, res, next) {
        transaction.create(req,res,next);
    });




// Database routes

    app.get('/database/transactions', function(req, res, next) {
        databaseAccess.getTransactions(req, res, next);
    });

    app.get('/database/users', function(req, res, next) {
        databaseAccess.getUsers(req, res, next);
    });

    app.get('/database/profiles', function(req, res, next) {
        databaseAccess.getProfiles(req, res, next);
    });

    app.get('/database/budgets', function(req, res, next) {
        databaseAccess.getBudgets(req, res, next);
    });

    app.get('/database/envelopes', function(req, res, next) {
        databaseAccess.getEnvelopes(req, res, next);
    });

    app.get('/database/logins', function(req, res, next) {
        databaseAccess.getLogins(req, res, next);
    });
};
