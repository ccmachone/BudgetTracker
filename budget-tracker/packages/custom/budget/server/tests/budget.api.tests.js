/* jshint -W079 */ 
/* Related to https://github.com/linnovate/mean/issues/898 */
'use strict';

/**
 * Module dependencies.
 */


var app = require('../../../../../server'),
mongoose = require('mongoose'),
should = require('should'),
request = require('supertest'),
Transaction = mongoose.model('Transaction'),
Budget = mongoose.model('Budget'),
Envelope = mongoose.model('Envelope'),
Login = mongoose.model('Login'),
Profile = mongoose.model('Profile');

describe('BudgetTracker API Unit Tests', function(){

});