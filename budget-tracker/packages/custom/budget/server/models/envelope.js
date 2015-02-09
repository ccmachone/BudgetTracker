'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var EnvelopeSchema = new Schema({
	id: Number, //use _id (created by default)
	budgetId: Number,
	name: String,
	budgetAmount: Number,
	currentAmount: Number,
	rollOver: {
		canRollOver: Boolean,
		amount: Number,
		date: Date
	}
});

/**
 * Methods
 */
EnvelopeSchema.methods = {
	
	getBudgetAmount: function() {
		return this.budgetAmount;
	},

	getCurrentAmount: function() {
		return this.currentAmount;
	}
};

mongoose.model('Envelope', EnvelopeSchema);
