/* jshint -W079 */ 
/* Related to https://github.com/linnovate/mean/issues/898 */
'use strict';

/**
 * Module dependencies.
 */


var mongoose = require('mongoose'),
// should = require('should'),
Transaction = mongoose.model('Transaction'),
Budget = mongoose.model('Budget'),
// User = mongoose.model('User'),
Envelope = mongoose.model('Envelope');
// Login = mongoose.model('Login'),
// Profile = mongoose.model('Profile');

/**
 * Globals
 */
var transaction1, transaction2;
var budget1, budget2;
var envelope1, envelope2;
// var login1, login2
// var profile1, profile2;
// var t1id, t2id, e1id, e2id, b1id, b2id;
var t1id, e1id, b1id;

/**
 * Test Suites
 */
describe('BudgetTracker Model Unit Tests:', function() {
    describe('Budget, Envelope, and Transaction Model:', function() {

        before(function(done) {
            budget1 = {
                _id: mongoose.Types.ObjectId(), //use _id (it's created by default)
                name: 'Budget Number One',
                owners: [mongoose.Types.ObjectId()],
                participants: [mongoose.Types.ObjectId()],
                envelopes: [mongoose.Types.ObjectId()],
                frequency: {
                    type: 'monthly',
                    enum: ['monthly']   //add weekly, daily, etc. for v1.5 or w/e
                }
            };

            budget2 = {
                _id: mongoose.Types.ObjectId(), //use _id (it's created by default)
                name: 'Budget Number Two',
                owners: [mongoose.Types.ObjectId()],
                participants: [mongoose.Types.ObjectId()],
                envelopes: [mongoose.Types.ObjectId()],
                frequency: {
                    type: 'monthly',
                    enum: ['monthly']   //add weekly, daily, etc. for v1.5 or w/e
                }
            };

            envelope1 = {
                _id: mongoose.Types.ObjectId(), //use _id (created by default)
                budgetId: budget1._id,
                name: 'Food',
                budgetAmount: 400,
                currentAmount: 300,
                rollOver: {
                    canRollOver: false,
                    amount: 300,
                    date: '2015-02-11T02:58:22.294Z'
                }
            };

            envelope2 = {
                _id: mongoose.Types.ObjectId(), //use _id (created by default)
                budgetId: budget2._id,
                name: 'Gas',
                budgetAmount: 200,
                currentAmount: 150,
                rollOver: {
                    canRollOver: false,
                    amount: 150,
                    date: '2015-02-11T02:58:22.294Z'
                }
            };

            transaction1 = {
                _id: mongoose.Types.ObjectId(), //use _id (created by default)
                occuredOn: '2015-02-11T02:58:22.294Z',
                createdOn: '2015-02-11T02:58:22.294Z',
                envelopeId: envelope1._id,
                amount: 100,
                entity: 'Your Mom',
                description: 'She\'s fat',
                type: 'Cash'
            };

            transaction2 = {
                _id: mongoose.Types.ObjectId(), //use _id (created by default)
                occuredOn: '2015-02-11T02:58:22.294Z',
                createdOn: '2015-02-11T02:58:22.294Z',
                envelopeId: envelope2._id,
                amount: 100,
                entity: 'Your Dad',
                description: 'He\'s fat',
                type: 'Credit Card'
            };

            done();
        });

        describe('Testing the Transaction save method', function() {

            it('should save transaction', function(done) {
                var transaction = new Transaction(transaction1);

                transaction.save(function(err, obj) {
                    if (!err) {
                        t1id = obj._id;
                        done();
                    } else {
                        console.log(err);
                    }
                }); 
            });
        });

        describe('Testing the Envelope save method', function () {

            it('should save envelope', function(done) {
                var envelope = new Envelope(envelope1);

                envelope.save(function(err, obj) {
                    if(!err) {
                        e1id = obj._id;
                        done();
                    } else {
                        console.log(err);
                    }
                });
            });
        });

        describe('Testing the Budget save method', function() {
            
            it('should save budget', function(done) {
                var budget = new Budget(budget1);

                budget.save(function(err, obj) {
                    if(!err){
                        b1id = obj._id;
                        done();
                    } else {
                        console.log(err);
                    }
                });
            });
        });

        after(function(done) {

            var query  = Transaction.where({ _id: t1id });
            var good = true;

            query.findOneAndRemove(function (err) {
                if (err) {
                    good = false;
                }
            });

            query  = Envelope.where({ _id: e1id });

            query.findOneAndRemove(function (err) {
                if (err) {
                    good = false;
                }
            });

            query  = Budget.where({ _id: b1id });

            query.findOneAndRemove(function (err) {
                if (err) {
                    good = false;
                }
            });

            if(good){
                done();
            }
        });
    });
});
