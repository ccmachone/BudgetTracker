'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var ProfileSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    budgets: [Number]
});



/**
 * Methods
 */
ProfileSchema.methods = {};

mongoose.model('Profile', ProfileSchema);
