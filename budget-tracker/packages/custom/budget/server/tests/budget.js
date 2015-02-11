/* jshint -W079 */ 
/* Related to https://github.com/linnovate/mean/issues/898 */
'use strict';

/**
 * Module dependencies.
 */


  var mongoose = require('mongoose'),
  Transaction = mongoose.model('Transaction');

/**
 * Globals
 */
var transaction1, transaction2;

/**
 * Test Suites
 */
describe('<Unit Test>', function() {
  describe('Model Transaction:', function() {

    before(function(done) {
      transaction1 = {
          id: 1234567, //use _id (created by default)
          occuredOn: '2015-02-11T02:58:22.294Z',
          createdOn: '2015-02-11T02:58:22.294Z',
          envelopeId: 1,
          amount: 100,
          entity: 'Your Mom',
          description: 'She\'s fat',
          type: 'Cash'
      };

      transaction2 = {
        id: 7654321, //use _id (created by default)
        occuredOn: '2015-02-11T02:58:22.294Z',
        createdOn: '2015-02-11T02:58:22.294Z',
        envelopeId: 2,
        amount: 100,
        entity: 'Your Dad',
        description: 'He\'s fat',
        type: 'Credit Card'
      };

      done();
    });

    describe('Method Save', function() {
      it('should save user', function(done) {
        Transaction.save({
          transaction1
        }, function(err, obj) {
          console.log("obj = " + obj);

        });
      });
    });

    after(function(done) {

      done();
    });
  });
});
