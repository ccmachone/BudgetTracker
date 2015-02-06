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
	getJSON : function() {
        var result = {};

        result.id = this.id;
        result.occuredOn = this.occuredOn; 
        result.createdOn = this.createdOn; 
        result.envelopeId = this.envelopeId; 
        result.amount = this.amount; 
        result.entity = this.entity; 
        result.description = this.description; 
        result.type = this.type; 

        return JSON.stringify(result);
    }
};

mongoose.model('Transaction', TransactionSchema);