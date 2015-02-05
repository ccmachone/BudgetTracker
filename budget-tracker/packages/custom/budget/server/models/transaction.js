'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var TransactionSchema = new Schema({
    id: Number,
    occuredOn: Date,
    createdOn: Date,
    envelopeId: Number,
    amount: Number,
    entity: String,
    description: String,
    type: String
});

/**
 * Methods
 */
TransactionSchema.methods = {

};

mongoose.model('Transaction', TransactionSchema);
