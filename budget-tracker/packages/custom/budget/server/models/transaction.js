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
    occuredOn: { type: Date, default: Date.now },
    createdOn: { type: Date, default: Date.now },
    envelopeId: {
        type: Schema.ObjectId,
        ref: 'Envelope',
        required : 'envelopeId is required'
    },
    amount: {
        type: Number,
        required : 'amount is required'
    },
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
