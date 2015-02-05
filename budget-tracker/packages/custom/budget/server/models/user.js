'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    budgets: [Number]
});

/**
 * Methods
 */
UserSchema.methods = {

};

mongoose.model('User', UserSchema);
