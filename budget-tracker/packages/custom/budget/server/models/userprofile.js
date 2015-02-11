'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var UserProfileSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    budgets: [Number]
});



/**
 * Methods
 */
UserProfileSchema.methods = {};

mongoose.model('UserProfile', UserProfileSchema);
